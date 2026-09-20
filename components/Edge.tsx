/**
 * A lineage connector. Drawn bottom-to-top because provenance points upward:
 * the role below fed the role above it.
 *
 * Stroke colour comes from a utility class, not a `stroke` attribute — var()
 * is not substituted inside SVG presentation attributes.
 */
export function Edge({
  delay = 0,
  accent = false,
  dashed = false,
  height = 72,
}: {
  delay?: number;
  accent?: boolean;
  /** A lineage break: the role below did not feed the one above it. */
  dashed?: boolean;
  height?: number;
}) {
  const top = 11;
  const stroke = accent ? "stroke-accent" : "stroke-edge";

  return (
    <svg
      width="24"
      height={height}
      viewBox={`0 0 24 ${height}`}
      aria-hidden="true"
      fill="none"
    >
      <line
        x1="12"
        y1={height}
        x2="12"
        y2={top}
        strokeWidth="1.5"
        strokeDasharray={dashed ? "2 4" : undefined}
        className={dashed ? stroke : `edge-draw ${stroke}`}
        style={
          dashed
            ? undefined
            : {
                ["--len" as string]: height - top,
                ["--delay" as string]: `${delay}ms`,
              }
        }
      />
      <polyline
        points="7,16.5 12,9.5 17,16.5"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        className={dashed ? stroke : `edge-draw ${stroke}`}
        style={
          dashed
            ? undefined
            : {
                ["--len" as string]: 18,
                ["--delay" as string]: `${delay + 400}ms`,
              }
        }
      />
    </svg>
  );
}
