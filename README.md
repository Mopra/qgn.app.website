<p align="center">
  <a href="https://qgn.app">
    <img src="public/logo/Logo Transparent BG.png" alt="QGN Logo" width="120" />
  </a>
</p>

<h1 align="center">QGN &mdash; Website</h1>

<p align="center">
  <strong>The marketing site behind <a href="https://qgn.app">qgn.app</a></strong><br />
  The website for QGN. The homepage is a working demo of the app.
</p>

<p align="center">
  <a href="https://qgn.app"><img src="https://img.shields.io/badge/live-qgn.app-AF226B?style=flat-square" alt="Live Site" /></a>
  <a href="https://github.com/Mopra/qgn.app"><img src="https://img.shields.io/badge/app-source-111?style=flat-square&logo=github" alt="App Source" /></a>
  <a href="https://github.com/Mopra/qgn.app/releases/latest"><img src="https://img.shields.io/github/v/release/Mopra/qgn.app?style=flat-square&label=latest&color=AF226B" alt="Latest Release" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/Mopra/qgn.app.website?style=flat-square" alt="MIT License" /></a>
</p>

---

## What is QGN?

QGN (Quick Gen) is a free, open-source screenshot and screen recording tool for Windows. One hotkey (`Ctrl+Q`), instant clipboard copy, zero cloud, zero accounts. This repo is the marketing website that tells that story.

**[Download QGN](https://github.com/Mopra/qgn.app/releases/latest/download/QGN-Setup.exe)** | **[Visit qgn.app](https://qgn.app)**

## What's in this site

The website is designed to convert visitors into users through clear, direct messaging and SEO-optimized content pages:

| Section | Pages | Purpose |
|---------|-------|---------|
| **Landing** | [/](https://qgn.app) | Hero, value proposition, download CTA |
| **Features** | [Screenshot Tool](https://qgn.app/features/screenshot-tool), [Studio](https://qgn.app/features/studio), [Screenshot Mockups](https://qgn.app/features/screenshot-mockup-tool), [Screen Recording](https://qgn.app/features/screen-recording), [Annotation](https://qgn.app/features/screenshot-annotation), [Floating Previews](https://qgn.app/features/floating-previews), [Snipping Tool Alt](https://qgn.app/features/snipping-tool-alternative), [Open Source](https://qgn.app/features/open-source-screenshot-tool) | Deep dives on each capability |
| **Alternatives** | vs [Greenshot](https://qgn.app/alternatives/greenshot), [ShareX](https://qgn.app/alternatives/sharex), [CleanShot X](https://qgn.app/alternatives/cleanshot-x), [Snagit](https://qgn.app/alternatives/snagit), [Lightshot](https://qgn.app/alternatives/lightshot) | Honest comparison pages |
| **Use Cases** | [Developers](https://qgn.app/use-cases/developers), [Bug Reports](https://qgn.app/use-cases/bug-reports), [Documentation](https://qgn.app/use-cases/documentation), [Designers](https://qgn.app/use-cases/designers) | Audience-specific landing pages |
| **Support** | [FAQ](https://qgn.app/faq), [Changelog](https://qgn.app/changelog), [Privacy](https://qgn.app/privacy), [Terms](https://qgn.app/terms) | Trust and transparency |

## The hero is the product

The homepage hero is a working copy of the app's capture overlay, in
[`app/capture.tsx`](app/capture.tsx). Drag a region and it is cut out of
the page and put on the clipboard as a real PNG, then shown on a floating
card. Click takes the whole hero, `Ctrl+Q` dims it, `Space` takes all of it.

The page is drawn twice: the browser draws the HTML, and the component paints
the same dots and text onto a canvas, word by word where the browser placed
them. A capture cuts from that canvas, and the clipboard write starts inside
the pointer gesture with the image still to come, which is what browsers ask
for.

Everything else is plain CSS in [`app/globals.css`](app/globals.css), shared
page pieces in [`app/site.tsx`](app/site.tsx), and GitHub release data in
[`app/release.ts`](app/release.ts), cached for an hour.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 16** (App Router) |
| UI | **React 19** |
| Styling | Plain CSS in `app/globals.css` |
| Icons | **Lucide React** |
| Language | **TypeScript** |

## Getting Started

```bash
git clone https://github.com/Mopra/qgn.app.website.git
cd qgn.app.website
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). It runs with hot reload.

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
app/
├── page.tsx                    # Landing page
├── globals.css                 # Theme tokens and site-wide styles
├── vignettes.css               # All feature-vignette animation
├── features/                   # Feature deep-dive pages
├── alternatives/               # Comparison pages (vs Greenshot, ShareX, etc.)
├── use-cases/                  # Audience-specific pages
├── changelog/                  # Release history (pulled from GitHub releases)
├── faq/                        # Frequently asked questions
├── privacy/ & terms/           # Legal pages
└── components/
    ├── FeatureLayout.tsx       # Nav, breadcrumbs, CTA, footer, related links
    ├── DownloadPopup.tsx       # Download button and thank-you modal
    ├── SmartDownload.tsx       # OS detection for the hero CTA
    ├── Vignette.tsx            # Play/pause wrapper for the vignettes
    └── vignettes.tsx           # The six feature vignettes
public/
└── logo/                       # Brand assets
```

## Related Repositories

| Repository | Description |
|-----------|-------------|
| **[qgn.app](https://github.com/Mopra/qgn.app)** | Desktop application (Electron) |
| **[qgn.app.website](https://github.com/Mopra/qgn.app.website)** | Marketing website, this repo |

## Contributing

Found a typo? Have an idea for a new comparison page or use case? PRs are welcome.

1. Fork the repo
2. Create a branch (`git checkout -b my-change`)
3. Make your changes
4. Run `npm run lint` and `npm run build` to verify
5. Open a PR

## License

[MIT](LICENSE): free to use, modify, and distribute.
