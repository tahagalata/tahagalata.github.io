import Image from "next/image";
import { profile } from "@/content/cv";

/** The identity block: left rail on desktop, page header on mobile. */
export function Identity() {
  return (
    <header>
      <div className="flex items-start gap-5 lg:block">
        <Image
          src={`/${profile.photo}`}
          alt=""
          width={431}
          height={442}
          priority
          className="size-24 shrink-0 rounded-[2px] border border-hairline object-cover sm:size-28 lg:size-36"
        />
        <div className="pt-1 lg:pt-5">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2rem]">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg text-muted lg:text-base">{profile.title}</p>
          <p className="mt-2 text-sm text-muted">{profile.location}</p>
        </div>
      </div>

      <ul role="list" className="mt-6 space-y-2 text-sm lg:mt-8 lg:border-t lg:border-hairline lg:pt-6">
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="underline decoration-edge underline-offset-4 transition-colors hover:decoration-accent"
          >
            {profile.email}
          </a>
        </li>
        <li>
          <a
            href={profile.linkedin}
            rel="me noopener"
            className="underline decoration-edge underline-offset-4 transition-colors hover:decoration-accent"
          >
            {profile.linkedinHandle}
          </a>
        </li>
      </ul>
    </header>
  );
}
