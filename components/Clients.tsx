import { clients } from "@/content/cv";

/**
 * A typographic wordmark strip. Deliberately not logos: no borrowed marks and
 * no implied endorsement by the organisations named.
 */
export function Clients() {
  return (
    <section aria-labelledby="clients-heading" className="mt-24 sm:mt-28">
      <h2
        id="clients-heading"
        className="text-xl font-medium tracking-tight sm:text-2xl"
      >
        Delivered for
      </h2>

      <ul className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-hairline pt-6">
        {clients.map((client) => (
          <li
            key={client}
            className="text-lg tracking-tight text-muted sm:text-xl"
          >
            {client}
          </li>
        ))}
      </ul>
    </section>
  );
}
