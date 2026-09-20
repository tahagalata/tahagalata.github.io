/**
 * Original line-art glyphs in the page's drawing language: same hairline weight
 * as the lineage edges, no borrowed marks. Each one depicts the thing it names
 * rather than decorating it.
 */
const paths: Record<string, React.ReactNode> = {
  // Two sources resolving into one target: a data model.
  model: (
    <>
      <rect x="1.75" y="1.75" width="7.5" height="5.5" />
      <rect x="14.75" y="1.75" width="7.5" height="5.5" />
      <rect x="8.25" y="16.75" width="7.5" height="5.5" />
      <path d="M5.5 7.25v4.5h13v-4.5" />
      <path d="M12 11.75v5" />
    </>
  ),
  // Bars on a baseline: reporting.
  report: (
    <>
      <path d="M2.75 20.5h18.5" />
      <rect x="4.75" y="12.5" width="3.5" height="8" />
      <rect x="10.25" y="6.5" width="3.5" height="14" />
      <rect x="15.75" y="15.5" width="3.5" height="5" />
    </>
  ),
  // One store carried into another: migration.
  migrate: (
    <>
      <rect x="1.75" y="7.75" width="6.5" height="8.5" />
      <rect x="15.75" y="7.75" width="6.5" height="8.5" />
      <path d="M9.25 12h5" />
      <path d="M11.75 9.5 14.25 12l-2.5 2.5" />
    </>
  ),
  // Stacked layers: a data lake.
  lake: (
    <>
      <rect x="2.75" y="4.25" width="18.5" height="4" />
      <rect x="2.75" y="10" width="18.5" height="4" />
      <rect x="2.75" y="15.75" width="18.5" height="4" />
    </>
  ),
};

export function Glyph({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-7 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
