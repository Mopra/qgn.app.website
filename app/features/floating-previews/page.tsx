import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/features/floating-previews",
  "QGN floating previews: drag screenshots straight into any app",
  "Every QGN capture appears on a small always-on-top card. Drag it into Slack, email or an editor, pin it across reboots, copy it again. The last twelve captures stay in the tray. Free for Windows.",
);

const qa: [string, string][] = [
  [
    "How long does a preview card stay on screen?",
    "Ten seconds by default. You can set it to 5, 10 or 20 seconds, or never. Pinned cards stay until you unpin them.",
  ],
  [
    "Do pinned cards survive a restart?",
    "Yes. Pins are saved and come back after the app or Windows restarts.",
  ],
  [
    "I dismissed a card. Is the capture gone?",
    "No. The last twelve captures stay in the tray's Recent captures menu, and any of them can be put back on screen as a card. You can switch this off in Settings, which also forgets what is stored.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "features" }, { label: "floating previews" }]}
      title="The capture stays in the corner until you need it."
      lede="Every capture lands on a small card on top of everything. Drag it into the app that wants it, pin it for later, copy it again, or open it in Studio."
      ld={faqLd(qa)}
    >
      <p>
        The clipboard holds one thing. Copy a link and your screenshot is gone. Take three captures for one bug report
        and you are pasting, switching, capturing, pasting again.
      </p>
      <p>
        QGN puts each capture on a card in the corner as well as on the clipboard. The card is a real window: always on
        top, draggable, resizable. Take three captures, then drag them one by one into the issue.
      </p>

      <h2>what a card does</h2>
      <Compare
        cols={["how"]}
        rows={[
          ["drag out", "drag the thumbnail into Slack, an email, an editor or a folder"],
          ["copy again", "one click puts it back on the clipboard"],
          ["pin", "keeps it on screen, across app restarts and reboots"],
          ["annotate", "opens it in Studio in Markup mode"],
          ["studio", "opens it in Studio to frame it"],
          ["dismiss", "unpinned cards fade after 5, 10 or 20 seconds, or never"],
        ]}
      />

      <h2>recent captures</h2>
      <p>
        A card that fades is not lost. QGN keeps the last twelve captures in a small store, and the tray has a Recent
        captures menu that puts any of them back on screen. Stills are kept at full resolution, because the point of
        getting one back is to copy it again at full quality. Clips keep a thumbnail and a path to the file.
      </p>
      <p>
        Do not want a history? Switch it off in Settings. That also deletes what is already stored.
      </p>

      <h2>pins as a scratchpad</h2>
      <p>
        Pin a capture and it stays put. Use it as a reference while you rebuild a layout, keep an error message next to
        the code that throws it, or hold the before shot while you make the after. Pins are written to disk atomically,
        so even an unclean shutdown does not lose them.
      </p>

      <h2>why not just the clipboard</h2>
      <p>
        The clipboard is still first. Every capture is on it before the overlay closes, and most of the time that is all
        you need. The card is for the other times, and it gets out of the way on its own.
      </p>
      <p>
        Cards appear for screenshots and for recordings. Want arrows or a frame first? Open the card in{" "}
        <Link href="/features/studio">Studio</Link>. Want the capture itself? See the{" "}
        <Link href="/features/screenshot-tool">screenshot tool</Link>.
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
