import { Doc, meta } from "@/app/site";

export const metadata = meta(
  "/terms",
  "QGN terms: MIT licensed, free, no warranty",
  "The terms for QGN, the free screenshot tool for Windows. It is MIT licensed, provided as is, and what you capture is yours.",
);

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "terms" }]}
      title="Short terms, because it's MIT."
      lede="Last updated 11 October 2026. By downloading, installing or using QGN you agree to these terms."
    >
      <h2>license</h2>
      <p>
        QGN is released under the <a href="https://opensource.org/licenses/MIT">MIT License</a>. You may use, copy,
        modify, merge, publish, distribute, sublicense and sell copies of it, as long as the license notice comes along.
        The full text is in the{" "}
        <a href="https://github.com/Mopra/qgn.app/blob/main/LICENSE">source repository</a>.
      </p>

      <h2>no warranty</h2>
      <p>
        QGN is provided &quot;as is&quot;, without warranty of any kind, express or implied, including merchantability,
        fitness for a particular purpose and non-infringement. The risk as to its quality and performance is yours.
      </p>

      <h2>liability</h2>
      <p>
        In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether
        in contract, tort or otherwise, arising from, out of or in connection with the software or its use.
      </p>

      <h2>your content</h2>
      <p>
        What you capture and record with QGN is yours. QGN claims no rights to it, and it never leaves your machine
        unless you send it somewhere.
      </p>

      <h2>your responsibility</h2>
      <p>
        You are responsible for what you capture and how you use it. Respect other people&apos;s privacy and the law
        where you are, especially when recording audio.
      </p>

      <h2>updates and support</h2>
      <p>
        The app checks GitHub for new versions and offers them. There is no obligation to provide updates, fixes or
        support, though bugs reported on <a href="https://github.com/Mopra/qgn.app/issues">GitHub</a> are welcome.
      </p>

      <h2>changes</h2>
      <p>These terms may change. When they do, this page and its date change too.</p>
    </Doc>
  );
}
