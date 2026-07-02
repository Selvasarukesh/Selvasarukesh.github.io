# Selvasarukesh — Portfolio Website

Production-ready single-page portfolio built from the Figma design.
Pure **HTML / CSS / JavaScript** — no build step required.

## Tech & libraries
- HTML5, CSS3 (custom design system + responsive grid/flex)
- Vanilla JavaScript (no framework)
- [AOS](https://michalsnik.github.io/aos/) — scroll-reveal animations (via CDN)
- [Font Awesome 6](https://fontawesome.com/) — icons (via CDN)
- Google Fonts: **Bowlby One SC** (display), **Poppins** (body)

## Project structure
```
portfolio/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── profile.jpg          # hero image
    ├── profile-about.jpg    # about section image
    └── resume.pdf           # CV download
```

## Run locally
Just open `index.html` in a browser, or serve the folder:

```powershell
# PowerShell
cd portfolio
python -m http.server 5500
# then open http://localhost:5500
```

Or with Node:
```powershell
npx serve .
```

VS Code users: install the **Live Server** extension and click *"Go Live"*.

## Sections
- **Hero** — Name, role, social icons, animated skills marquee ribbons
- **About** — Halftone portrait + summary card + Download CV
- **Experience** — Vertical timeline (4 roles at Bajaj Allianz Life Insurance)
- **Projects** — 3 highlighted projects (BloodSecure, Payment Gateway, Associate 360)
- **Contact** — Validated message form (uses `mailto:` to open the user's mail client)
- **Footer** — Tagline, socials, copyright

## Customisation quick-reference
All theme colors and font tokens live in `:root` inside `styles.css`:

```css
--navy:   #0D2A6B;
--orange: #F39140;
--cream:  #FCE9CE;
```

Edit the resume PDF in `assets/resume.pdf` to update the download.

## Hosting
Drop the `portfolio/` folder into:
- **GitHub Pages** — push to a repo and enable Pages on the branch
- **Netlify / Vercel** — drag-drop the folder, instant deploy
- Any static host (S3, Cloudflare Pages, Firebase Hosting…)

---
© Selvasarukesh K
