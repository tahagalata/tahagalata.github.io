import { education, languages } from "@/content/cv";

export function Background() {
  return (
    <section
      aria-labelledby="background-heading"
      className="mt-24 grid gap-14 sm:mt-28 sm:grid-cols-2 sm:gap-10"
    >
      <h2 id="background-heading" className="sr-only">
        Education and languages
      </h2>

      <div>
        <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
          Education
        </h3>
        <ul className="mt-6 space-y-5">
          {education.map((item) => (
            <li key={item.institution} className="border-l border-hairline pl-4">
              <p className="font-medium">{item.institution}</p>
              {item.field ? (
                <p className="text-sm text-muted">{item.field}</p>
              ) : null}
              <p className="mono mt-1 text-xs text-muted">
                <time>{item.start}</time>
                <span className="mx-1.5 text-edge">–</span>
                <time>{item.end}</time>
                {item.detail ? (
                  <span className="ml-3 text-edge">{item.detail}</span>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
          Languages
        </h3>
        <dl className="mt-6 divide-y divide-hairline border-y border-hairline">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-baseline gap-4 py-3">
              <dt className="w-24 shrink-0 text-sm font-medium">{lang.name}</dt>
              <dd className="text-sm text-muted">
                {lang.level}
                {lang.detail ? (
                  <span className="mono ml-2 text-xs text-edge">
                    {lang.detail}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
