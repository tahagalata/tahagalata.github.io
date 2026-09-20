import { marks } from "@/content/marks";

export function isWordmark(slug?: string) {
  return Boolean(slug && marks[slug]?.wordmark);
}

export function markTitle(slug?: string) {
  return slug ? marks[slug]?.title : undefined;
}

/**
 * A brand mark, drawn in currentColor. Paths toned "surface" paint in the card
 * background instead, so baked-in letter counters follow the colour scheme.
 * Falls back to a monogram when no mark is held, keeping grids uniform.
 */
export function Mark({
  slug,
  name,
  height,
}: {
  slug?: string;
  name: string;
  height?: string;
}) {
  const mark = slug ? marks[slug] : undefined;

  if (!mark) {
    const monogram = name.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase();
    return (
      <span
        aria-hidden="true"
        className="mono flex size-8 items-center justify-center rounded-[2px] border border-hairline text-[10px] leading-none text-muted"
      >
        {monogram}
      </span>
    );
  }

  return (
    <svg
      viewBox={mark.viewBox}
      className={`${height ?? mark.height} w-auto`}
      aria-hidden="true"
      role="presentation"
    >
      {mark.paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          transform={p.transform}
          fillRule={p.fillRule}
          fill={p.tone === "surface" ? "var(--c-surface)" : "currentColor"}
        />
      ))}
    </svg>
  );
}
