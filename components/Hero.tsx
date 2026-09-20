import Image from "next/image";
import { profile } from "@/content/cv";

export function Hero() {
  return (
    <header>
      <div className="flex items-start gap-5 sm:gap-7">
        <Image
          src={`/${profile.photo}`}
          alt=""
          width={431}
          height={442}
          priority
          className="size-24 shrink-0 rounded-[2px] border border-hairline object-cover sm:size-28"
        />
        <div className="pt-1">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg text-muted sm:text-xl">{profile.title}</p>
          <p className="mt-2 text-sm text-muted">{profile.location}</p>
        </div>
      </div>

      <p className="mt-8 max-w-[66ch] leading-relaxed">{profile.summary}</p>

      <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="underline decoration-edge underline-offset-4 transition-colors hover:decoration-accent"
        >
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          rel="me noopener"
          className="underline decoration-edge underline-offset-4 transition-colors hover:decoration-accent"
        >
          {profile.linkedinHandle}
        </a>
      </p>
    </header>
  );
}
