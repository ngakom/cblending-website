import Image from "next/image";

/** Inner-page banner: a darkened full-width photo with a centred lowercase title. */
export default function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro?: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image src={image} alt="" fill priority sizes="100vw" className="ken-burns -z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-night/70" />
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center lg:py-32">
        <p className="fade-up eyebrow">{eyebrow}</p>
        <h1 className="fade-up mt-4 text-4xl font-black lowercase leading-[1.08] text-white sm:text-6xl" style={{ animationDelay: "120ms" }}>
          {title}
        </h1>
        <span className="fade-up mt-6 h-1 w-16 bg-green" style={{ animationDelay: "240ms" }} />
        {intro && (
          <p className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white/85" style={{ animationDelay: "320ms" }}>
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
