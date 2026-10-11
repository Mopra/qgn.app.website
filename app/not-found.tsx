import type { Metadata } from "next";
import Link from "next/link";
import { Foot, Top } from "./site";

export const metadata: Metadata = { title: "Not found: QGN", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <>
      <Top />
      <main className="doc">
        <p className="crumb">404</p>
        <h1>Nothing here.</h1>
        <p className="lede">
          The page moved or never was. <Link href="/">Back to the start</Link>, where you can take a screenshot of it.
        </p>
      </main>
      <Foot />
    </>
  );
}
