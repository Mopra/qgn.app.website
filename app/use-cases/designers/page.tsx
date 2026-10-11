import Link from "next/link";
import { Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/use-cases/designers",
  "Screenshot tool for designers on Windows: QGN",
  "Pixel loupe with coordinates and colour, exact sizes as you drag, and a Compose mode for framing shots on gradients and in browser frames. A free, open source screenshot tool for designers on Windows.",
);

const qa: [string, string][] = [
  [
    "Can QGN show the colour of a pixel?",
    "Yes. While you aim, a magnifier follows the cursor with its coordinates and the colour underneath.",
  ],
  [
    "Can I make a screenshot look good for a portfolio or a post?",
    "Yes. Compose in Studio puts the capture on a gradient, wallpaper, solid colour or your own image, in a window or browser frame, with padding, rounded corners, a shadow and a fixed aspect ratio.",
  ],
  [
    "What formats can I export?",
    "Stills copy as PNG, JPG, WebP or a base64 data URI. Recordings export as MP4, WebM, GIF or animated WebP.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "for" }, { label: "designers" }]}
      title="Exact pixels in, good-looking shots out."
      lede="Designers screenshot for two reasons: to check something precisely, and to show something off. QGN does both."
      ld={faqLd(qa)}
    >
      <h2>checking</h2>
      <ul>
        <li>
          <b>Pixel loupe.</b> A magnifier follows the cursor while you aim, with live coordinates and the colour under
          it. Check a spacing or a hex value against the spec without opening anything.
        </li>
        <li>
          <b>Sizes as you drag.</b> Width and height update live. <kbd>shift</kbd> makes it a square.
        </li>
        <li>
          <b>Adjust before taking.</b> Hold <kbd>alt</kbd> as you release and the selection stays open. Drag edges and
          corners, nudge with the arrow keys, confirm with <kbd>enter</kbd>.
        </li>
        <li>
          <b>Pin for reference.</b> Pin a capture&apos;s card and it floats on top while you work, even across a reboot.
          Good for keeping the spec next to the build.
        </li>
      </ul>

      <h2>showing</h2>
      <p>
        Open a capture in Studio and switch to <b>Compose</b>. Put it on a gradient, a wallpaper, a solid colour or your
        own image. Wrap it in a plain window frame or browser chrome with an address bar. Set padding, corner rounding
        and shadow depth. Lock an aspect ratio so it fits the post or the slide. Save your gradients and colours, and
        the next shot matches.
      </p>
      <p>
        Compose saves a new file and leaves the original alone. More in{" "}
        <Link href="/features/screenshot-mockup-tool">mockups</Link>.
      </p>

      <h2>motion</h2>
      <p>
        Prototypes move. <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>q</kbd> records a region, and Studio adds zoom keyframes
        from your clicks, with easing and a focus point you can change. Put the clip on the same backgrounds and frames
        as a still. Export MP4 or WebM for the case study, GIF or animated WebP for places that only take images.
      </p>

      <h2>markup for feedback</h2>
      <p>
        Arrows, shapes, text and numbered callouts in six colours, each on one key. Every mark stays editable after you
        place it, so feedback rounds don&apos;t mean starting the image over. See{" "}
        <Link href="/features/screenshot-annotation">annotation</Link>.
      </p>

      <h2>what it doesn&apos;t do</h2>
      <ul>
        <li>No colour picker that copies the hex. The loupe shows the colour; it does not copy it.</li>
        <li>No device mockups (phones, laptops). Frames are a window or a browser.</li>
        <li>No Mac version, so it won&apos;t replace CleanShot X on a Mac. On Windows, it is the closest thing.</li>
      </ul>

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
