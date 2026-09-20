import { marks } from "@/content/marks";

/**
 * A tool's brand mark, monochrome in currentColor. Falls back to a monogram so
 * a tool whose mark we cannot legitimately obtain still gets a uniform tile.
 */
export function Mark({ slug, name }: { slug?: string; name: string }) {
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
      viewBox="0 0 24 24"
      className="size-8 fill-current"
      aria-hidden="true"
      role="presentation"
    >
      <path d={mark.path} />
    </svg>
  );
}
