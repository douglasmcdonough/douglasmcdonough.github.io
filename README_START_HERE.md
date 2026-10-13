# Douglas McDonough — Engineering Portfolio

This site is designed to work on **GitHub Pages without installing anything**. It has two project categories (Hardware and Software), seven prepared project cards, and a separate details window for each project.

## Start here: the three simple steps

1. **Replace the existing `index.html`** in your portfolio repository with the `index.html` included here. Add `styles.css`, `app.js`, and `projects.js` next to it. Include the `assets` folder (with its subfolders).
2. **Leave your old files alone.** If `davinci_adapter.jpg`, `Outer_shaft_Drawing_metric.pdf`, `Inner_shaft_Drawing_metric.pdf`, and `presentation.pdf` are already in the root of your GitHub repository, they continue to work. The first hardware project automatically uses `davinci_adapter.jpg` until the new image is added.
3. **Add photos and videos later.** There is no need to upload them today. The site shows clean placeholders until the matching files exist.

If your site was already live through GitHub Pages, your changes should publish automatically after you commit them. If it is not live, go to your repository's **Settings → Pages** and select **Deploy from a branch**, `main`, `/(root)` (assuming those are your branch/folder names).

## Which file do I edit?

| I want to... | File to change |
| --- | --- |
| Edit any project title, summary, tags, technical highlights, or PDF label | `projects.js` ONLY |
| Add an image | Upload a matching file under `assets/images/` — no code edits needed |
| Add a video | Upload a matching `.mp4` file under `assets/videos/` — no code edits needed |
| Add a PDF already listed in the code | Upload the matching `.pdf` — no code edits needed |
| Edit the introductory paragraph or email/socials | `index.html` |
| Change fonts, colors, layouts | `styles.css` (optional) |
| Change button behavior | `app.js` (normally never needed) |

**You can ignore `app.js` and `styles.css`.** The one file you will normally edit is `projects.js`.

## Exactly what to name your images

Save JPG files with these names, using **these exact paths** (capitalization matters on GitHub):

| Project | Image file |
| --- | --- |
| Hardware — da Vinci Xi adapter | `assets/images/hardware-da-vinci-xi-adapter.jpg` |
| Hardware — three-arm laparoscopic system | `assets/images/hardware-three-arm-laparoscopic.jpg` |
| Hardware — continuum probe | `assets/images/hardware-continuum-probe.jpg` |
| Hardware — lithography | `assets/images/hardware-lithography.jpg` |
| Software — da Vinci Xi control | `assets/images/software-da-vinci-xi-control.jpg` |
| Software — three-arm laparoscopic system | `assets/images/software-three-arm-laparoscopic.jpg` |
| Software — UR5 visual servoing | `assets/images/software-ur5-visual-servoing.jpg` |

### Important note for your original adapter image

Your original HTML referenced `davinci_adapter.jpg` at the **repository root**. This new site still supports that file as a fallback. So your original photo won't require a rename or move. Later, upload `assets/images/hardware-da-vinci-xi-adapter.jpg` if you'd like to use a new photo instead.

Recommended photo preparation: use a reasonably compressed JPG around **1600 pixels wide**, ideally landscape / approximately 16:9. JPG makes upload sizes manageable. If you prefer PNG or WebP, change the `.jpg` extension in the `image` line for that project inside `projects.js`.

## Exactly what to name your demonstration videos

These video paths are **already written in `projects.js`**, and video players appear only when the file exists and loads successfully.

| Project | Video file |
| --- | --- |
| Hardware — da Vinci Xi adapter | `assets/videos/hardware-da-vinci-xi-adapter.mp4` |
| Hardware — three-arm laparoscopic system | `assets/videos/hardware-three-arm-laparoscopic.mp4` |
| Hardware — continuum probe | `assets/videos/hardware-continuum-probe.mp4` |
| Hardware — lithography | `assets/videos/hardware-lithography.mp4` |
| Software — da Vinci Xi control | `assets/videos/software-da-vinci-xi-control.mp4` |
| Software — three-arm laparoscopic system | `assets/videos/software-three-arm-laparoscopic.mp4` |
| Software — UR5 visual servoing | `assets/videos/software-ur5-visual-servoing.mp4` |

**Videos are completely optional.** You can have a photo without a video or add videos to only a couple of projects. For large videos, consider uploading a shorter compressed `.mp4` clip; GitHub repositories are not ideal for large raw video files.

## PDF names and drawing links

Three original PDFs are still referenced at the **root** of your repository and will work if you already uploaded them:

- `Outer_shaft_Drawing_metric.pdf` — linked from the hardware adapter
- `Inner_shaft_Drawing_metric.pdf` — linked from the hardware adapter
- `presentation.pdf` — linked from both hardware and software adapter details

Additional optional PDFs have matching paths already written in `projects.js`:

| Project | Optional PDF file |
| --- | --- |
| Hardware — three-arm laparoscopic system | `assets/pdfs/hardware-three-arm-laparoscopic.pdf` |
| Hardware — continuum probe | `assets/pdfs/hardware-continuum-probe.pdf` |
| Hardware — lithography | `assets/pdfs/hardware-lithography.pdf` |
| Software — da Vinci Xi control | `assets/pdfs/software-da-vinci-xi-control.pdf` |
| Software — three-arm laparoscopic system | `assets/pdfs/software-three-arm-laparoscopic.pdf` |
| Software — UR5 visual servoing | `assets/pdfs/software-ur5-visual-servoing.pdf` |

On the **published GitHub Pages website**, PDF buttons only appear after the corresponding file has been uploaded. When opening `index.html` directly as a local file, the browser cannot check whether the PDFs exist, so it may show PDF links even before you've added them. This is expected.

## Example: changing a project description (easy)

Open `projects.js` and find the project title. Just replace the sentence in `description`:

```js
      title: "UR5 Visual Servoing",
      description: "Your new short project description goes here.",
```

To include detailed bullets later, replace `highlights: []` with:

```js
      highlights: [
        "My role: Explain the part I worked on.",
        "Engineering challenge: Explain what made it difficult.",
        "Result: Explain what worked or what you learned."
      ],
```

These are **editing examples**, not claims about your work. For projects where you haven't supplied detailed engineering notes yet, the public site starts with short summaries rather than invented achievements.

## What information is most useful to add later?

You don't need everything. One or two concrete details improve a portfolio far more than a long generic description. For each project, consider: **your exact contribution**, **the engineering problem**, **the tools or methods you used**, **a design choice/tradeoff**, and **any result you can quantify**. Even a one-sentence answer to two of those is enough to begin.

## Folder layout

```text
engineering-portfolio/
├── index.html               <-- your homepage
├── styles.css               <-- appearance (no need to edit)
├── projects.js              <-- EASY PROJECT EDITS HERE
├── app.js                   <-- button / media behavior (no need to edit)
├── README_START_HERE.md     <-- this guide
└── assets/
    ├── images/              <-- upload future project JPG images here
    ├── videos/              <-- upload future project MP4 clips here
    └── pdfs/                <-- upload future project PDFs here
```

Your **old** `davinci_adapter.jpg` and the **three old PDF files** can remain in the root next to `index.html` in your actual GitHub repository. They were **not included** in the download because only your original HTML file was supplied.

## One thing to check before publishing

The site references your original Johns Hopkins address (`dmcdono7@jh.edu`) and your original GitHub and LinkedIn profile links. Double-check those links and the descriptions before you make the portfolio public. If research is sensitive or unpublished, only upload media and drawings you have permission to share.
