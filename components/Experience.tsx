import { roles, trajectory } from "@/content/cv";
import { Edge } from "./Edge";
import { Mark } from "./Mark";

/**
 * Experience as a provenance trace: current role at the top, edges pointing up
 * from the roles that fed it. Read top-down; the arrows show where it came from.
 */
export function Experience() {
  const edgeCount = roles.length - 1;

  return (
    <section aria-labelledby="experience-heading" className="mt-24 sm:mt-28">
      <h2
        id="experience-heading"
        className="text-xl font-medium tracking-tight sm:text-2xl"
      >
        Experience
      </h2>

      <ol className="mt-8">
        <li aria-hidden="true" className="mb-4 grid grid-cols-[24px_1fr] gap-x-4 sm:gap-x-6">
          <div className="flex justify-center">
            <Edge accent delay={edgeCount * 160 + 120} height={56} />
          </div>
          <div className="flex items-start pt-1">
            <p className="text-sm leading-snug">
              <span className="font-medium text-accent">{trajectory.to}</span>
              <span className="mt-1 block max-w-[46ch] text-muted">
                {trajectory.note}
              </span>
            </p>
          </div>
        </li>

        {roles.map((role, i) => (
          <li key={role.id}>
            <div className="grid grid-cols-[24px_1fr] gap-x-4 sm:gap-x-6">
              <div className="flex justify-center pt-[7px]">
                <span
                  aria-hidden="true"
                  className={`block size-[11px] rounded-[1px] border-[1.5px] ${
                    role.current
                      ? "border-accent bg-accent"
                      : "border-edge bg-surface"
                  } ${role.detached ? "opacity-60" : ""}`}
                />
              </div>

              <article className="rounded-[2px] border border-hairline bg-surface p-5 sm:p-6">
                {role.mark ? (
                  <div className="mb-3 text-ink">
                    <Mark slug={role.mark} name={role.org} />
                  </div>
                ) : null}

                <header className="sm:flex sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="text-base font-medium tracking-tight sm:text-lg">
                      {role.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">
                      {role.org}
                      {role.orgNote ? (
                        <span className="text-edge"> / {role.orgNote}</span>
                      ) : null}
                    </p>
                  </div>
                  <p className="mono mt-2 shrink-0 text-xs text-muted sm:mt-0">
                    <time>{role.start}</time>
                    <span className="mx-1.5 text-edge">–</span>
                    <time>{role.end}</time>
                  </p>
                </header>

                <ul className="mt-4 space-y-3">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="max-w-[68ch] border-l border-hairline pl-4 text-sm leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {i < edgeCount ? (
              <div className="grid grid-cols-[24px_1fr] gap-x-4 sm:gap-x-6">
                <div className="flex justify-center">
                  <Edge
                    delay={(edgeCount - 1 - i) * 160}
                    dashed={roles[i + 1].detached}
                  />
                </div>
                <div className="flex items-center">
                  {roles[i + 1].detached ? (
                    <p className="text-xs text-muted">
                      Earlier, and unrelated — where the building started.
                    </p>
                  ) : roles[i + 1].carried ? (
                    <ul className="flex flex-wrap items-center gap-y-1">
                      {roles[i + 1].carried!.map((item, j) => (
                        <li
                          key={item}
                          className={`mono text-xs leading-none text-muted ${
                            j > 0 ? "ml-3 border-l border-hairline pl-3" : ""
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
