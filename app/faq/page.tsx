import { Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/faq",
  "QGN FAQ: SmartScreen, Mac, privacy, hotkeys, where captures go",
  "Straight answers about QGN, the free screenshot tool for Windows: why SmartScreen warns, whether there is a Mac version, what it sends over the network, and where your captures end up.",
);

const qa: [string, string][] = [
  [
    "Why does Windows SmartScreen warn me when I install it?",
    "QGN is not code signed yet. Signing certificates cost money every year, and SmartScreen warns about any installer it has not seen signed. Choose More info, then Run anyway. The installer is built by GitHub Actions from the public source, so you can check what goes into it.",
  ],
  [
    "Is there a Mac or Linux version?",
    "No. QGN is Windows 10 and 11 only. It leans on Windows for things like snapping to window edges, so a Mac or Linux build is not a small port.",
  ],
  [
    "Does it send anything over the network?",
    "One thing: it asks GitHub whether there is a new version, every four hours and shortly after your machine wakes. That request carries no information about you or your captures. There is no analytics, no crash reporter and no upload feature in the app.",
  ],
  [
    "Is it really free?",
    "Yes. MIT licensed, no paid tier, no account, no trial. The source is on GitHub.",
  ],
  [
    "Why is the installer about 85 MB?",
    "It is an Electron app, and Electron ships its own copy of Chromium. The trade is a big download for an app that is quick to change: vanilla JavaScript, one main.js, no framework.",
  ],
  [
    "How do I change the hotkeys?",
    "Open Settings from the tray icon. Ctrl+Q (capture) and Ctrl+Shift+Q (record) can both be rebound there. It warns you if the new key is already taken, and there is a reset.",
  ],
  [
    "Where do my screenshots go?",
    "To the clipboard, always. If you turn on auto-save, every capture is also written to a folder with a timestamp. The default folder is Pictures\\qgn, and you can pick another in Settings.",
  ],
  [
    "Can I copy something other than PNG?",
    "Yes. Settings has PNG (the default), JPG, WebP and a base64 data URI, with a quality slider for JPG and WebP.",
  ],
  [
    "Can I get a capture back after the card closed?",
    "Yes. The last twelve captures stay in the tray menu. You can switch that off, which also forgets what is stored.",
  ],
  [
    "Does it record audio?",
    "Yes. Ctrl+Shift+Q records a region with your microphone, system audio, or both. You can pause and resume.",
  ],
  [
    "How do I uninstall it?",
    "Like any Windows app: Settings, Apps, Installed apps, QGN, Uninstall. Or from Add or remove programs.",
  ],
  [
    "Where do I report a bug?",
    "Open an issue on github.com/Mopra/qgn.app. A screenshot helps, and you have the tool for it.",
  ],
];

export default function Page() {
  return (
    <Doc crumbs={[{ label: "faq" }]} title="Questions, answered straight." ld={faqLd(qa)}>
      {qa.map(([q, a]) => (
        <p key={q}>
          <b>{q}</b>
          <br />
          {a}
        </p>
      ))}
    </Doc>
  );
}
