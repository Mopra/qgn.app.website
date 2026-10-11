import { all } from "@/app/release";
import { Doc, meta } from "@/app/site";

export const revalidate = 3600;

export const metadata = meta(
  "/changelog",
  "QGN changelog: every release of the Windows screenshot tool",
  "Every QGN release, written up properly: what changed, what broke, and how it was fixed. Straight from the GitHub releases, updated hourly.",
);

// Release notes are a small slice of Markdown: bold or # lines as headings,
// paragraphs, - lists, inline code, links, bold and <kbd>. Rendered here, so
// the site needs no Markdown dependency.
function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s: string) {
  return esc(s)
    .replace(/&lt;(\/?)kbd&gt;/g, "<$1kbd>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2">$1</a>');
}

function render(body: string) {
  const html: string[] = [];
  const blocks = body.replace(/\r/g, "").split(/\n\s*\n/);
  for (const block of blocks) {
    const lines = block.split("\n").filter((l) => l.trim());
    if (!lines.length) continue;
    const first = lines[0].trim();
    if (lines.length === 1 && /^#+\s/.test(first)) {
      html.push(`<p><b>${inline(first.replace(/^#+\s*/, ""))}</b></p>`);
    } else if (lines.length === 1 && /^\*\*.+\*\*$/.test(first)) {
      html.push(`<p><b>${inline(first.slice(2, -2))}</b></p>`);
    } else if (/^[-*]\s/.test(first)) {
      // A list, possibly with a lead-in line missing; continuation lines join the item above.
      const items: string[] = [];
      for (const l of lines) {
        if (/^\s*[-*]\s/.test(l)) items.push(l.replace(/^\s*[-*]\s+/, ""));
        else if (items.length) items[items.length - 1] += " " + l.trim();
      }
      html.push(`<ul>${items.map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`);
    } else {
      // A paragraph, which may run straight into a list.
      const at = lines.findIndex((l) => /^\s*[-*]\s/.test(l));
      const para = at === -1 ? lines : lines.slice(0, at);
      const head = para.length === 1 && /^#+\s/.test(para[0].trim());
      html.push(head ? `<p><b>${inline(para[0].trim().replace(/^#+\s*/, ""))}</b></p>` : `<p>${inline(para.map((l) => l.trim()).join(" "))}</p>`);
      if (at !== -1) html.push(render(lines.slice(at).join("\n")));
    }
  }
  return html.join("");
}

export default async function Page() {
  const releases = await all();
  return (
    <Doc
      crumbs={[{ label: "changelog" }]}
      title="Every release, written up."
      lede="What changed in QGN, and why. The app checks for updates every four hours and installs them with one click. These are the same notes it links to."
    >
      {releases.length === 0 && (
        <p>
          GitHub didn&apos;t answer just now. The notes are on the{" "}
          <a href="https://github.com/Mopra/qgn.app/releases">releases page</a>.
        </p>
      )}
      {releases.map((r) => (
        <section key={r.version} id={r.version} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2>
            <a href={r.url}>{r.version}</a> <span style={{ color: "var(--dim)" }}>· {r.date}</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }} dangerouslySetInnerHTML={{ __html: render(r.body) }} />
        </section>
      ))}
    </Doc>
  );
}
