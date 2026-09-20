import { toolkit } from "@/content/cv";
import { Mark, isWordmark } from "./Mark";

/** Sits directly under the summary: the fastest answer to "what do you use?". */
export function Toolkit() {
  return (
    <section aria-labelledby="toolkit-heading" className="mt-14">
      <h2 id="toolkit-heading" className="sr-only">
        Platforms and tools
      </h2>

      <div className="grid gap-px overflow-hidden rounded-[2px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((group) => (
          <div key={group.group} className="bg-surface p-5">
            <div className="flex h-10 items-center gap-3">
              <span className="text-ink">
                <Mark slug={group.mark} name={group.group} />
              </span>
              <h3
                className={
                  isWordmark(group.mark)
                    ? "sr-only"
                    : "text-base font-medium tracking-tight"
                }
              >
                {group.group}
              </h3>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {group.blurb}
            </p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="mono rounded-[2px] border border-hairline px-2 py-1 text-xs leading-none text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
