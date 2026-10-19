# Engineering portfolio — setup and video guide

## Preview and publish

Open `index.html` in Firefox/Chrome, or run this command **inside the `portfolio` folder** and visit http://localhost:8000:

```bash
python3 -m http.server 8000
```

The website is a static HTML/CSS/JavaScript site; no Node build, npm install, or external framework is required. Upload the complete `portfolio/` folder (including `assets/`) to your hosting provider, retaining the same relative paths.

## Three videos you need to add

These exact **output filenames** are already referenced by `projects.js`:

| Your source file | Save the converted video as |
|---|---|
| `3_arm.surgeon.MOV` | `assets/videos/3_arm.surgeon.mp4` |
| `zoom-in-3arm.MOV` | `assets/videos/zoom-in-3arm.mp4` |
| `physical_ur5.MOV` | `assets/videos/physical_ur5.mp4` |

1. Convert each `.MOV` into an `.mp4` file with **H.264/AVC video**, **AAC audio** (if audio exists), and **yuv420p** pixel format. This combination works across major browsers. Renaming a `.MOV` to `.mp4` is **not** a conversion.
2. Use **1280 × 720 (720p)** when possible to keep the site fast; up to **1920 × 1080 (1080p)** is reasonable. Preserve the original aspect ratio; portrait video is fine. **30 fps** is a good default.
3. Aim for roughly **5–25 MB per video** when possible; a longer video may need more. **Under 50 MB per video** is a practical performance target. These are recommendations, not a strict playback requirement. If using GitHub repositories, files over 100 MB trigger GitHub's single-file limits.
4. Copy the new MP4 files to the `assets/videos/` folder above, keeping filenames **exactly** as shown, including case. Refresh the site. Both three-arm videos appear **side by side** in the three-arm project detail, and the physical UR5 video appears **next to** the Gazebo simulation.
5. Until you supply them, these 3 missing videos are deliberately hidden; there are no broken public video players.

### Simple ffmpeg conversion commands (Linux / WSL / macOS)

Install ffmpeg if necessary, then run these commands from the `portfolio` folder, adjusting the input paths to where you saved your source files:

```bash
ffmpeg -i "3_arm.surgeon.MOV" -vf "scale=1280:720:force_original_aspect_ratio=decrease:force_divisible_by=2,fps=30" -c:v libx264 -preset medium -crf 25 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart "assets/videos/3_arm.surgeon.mp4"

ffmpeg -i "zoom-in-3arm.MOV" -vf "scale=1280:720:force_original_aspect_ratio=decrease:force_divisible_by=2,fps=30" -c:v libx264 -preset medium -crf 25 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart "assets/videos/zoom-in-3arm.mp4"

ffmpeg -i "physical_ur5.MOV" -vf "scale=1280:720:force_original_aspect_ratio=decrease:force_divisible_by=2,fps=30" -c:v libx264 -preset medium -crf 25 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart "assets/videos/physical_ur5.mp4"
```

If any video ends up too large, use `-crf 27` for smaller output (slightly reduced quality) or change `1280:720` to `960:540`.

**Alternatively**: use HandBrake and select an MP4 container, H.264 video encoder, 720p preset, and Web Optimized / Fast Start option. Set AAC audio if needed.

## Media and design already included

- **Three-arm system** — cover `assets/images/3arm.png`, plus two MP4 entries waiting for you in *both* the hardware and software project detail views.
- **Continuum probe** — cover `continuum.png`, and an image gallery containing `continuum_exploded.png`, `robot_continuum.png`, and `vectors_continuum.png`; includes a PDF link to `assets/pdfs/continuum_research_experience.pdf`.
- **Lithography** — cover `lithography_triangle.png`, and gallery of `lithography_circle.png`, `lithography_square.png`, and `lithography_big.png`.
- **Leg holder** — cover `leg_holder_physical.png`, with `leg_holder_solidworks.png` in its gallery.
- **UR5 visual servoing** — `assets/videos/Visual_servoing_gazebo.webm` already works, with a side-by-side slot for `physical_ur5.mp4`. Your image `visual_cover.png` was **not** in the supplied archive, so `assets/images/visual_cover.png` is currently a still frame automatically extracted from the Gazebo recording. **Overwrite it with your preferred `visual_cover.png`** whenever you have it.
- **Balancing assignment** — `assets/videos/balancing.webm` already plays; `assets/images/balancing_cover.png` was extracted from that recording for its project card.
- **Needle insertion** — `needleinsertion.jpeg` cover, embedded demonstration from YouTube, and a link to the team's Read the Docs pages.
- **Existing adapter work** — existing CAD rendering, slides and shaft drawings are retained.

The `2026_10_SARRTS_Option_I_Overview_Cleary_Krieger.pdf` report was **read for context but is intentionally NOT copied into the portfolio**.

## Easy text editing

Everything specific to an individual project lives in `projects.js`. Change the `title`, `description`, `tags`, `highlights`, or `gallery` items to update what's shown. A project can use a `videos` list, for example:

```js
videos: [
  { label: "Simulation", file: "assets/videos/example_simulation.webm" },
  { label: "Real robot", file: "assets/videos/example_hardware.mp4" }
]
```

The code automatically shows media files when they are present and playable, without any further changes. Use a local web server when testing PDF links or online embeds. External YouTube embedding requires an internet connection.

## Before publishing

Check that technical claims accurately reflect your personal contribution; some three-arm and needle-insertion descriptions refer to collaborative team work. Replace the temporary visual-servoing cover if desired, add the three MP4s, and test the pages once on your deployment site.
