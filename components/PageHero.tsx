import Image from "next/image";

/** Inner-page banner: a factory photo under a teal wash, with the page title. */
export default function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro?: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-teal-deep">
      <Image src={image} alt="" fill priority sizes="100vw" className="ken-burns -z-10 object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-deep via-teal-deep/85 to-teal/40" />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
        <p className="fade-up text-xs font-extrabold uppercase tracking-[0.2em] text-pale">{eyebrow}</p>
        <h1 className="fade-up mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h1>
        {intro && <p className="fade-up mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>}
      </div>
    </section>
  );
}
