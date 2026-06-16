# Elvis Ezimako — Portfolio

Personal portfolio built with **Astro** + a **React island** for the interactive
project tabs, and a **Markdown blog** for writing. Dark, electric-blue, cable/patch-panel
theme.

---

## What you need first

Install **Node.js** (version 18 or newer) once on your machine:
https://nodejs.org  — download the "LTS" version and run the installer.

To check it worked, open a terminal and run:

    node -v

---

## Run it locally

From inside this folder, run these two commands:

    npm install        # one time — downloads the project's dependencies
    npm run dev        # starts a live preview

Then open the URL it prints (usually http://localhost:4321). Saving any file
refreshes the page automatically.

When you're done building and want the final files:

    npm run build      # outputs the finished site into the dist/ folder

---

## Where to change things

| What you want to edit            | File                                   |
|----------------------------------|----------------------------------------|
| Headline, bio, status line       | `src/components/Hero.astro`            |
| Colors / fonts                   | `src/styles/global.css` (top `:root`) |
| The roadmap (networking → cloud) | `src/components/Journey.astro`        |
| Projects (add / edit / link)     | `src/data/projects.ts`                |
| How project cards look/behave    | `src/components/ProjectTabs.tsx` (React) |
| Certifications + progress        | `src/components/Certs.astro`          |
| Your email + social links        | `src/components/Connect.astro`        |
| Footer quote                     | `src/components/Footer.astro`         |

### Add a project
Open `src/data/projects.ts` and add one line to the `net`, `sec`, or `code` list.
Each project is just: name, summary, a tag, and an optional link.

### Write a blog post
Create a new file in `src/content/blog/`, e.g. `my-second-post.md`, starting with:

    ---
    title: "My second post"
    date: 2026-07-01
    summary: "One sentence about the post."
    ---

    Your writing goes here. Plain Markdown.

It shows up on `/blog` and on the homepage automatically. Add `draft: true` to the
frontmatter to hide a post until it's ready.

### The React part
`ProjectTabs.tsx` is your React island — the tabbed project switcher. It's a normal
React component (uses `useState`). It's loaded on the homepage with
`<ProjectTabs client:visible />`, which tells Astro to send the JavaScript only for
this piece. Edit it like any React component to practice.

---

## Put it online (free, with GitHub Pages)

The fastest route is a **user site**:

1. Create a GitHub repo named exactly **`ULTRONLORD.github.io`**.
2. Push this project to it (main branch).
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every
   push. Your site goes live at **https://ULTRONLORD.github.io**.

If instead you use a normal repo name (like `portfolio`), open `astro.config.mjs`,
uncomment the `base` line, and set it to `'/portfolio'`.

---

## A couple of TODOs left for you
- Replace the placeholder email in `src/components/Connect.astro`.
- Swap the "in progress" networking cards for real projects + screenshots as you build them.
- Nudge the certification progress bars in `src/components/Certs.astro` as you go.
