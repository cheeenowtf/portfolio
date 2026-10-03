# Portfolio

A fast, dependency-free personal portfolio site — plain HTML, CSS and JavaScript.

**Features:** filterable project grid · about & skills · experience timeline · contact section · light/dark mode · responsive · deploys automatically to GitHub Pages.

## Make it yours

All content lives in **`data.js`** — edit your name, bio, skills, projects, experience and social links there. No build step.

- **Project images:** drop files into `assets/` and set `image: "assets/my-project.jpg"`. Leave it `""` for a generated color tile.
- **Résumé:** add `assets/resume.pdf` and set `resumeUrl: "assets/resume.pdf"`.
- **Categories:** filter buttons are built from each project's `category`.
- **Colors / fonts:** tweak the variables at the top of `styles.css`.

## Run locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Deploy

Pushing to `main` deploys via GitHub Actions (`.github/workflows/pages.yml`).
First time only: **Settings → Pages → Source: GitHub Actions**.
Your site will be at `https://<username>.github.io/<repo>/`.
