/*
  Portfolio website logic. To change YOUR PROJECTS, edit projects.js instead.
  You normally do not need to touch this file.
*/
(() => {
  "use strict";

  const meta = {
    hardware: {
      title: "Hardware Projects",
      kicker: "MECHANISMS / PROTOTYPING / INTEGRATION",
      description: "Mechanisms, actuation, prototyping, and robot integration."
    },
    software: {
      title: "Software Projects",
      kicker: "CONTROL / VISION / ROBOTICS SOFTWARE",
      description: "Visual servoing, ROS 2, teleoperation, and feedback control."
    }
  };

  const grid = document.getElementById("project-grid");
  const dialog = document.getElementById("project-dialog");
  const detailContent = document.getElementById("detail-content");
  const detailEyebrow = document.getElementById("detail-eyebrow");
  let currentCategory = "hardware";
  let lastFocusedButton = null;

  // Escape editable text before inserting it into the page.
  const safe = (text = "") => String(text).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);

  const tagsHtml = (tags = []) => tags.map(tag => `<span class="tag">${safe(tag)}</span>`).join("");
  const labelFor = category => category === "hardware" ? "HARDWARE" : "SOFTWARE";

  function coverMarkup(project, category, detail = false) {
    return `
      <div class="project-cover ${detail ? "detail-cover" : ""}">
        ${detail ? "" : `<span class="cover-top-label">${labelFor(category)} / ${safe(project.number)}</span>`}
        <div class="cover-placeholder" aria-hidden="true">
          <span class="cover-icon">${category === "hardware" ? "▧" : "⌘"}</span>
          <span class="cover-label">${safe(project.eyebrow.toUpperCase())}</span>
          <span class="cover-small">PROJECT / ${safe(project.number)}</span>
        </div>
        <img data-src="${safe(project.image)}" data-fallback="${safe(project.fallbackImage || "")}" alt="${safe(project.imageAlt || project.title)}" loading="lazy">
      </div>`;
  }

  // Until an image exists, its designed placeholder is shown instead.
  // Adding a photo with the correct name makes it appear, without edits.
  function startImageLoading(root) {
    root.querySelectorAll("img[data-src]").forEach(img => {
      const cover = img.closest(".project-cover");
      const primary = img.dataset.src;
      const fallback = img.dataset.fallback;
      let fallbackTried = false;
      img.addEventListener("load", () => cover.classList.add("is-loaded"));
      img.addEventListener("error", () => {
        if (fallback && !fallbackTried) {
          fallbackTried = true;
          img.src = fallback;
        } else {
          img.removeAttribute("src");
          cover.classList.remove("is-loaded");
        }
      });
      img.src = primary;
      if (img.complete && img.naturalWidth > 0) cover.classList.add("is-loaded");
    });
  }

  function cardMarkup(project, category, index) {
    return `<article class="project-card ${index === 0 ? "featured" : ""}">
      ${coverMarkup(project, category)}
      <div class="project-body">
        <div class="project-topline"><span>${safe(project.eyebrow)}</span><span class="project-index">${safe(project.number)} / ${String(PORTFOLIO_PROJECTS[category].length).padStart(2,"0")}</span></div>
        <h4>${safe(project.title)}</h4>
        <p>${safe(project.description)}</p>
        <div class="tag-row">${tagsHtml(project.tags)}</div>
        <button class="view-project" type="button" data-project="${safe(project.id)}">View project details <span aria-hidden="true">↗</span></button>
      </div>
    </article>`;
  }

  function showCategory(category, updateHash = false) {
    if (!(category in PORTFOLIO_PROJECTS)) return;
    currentCategory = category;
    const projects = PORTFOLIO_PROJECTS[category];
    document.getElementById("category-title").textContent = meta[category].title;
    document.getElementById("category-kicker").textContent = meta[category].kicker;
    document.getElementById("category-description").textContent = meta[category].description;
    document.getElementById("project-total").textContent = `${String(projects.length).padStart(2, "0")} PROJECTS`;
    document.querySelectorAll("[data-category]").forEach(button => {
      const selected = button.dataset.category === category;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    grid.innerHTML = projects.map((project, i) => cardMarkup(project, category, i)).join("");
    startImageLoading(grid);
    if (updateHash) history.replaceState(null, "", `#${category}`);
  }

  function fileExists(url) {
    // Browser file:// preview doesn't support fetch(HEAD), so show PDF links
    // locally. On GitHub Pages, only links to uploaded PDFs are shown.
    if (location.protocol === "file:") return Promise.resolve(true);
    return fetch(url, { method: "HEAD" }).then(response => response.ok).catch(() => false);
  }

  async function attachDocuments(project, root) {
    const section = root.querySelector("#detail-documents-section");
    const list = root.querySelector("#detail-documents");
    if (!section || !list || !project.documents?.length) return;
    const available = await Promise.all(project.documents.map(async doc => ({
      ...doc, available: await fileExists(doc.file)
    })));
    // Don't write into a modal that's switched to another project meanwhile.
    if (dialog.dataset.project !== project.id) return;
    const docs = available.filter(doc => doc.available);
    if (!docs.length) return;
    section.hidden = false;
    list.innerHTML = docs.map(doc => `<a class="document-link" target="_blank" rel="noopener noreferrer" href="${safe(doc.file)}"><span aria-hidden="true">▤</span>${safe(doc.label)} ↗</a>`).join("");
  }

  // Local videos are shown only after the browser successfully reads their
  // metadata. Files that have not been added yet do not leave broken players.
  function attachVideos(project, root) {
    const section = root.querySelector("#detail-video-section");
    const videoGrid = root.querySelector("#detail-video-grid");
    if (!section || !videoGrid) return;

    (project.videos || []).forEach(item => {
      const tile = document.createElement("div");
      tile.className = "video-item";
      tile.hidden = true;
      const caption = document.createElement("p");
      caption.className = "media-caption";
      caption.textContent = item.label;
      const video = document.createElement("video");
      video.className = "detail-media";
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", item.label);
      if (item.poster) video.poster = item.poster;
      video.addEventListener("loadedmetadata", () => {
        if (dialog.dataset.project !== project.id) return;
        tile.hidden = false;
        section.hidden = false;
      });
      video.addEventListener("error", () => { tile.hidden = true; });
      tile.append(caption, video);
      videoGrid.appendChild(tile);
      video.src = item.file;
    });

    if (project.youtube?.id) {
      const tile = document.createElement("div");
      tile.className = "video-item";
      const caption = document.createElement("p");
      caption.className = "media-caption";
      caption.textContent = project.youtube.label || "Video demonstration";
      const wrapper = document.createElement("div");
      wrapper.className = "video-embed";
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(project.youtube.id)}`;
      iframe.title = project.youtube.label || "Project demonstration";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      wrapper.appendChild(iframe);
      tile.append(caption, wrapper);
      videoGrid.appendChild(tile);
      section.hidden = false;
    }
  }

  function galleryMarkup(project) {
    if (!project.gallery?.length) return "";
    return `<section class="detail-section detail-gallery-section">
      <h3 class="detail-heading">DESIGN &amp; PROJECT IMAGES</h3>
      <div class="detail-gallery">${project.gallery.map(item => `
        <figure class="gallery-item">
          <a href="${safe(item.file)}" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image: ${safe(item.label)}">
            <img src="${safe(item.file)}" alt="${safe(item.label)}" loading="lazy">
          </a>
          <figcaption>${safe(item.label)} <span aria-hidden="true">↗</span></figcaption>
        </figure>`).join("")}</div>
      </section>`;
  }

  function externalLinksMarkup(project) {
    if (!project.links?.length) return "";
    return `<section class="detail-section">
      <h3 class="detail-heading">PROJECT LINKS</h3>
      <div class="document-list">${project.links.map(item => `
        <a class="document-link" target="_blank" rel="noopener noreferrer" href="${safe(item.url)}"><span aria-hidden="true">↗</span>${safe(item.label)}</a>`).join("")}</div>
      </section>`;
  }

  function openProject(projectId, button) {
    const project = PORTFOLIO_PROJECTS[currentCategory].find(item => item.id === projectId);
    if (!project) return;
    lastFocusedButton = button;
    dialog.dataset.project = project.id;
    detailEyebrow.textContent = `${labelFor(currentCategory)} / PROJECT ${project.number}`;
    detailContent.innerHTML = `
      <div class="detail-hero">
        <h2 id="detail-title">${safe(project.title)}</h2>
        <p>${safe(project.description)}</p>
        <div class="tag-row detail-tags">${tagsHtml(project.tags)}</div>
      </div>
      ${coverMarkup(project, currentCategory, true)}
      ${project.highlights?.length ? `<section class="detail-section"><h3 class="detail-heading">PROJECT HIGHLIGHTS</h3><ul class="detail-highlights">${project.highlights.map(item => `<li>${safe(item)}</li>`).join("")}</ul></section>` : ""}
      ${galleryMarkup(project)}
      <section class="detail-section" id="detail-video-section" hidden><h3 class="detail-heading">VIDEO DEMONSTRATIONS</h3><div class="video-grid" id="detail-video-grid"></div></section>
      <section class="detail-section" id="detail-documents-section" hidden><h3 class="detail-heading">DRAWINGS &amp; DOCUMENTATION</h3><div class="document-list" id="detail-documents"></div></section>
      ${externalLinksMarkup(project)}`;
    startImageLoading(detailContent);
    dialog.showModal();
    attachVideos(project, detailContent);
    attachDocuments(project, detailContent);
  }

  document.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      showCategory(button.dataset.category, true);
      // Clicking between the categories is like navigating within Projects.
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    });
  });
  // Hero shortcut selects Software before scrolling to the project list.
  document.querySelectorAll("[data-jump-category]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showCategory(link.dataset.jumpCategory, true);
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    });
  });
  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-project]");
    if (button) openProject(button.dataset.project, button);
  });
  document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    // Stop an uploaded video from continuing to play after closing.
    detailContent.querySelectorAll("video").forEach(video => video.pause());
    // Unload embedded players when the dialog closes.
    detailContent.querySelectorAll("iframe").forEach(frame => { frame.src = "about:blank"; });
    lastFocusedButton?.focus();
  });
  window.addEventListener("hashchange", () => {
    if (location.hash === "#hardware" || location.hash === "#software") {
      showCategory(location.hash.slice(1));
    }
  });

  document.getElementById("hardware-count").textContent = String(PORTFOLIO_PROJECTS.hardware.length).padStart(2, "0");
  document.getElementById("software-count").textContent = String(PORTFOLIO_PROJECTS.software.length).padStart(2, "0");
  document.getElementById("current-year").textContent = new Date().getFullYear();
  showCategory(location.hash === "#software" ? "software" : "hardware");
})();
