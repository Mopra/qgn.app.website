// What GitHub knows about QGN's releases, fetched at most once an hour.

export const REPO = "https://github.com/Mopra/qgn.app";
export const LATEST = `${REPO}/releases/latest`;
export const INSTALLER = `${REPO}/releases/latest/download/QGN-Setup.exe`;

type Asset = { name: string; download_count: number };
type Release = { tag_name: string; name: string | null; published_at: string; draft: boolean; body: string | null; html_url: string; assets: Asset[] };

export type Latest = { version: string; date: string; headline: string | null; url: string };

async function releases(): Promise<Release[]> {
  try {
    const res = await fetch("https://api.github.com/repos/Mopra/qgn.app/releases?per_page=100", {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return ((await res.json()) as Release[]).filter((r) => !r.draft);
  } catch {
    return [];
  }
}

// People who downloaded the installer. Not the badge total: that also counts
// latest.yml, which every installed copy fetches when it checks for updates.
export async function installs() {
  return (await releases())
    .flatMap((r) => r.assets)
    .filter((a) => /^QGN-Setup.*\.exe$/.test(a.name))
    .reduce((sum, a) => sum + a.download_count, 0);
}

// The newest release, with the first bold line of its notes as the headline.
export async function latest(): Promise<Latest | null> {
  const r = (await releases())[0];
  if (!r) return null;
  const headline = r.body?.match(/\*\*(.+?)\*\*/)?.[1] ?? null;
  return { version: (r.name || r.tag_name).replace(/^v/, ""), date: r.published_at.slice(0, 10), headline, url: r.html_url };
}

export async function all() {
  return (await releases()).map((r) => ({
    version: (r.name || r.tag_name).replace(/^v/, ""),
    date: r.published_at.slice(0, 10),
    body: r.body ?? "",
    url: r.html_url,
  }));
}
