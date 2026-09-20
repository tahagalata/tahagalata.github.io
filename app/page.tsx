import { Identity } from "@/components/Identity";
import { Toolkit } from "@/components/Toolkit";
import { Experience } from "@/components/Experience";
import { Clients } from "@/components/Clients";
import { Background } from "@/components/Background";
import { profile } from "@/content/cv";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
      <div className="lg:grid lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-24">
        <Identity />

        <main className="mt-12 lg:mt-0">
          <p className="max-w-[70ch] text-lg leading-relaxed">
            {profile.summary}
          </p>

          <Toolkit />
          <Experience />
          <Clients />
          <Background />

          <footer className="mt-24 border-t border-hairline pt-6 sm:mt-28">
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
        </main>
      </div>
    </div>
  );
}
