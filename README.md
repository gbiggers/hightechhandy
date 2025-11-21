# hightechhandy

![CI status](https://github.com/gbiggers/hightechhandy/actions/workflows/ci.yml/badge.svg?branch=main) ![Manual CI status](https://github.com/gbiggers/hightechhandy/actions/workflows/ci-manual.yml/badge.svg?branch=main) ![Bun manual status](https://github.com/gbiggers/hightechhandy/actions/workflows/bun-manual.yml/badge.svg?branch=main)

## Running the project

This repository supports three package managers: `npm`, `yarn`, and `bun`.

- npm (preferred by CI):
	- Install: `npm install`
	- Dev server: `npm run dev`
	- Build: `npm run build`

- yarn:
	- Install: `yarn install`
	- Dev server: `yarn dev`
	- Build: `yarn build`

- bun (kept optional):
	- Install: `curl -fsSL https://bun.sh/install | bash && export PATH="$HOME/.bun/bin:$PATH"`
	- Install deps: `bun install`
	- Dev server: `bun run dev`
	- Build: `bun run build`

CI behavior:
- The main CI workflow runs with `npm` and `yarn` by default (matrix build).
- Bun is supported via a manual GitHub Actions workflow named "Bun CI" (triggerable from the Actions tab) so Bun usage remains optional.

Cloudflare Pages (deploying the static `dist/` folder)
---------------------------------------------------

This project builds to a static `dist/` folder (Vite). Recommended deploy path is Cloudflare Pages.

1. In the Pages project settings set:
	 - Install command: `npm ci`
	 - Build command: `npm run build`
	 - Build output directory: `dist`
	 - Node version: `20`

2. To publish from your machine (one-off) you can run:
```bash
npm ci
npm run build
# publish using wrangler (requires API token and project name in secrets)
npx wrangler pages publish ./dist --project-name=hightechhandy --branch=main
```

3. Automatic publish from GitHub Actions (optional):
- A workflow can build on push and publish for you if you add the following repository secrets:
	- `CLOUDFLARE_PAGES_API_TOKEN` — a Pages API token with deploy permissions
	- `CLOUDFLARE_PAGES_PROJECT_NAME` — your Pages project name

The repository includes a workflow that will attempt to publish when those secrets are set. If you prefer the Cloudflare Pages GitHub integration, Pages will automatically build and publish on push when connected.

Triggering the NPM-only CI run
--------------------------------

If you want to run only the `npm` job (instead of the matrix), use the manual CI dispatcher I added. You can trigger it from the GitHub UI (Actions → "CI (manual dispatch)" → Run workflow) and select `npm`, or use the GitHub CLI:

```bash
# trigger npm-only run
gh workflow run ci-manual.yml -f package-manager=npm --ref main

# watch the run
gh run watch
```

This will run a single CI job that uses `npm` to install and build.
# Welcome to your Lovable project

## Project info.

**URL**: https://lovable.dev/projects/f6e37649-3d7e-4d6b-8d73-8497f6664de1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f6e37649-3d7e-4d6b-8d73-8497f6664de1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

This project uses Bun by default, but you can also use Node.js + npm if you prefer.

Quick Start (Bun):

```sh
# 1) Install Bun (if not installed)
curl -fsSL https://bun.sh/install | bash
export PATH="$HOME/.bun/bin:$PATH"     # or restart your terminal

# 2) Install dependencies
bun install

# 3) Start development server
bun run dev

# 4) Build for production
bun run build

# (Optional) Preview a production build if a preview script exists
bun run preview
```

Quick Start (Node/npm):

```sh
# 1) Install Node.js and npm (for example via nvm)
# https://github.com/nvm-sh/nvm#installing-and-updating

# 2) Install dependencies
npm install

# 3) Start development server
npm run dev
```

You can also use `yarn` if you prefer:

```sh
# 1) Install Yarn (if not installed)
npm install -g yarn

# 2) Install dependencies (creates `yarn.lock`)
yarn install

# 3) Start development server
yarn dev
```

Notes:
- This project still supports Bun; keeping Bun installed is optional. Bun-specific commands (e.g. `bun install`, `bun run dev`) will continue to work.
- If you switch to `npm` or `yarn`, generate and commit the lockfile (`package-lock.json` or `yarn.lock`) so other contributors use the same dependency tree.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f6e37649-3d7e-4d6b-8d73-8497f6664de1) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
