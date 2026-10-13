# Hi, Surbhi! — tiny greeting site

A lightweight, responsive greeting page with a pixel-art smiley. It uses plain HTML, CSS, and JavaScript; there is no build step.

## Run it locally

Open `index.html` in a browser. For a local server, run `python -m http.server 8000` from this folder, then visit `http://localhost:8000`.

## Deploy to Vercel

1. Put these four files (`index.html`, `style.css`, `script.js`, and `README.md`) in a GitHub repository.
2. In Vercel, choose **Add New → Project**, import that repository, and leave the framework preset as **Other**.
3. Leave the build command empty. Set the output directory to `.` (the repository root), then deploy.
4. Vercel will provide a `*.vercel.app` address when deployment finishes.

You can also deploy without Git using Vercel's CLI: install it with `npm i -g vercel`, open a terminal in this folder, run `vercel`, and follow its prompts. For a production deployment, run `vercel --prod`.

## Add a custom domain

In the Vercel project, open **Settings → Domains**, add your domain, and follow the DNS records Vercel shows. At your domain registrar, add those records exactly as provided. Once DNS has propagated and Vercel verifies the domain, it will serve this page over HTTPS. You can keep the generated `vercel.app` address too.

The page loads DM Sans and Press Start 2P from Google Fonts when online; the browser falls back to system fonts if those fonts are unavailable. The smiley animation automatically minimizes for visitors who request reduced motion.
