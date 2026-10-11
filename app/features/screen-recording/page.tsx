import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/features/screen-recording",
  "QGN: free screen recorder for Windows with zoom, trim and GIF export",
  "Record any region of your screen on Windows with QGN. Microphone and system audio, pause and resume, zooms made from your clicks, and export to MP4, WebM, GIF or animated WebP. Free and open source.",
);

const qa: [string, string][] = [
  [
    "How do I record my screen with QGN?",
    "Press Ctrl+Shift+Q, drag the region you want, and start. A small control bar lets you pause, resume and stop. Press Space instead of dragging to record the whole display.",
  ],
  [
    "Does QGN record audio?",
    "Yes. Toggle the microphone, pick the input device, and toggle system audio. If either fails to open, the control bar shows a warning for the whole take instead of recording silence without telling you.",
  ],
  [
    "Can I export a GIF?",
    "Yes. Studio exports MP4, WebM, GIF and animated WebP. GIF is capped at 800 pixels on the long side and 15 frames a second, which keeps files small enough to paste into a pull request.",
  ],
  [
    "Is there a watermark?",
    "No watermark and no account. It is free and MIT licensed.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "features" }, { label: "screen recording" }]}
      title="Record a region, get a clip worth sending."
      lede="Ctrl+Shift+Q, drag, record. Then trim it, let it zoom in where you clicked, and export the format the place you are pasting into wants."
      ld={faqLd(qa)}
    >
      <p>
        Screenshots answer most questions. Some need motion: a bug that only shows up on hover, a flow across three
        screens, a quick demo for a pull request. QGN records those with the same overlay you already know from
        capturing, and the same Studio to finish them.
      </p>

      <h2>recording</h2>
      <ul>
        <li>
          <b>Any region.</b> <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>q</kbd>, then drag. <kbd>space</kbd> takes the whole
          display. A pulsing red border shows what is being recorded.
        </li>
        <li>
          <b>Audio.</b> Microphone with a device picker, and system audio. Either can be on or off.
        </li>
        <li>
          <b>Pause and resume.</b> Stop mid take, pick it up again, end up with one clip.
        </li>
        <li>
          <b>Countdown.</b> A 3, 2, 1 before it starts, on by default and configurable in Settings.
        </li>
        <li>
          <b>Loud failures.</b> If the mic or system audio will not open, you are told while you can still redo the
          take, not after you have sent a silent video.
        </li>
      </ul>

      <h2>finishing in studio</h2>
      <p>
        A finished recording opens in <Link href="/features/studio">Studio</Link>, the same editor used for
        screenshots.
      </p>
      <ul>
        <li>
          <b>Trim.</b> Set in and out points on the timeline.
        </li>
        <li>
          <b>Zoom keyframes from your clicks.</b> QGN notes where you clicked while recording and proposes zooms
          around those moments. Keep them, move them, or place your own with easing and a focus point.
        </li>
        <li>
          <b>A styled cursor.</b> Optional, with click ripples, layered over the recording so viewers can follow it.
        </li>
        <li>
          <b>Annotations on video.</b> Arrows, text, callouts and redaction work on clips the same way as on stills.
        </li>
        <li>
          <b>Frames.</b> Put the clip on a background, in a window or browser frame, at the aspect ratio you need.
        </li>
      </ul>

      <h2>export</h2>
      <Compare
        cols={["good for", "notes"]}
        rows={[
          ["MP4", "sharing anywhere", "keeps audio. encodes faster than real time."],
          ["WebM", "the web, smaller files", "keeps audio. encodes faster than real time."],
          ["GIF", "pull requests, chat", "loops, no audio. up to 800 px, 15 fps."],
          ["animated WebP", "docs, the web", "loops, no audio. smaller and sharper than GIF."],
        ]}
      />
      <p>
        Studio shows a size estimate before you render. MP4 and WebM drive the encoder directly through WebCodecs, so a
        three minute clip does not take three minutes. If your system cannot do that, it falls back to rendering in real
        time.
      </p>

      <h2>what it is not</h2>
      <ul>
        <li>Not a streaming tool and not a webcam recorder. It records a region of your screen.</li>
        <li>Not a video editor with tracks. Trim, zoom, annotate, export. That is the scope.</li>
        <li>Windows only.</li>
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
