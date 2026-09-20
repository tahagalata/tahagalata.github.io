import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Background } from "@/components/Background";
import { profile } from "@/content/cv";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28">
      <Hero />
      <Experience />
      <Expertise />
      <Background />

      <footer className="mt-24 border-t border-hairline pt-6 sm:mt-32">
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
  );
}
