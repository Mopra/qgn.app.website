import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/features/screenshot-mockup-tool",
  "QGN: free screenshot beautifier for Windows, backgrounds and frames",
  "Put a screenshot on a gradient or wallpaper, in a browser or window frame, with padding, rounded corners and a shadow. QGN's Compose mode does it offline on Windows, free and open source.",
);

const qa: [string, string][] = [
  [
    "Do I need to upload my screenshot to a website to frame it?",
    "No. Compose runs inside QGN on your machine. The capture never leaves it.",
  ],
  [
    "Can I use my own background image?",
    "Yes. Besides the gradients, wallpapers and solid colours, you can pick any image of your own.",
  ],
  [
    "Does it work on recordings too?",
    "Yes. Compose frames clips the same way as stills, and the export keeps the frame, padding and background.",
  ],
  [
    "Which aspect ratios are there?",
    "Auto, 16:9, 4:3, 1:1, 9:16 and 3:2.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "features" }, { label: "mockups" }]}
      title="Make a screenshot presentable without a browser tab."
      lede="Compose puts a capture on a background, in a window or browser frame, with padding and a shadow, at the ratio the place you are posting wants. On your machine, offline."
      ld={faqLd(qa)}
    >
      <p>
        A raw screenshot in a README or a launch post looks like a raw screenshot. The usual fix is a web beautifier:
        upload, fiddle, download, paste. That is four steps and a stranger&apos;s server for something your screenshot
        tool should just do.
      </p>
      <p>
        In QGN you open the capture from its preview card, switch Studio to <b>Compose</b>, and it is already framed
        with sensible defaults: a window frame, a little padding, rounded corners, a soft shadow. Change what you want,
        save a new file.
      </p>

      <h2>the controls</h2>
      <Compare
        cols={["options"]}
        rows={[
          ["background", "10 gradients, 6 wallpapers, solid colour, or your own image"],
          ["saved palettes", "keep your own gradients and colours, up to 24 each"],
          ["frame", "none, a plain window, or browser chrome with an address bar"],
          ["layout", "padding, corner rounding, shadow depth"],
          ["aspect ratio", "auto, 16:9, 4:3, 1:1, 9:16, 3:2"],
        ]}
      />

      <h2>what people make with it</h2>
      <ul>
        <li>The hero image in a GitHub README.</li>
        <li>A 16:9 shot for a launch post, or 1:1 for a feed that crops everything square.</li>
        <li>9:16 for a phone shaped story.</li>
        <li>Screenshots for docs that all share one look, thanks to a saved palette.</li>
        <li>A framed screen recording for a changelog, exported as MP4 or animated WebP.</li>
      </ul>

      <h2>annotate in the same place</h2>
      <p>
        Every annotation tool works in Compose too. Add an arrow, a callout, a redaction, then frame it, in one window.
        Switch back to Markup and your framing is kept. See <Link href="/features/screenshot-annotation">annotation</Link>.
      </p>

      <h2>versus a web beautifier</h2>
      <Compare
        cols={["web beautifier", "QGN compose"]}
        rows={[
          ["where it runs", "a website", "your machine"],
          ["steps from capture", "save, upload, edit, download", "click the card, compose"],
          ["works offline", "no", "yes"],
          ["video", "usually not", "yes"],
          ["account or watermark", "often", "never"],
        ]}
      />

      <h2>what it is not</h2>
      <ul>
        <li>No device mockups. There are no phone or laptop frames, only window and browser frames.</li>
        <li>No templates with text and layouts. It frames one capture well.</li>
      </ul>
      <p>
        Compose is part of <Link href="/features/studio">Studio</Link>.
      </p>

      <h2>questions</h2>
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
