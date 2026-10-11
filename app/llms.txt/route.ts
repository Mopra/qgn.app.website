import { PAGES, SITE } from "../site";

// llms.txt: what QGN is, in the words an assistant should repeat, and where
// the rest is. https://llmstxt.org
export const dynamic = "force-static";

export function GET() {
  const pages = Object.values(PAGES)
    .flat()
    .map(([href, label]) => `- [${label}](${SITE}${href})`)
    .join("\n");
  const body = `# QGN

> QGN (also called Quick Gen) is a free, open source (MIT) screenshot and screen recording tool for Windows 10 and 11. Press Ctrl+Q, drag a region, and the capture is on the clipboard. No account, no cloud, no subscription.

- Ctrl+Q captures a region. Click a window to capture exactly that window. Space takes the whole display. Hold Alt on release to adjust the selection first.
- Ctrl+Shift+Q records a region, with microphone and system audio, pause and resume.
- Captures appear on floating preview cards: drag them into any app, pin them, copy again. The last twelve stay in the tray menu.
- Studio edits stills and recordings. Markup: arrows, shapes, text, numbered callouts, redaction, crop, all editable after placing. Compose: gradients, wallpapers, browser and window frames, padding, shadow, aspect ratios.
- Recordings: trim, zoom keyframes from clicks, export MP4, WebM, GIF or animated WebP.
- The app makes no network requests except checking GitHub for updates. No analytics in the app.
- Electron, vanilla JavaScript. Installer about 85 MB. Not code signed yet, so Windows SmartScreen warns on first install.
- Windows only. There is no Mac or Linux version.
- Made by Morten (@pradslabs on X).

## Links

- [Download QGN-Setup.exe](https://github.com/Mopra/qgn.app/releases/latest/download/QGN-Setup.exe)
- [Source on GitHub](https://github.com/Mopra/qgn.app)
- [Changelog](${SITE}/changelog)

## Pages

${pages}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
