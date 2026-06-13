# Trixium Technologies — Static Website Template

This is a simple, responsive static website scaffold for Trixium Technologies (Electronics, Drones, Edutech, Defence & R&D).

How to use

- Open `index.html` in your browser.
- Customize copy, images, and styles in `styles.css`.
- Add pages or integrate with a static site generator as needed.

Files
- `index.html` — main landing page
- `styles.css` — stylesheet
- `script.js` — small JS for mobile menu and smooth scroll
- `assets/logo.svg` — placeholder logo

Next steps
- Replace placeholder images and text with your branding and content.
- Add contact backend (form handling) or connect to a service.

Background video (`assets/bg.mp4`)
- To use a background video, place an MP4 at `assets/bg.mp4`. The site will use it in the hero area with a `poster` fallback.
- Recommended export settings: H.264 codec, baseline/main profile, ~720p or 1080p, bitrate 1–3 Mbps for web, short loop (5–15s) and optimized for size.
- Example `ffmpeg` command to convert and optimize a source video:

	```bash
	ffmpeg -i input.mov -vf "scale=1280:-2" -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k -movflags +faststart assets/bg.mp4
	```

- If you want, I can add a lightweight placeholder poster image `assets/bg-poster.jpg` or convert an existing video for you if you upload it here.
