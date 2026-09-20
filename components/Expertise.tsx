import { expertise } from "@/content/cv";

export function Expertise() {
  return (
    <section aria-labelledby="expertise-heading" className="mt-24 sm:mt-32">
      <h2
        id="expertise-heading"
        className="text-xl font-medium tracking-tight sm:text-2xl"
      >
        Tools of the trade
      </h2>

      <dl className="mt-8 divide-y divide-hairline border-y border-hairline">
        {expertise.map((group) => (
          <div
            key={group.group}
            className="grid gap-x-8 gap-y-2 py-5 sm:grid-cols-[13rem_1fr]"
          >
            <dt className="text-sm font-medium">{group.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {group.items.map((item) => (
                  <li key={item} className="mono text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
