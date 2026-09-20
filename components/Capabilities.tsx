import { lede, capabilities, reach } from "@/content/cv";
import { Glyph } from "./Glyph";

/** Opens the page: what he does, in points rather than a paragraph. */
export function Capabilities() {
  return (
    <section aria-labelledby="capabilities-heading">
      <h2 id="capabilities-heading" className="sr-only">
        Areas of expertise
      </h2>

      <p className="max-w-[46ch] text-2xl leading-snug tracking-tight sm:text-[1.75rem]">
        {lede}
      </p>

      <ul role="list" className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {capabilities.map((item) => (
          <li key={item.title} className="flex gap-3.5">
            <span className="mt-0.5 text-muted">
              <Glyph name={item.glyph} />
            </span>
            <div>
              <h3 className="font-medium leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-9 border-t border-hairline pt-5 text-sm text-muted">
        Delivered with business users in{" "}
        {reach.slice(0, -1).join(", ")} and {reach[reach.length - 1]}.
      </p>
    </section>
  );
}
