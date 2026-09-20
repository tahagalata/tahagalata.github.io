import { Identity } from "@/components/Identity";
import { Capabilities } from "@/components/Capabilities";
import { Toolkit } from "@/components/Toolkit";
import { Experience } from "@/components/Experience";
import { SideSections } from "@/components/SideSections";
import { profile } from "@/content/cv";

/**
 * Two columns on lg: identity above secondary detail on the left, the argument
 * on the right. DOM order is identity -> main -> secondary so that stacking on
 * mobile keeps the summary and experience ahead of education and languages.
 */
export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
      <div className="lg:grid lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 xl:gap-x-24">
        <div className="lg:col-start-1 lg:row-start-1">
          <Identity />
        </div>

        <main className="mt-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
          <Capabilities />
          <Toolkit />
          <Experience />
        </main>

        <aside className="mt-16 lg:col-start-1 lg:row-start-2 lg:mt-10 lg:self-start">
          <SideSections />
        </aside>
      </div>

      <footer className="mt-20 border-t border-hairline pt-6 sm:mt-24">
        <p className="text-sm text-muted">
          Get in touch at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-ink underline decoration-edge underline-offset-4 transition-colors hover:decoration-accent"
          >
            {profile.email}
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
