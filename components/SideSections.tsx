import { education, languages, clients } from "@/content/cv";

function SideHeading({ children, id }: { children: string; id: string }) {
  return (
    <h2 id={id} className="text-base font-medium tracking-tight">
      {children}
    </h2>
  );
}

/**
 * Secondary detail, sized for the narrow column: education, languages and the
 * organisations delivered for. Sits below the identity block on desktop and
 * after the main content on mobile, where it should not outrank the summary.
 */
export function SideSections() {
  return (
    <>
      <section
        aria-labelledby="education-heading"
        className="border-t border-hairline pt-6"
      >
        <SideHeading id="education-heading">Education</SideHeading>
        <ul className="mt-4 space-y-4">
          {education.map((item) => (
            <li key={item.institution}>
              <p className="text-sm font-medium leading-snug">
                {item.institution}
              </p>
              {item.field ? (
                <p className="text-sm text-muted">{item.field}</p>
              ) : null}
              <p className="mono mt-1 text-xs text-muted">
                <time>{item.start}</time>
                <span className="mx-1.5 text-edge">–</span>
                <time>{item.end}</time>
                {item.detail ? (
                  <span className="ml-2 text-edge">{item.detail}</span>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="languages-heading"
        className="mt-10 border-t border-hairline pt-6"
      >
        <SideHeading id="languages-heading">Languages</SideHeading>
        <dl className="mt-4 space-y-2.5">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-baseline gap-3">
              <dt className="w-20 shrink-0 text-sm font-medium">{lang.name}</dt>
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
      </section>

      <section
        aria-labelledby="clients-heading"
        className="mt-10 border-t border-hairline pt-6"
      >
        <SideHeading id="clients-heading">Delivered for</SideHeading>
        <ul className="mt-4 space-y-1.5">
          {clients.map((client) => (
            <li key={client} className="text-sm leading-snug text-muted">
              {client}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
