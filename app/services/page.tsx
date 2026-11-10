import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import Check from "@/components/Check";
import { MODELS, PROCESS, SERVICES, SKILLS, SPECIALTIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ingredient and raw material blending, sensory laboratory services, project management and NPD, and logistics — on a consignment or fully sourced model.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Contract blending, from concept to finished product"
        intro="Flexible supply models and end-to-end capability for large-volume programmes and fast-turnaround projects alike."
        image="/images/blending-operator.jpg"
      />

      {/* Supply models */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <p data-reveal className="eyebrow">How we can work together</p>
        <h2 data-reveal className="heading mt-3">Two supply models</h2>
        <div data-reveal-group className="mt-10 grid gap-6 md:grid-cols-2">
          {MODELS.map((m, i) => (
            <div key={m.title} className="card lift p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-teal bg-white font-extrabold text-teal">{i + 1}</span>
              <h3 className="mt-5 text-2xl font-extrabold text-teal">{m.title}</h3>
              <ul className="mt-4 space-y-3 text-lg text-ink/80">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-green" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-pale/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-5 lg:px-10">
          {SERVICES.map((s, i) => (
            <article key={s.id} id={s.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2">
              <div className={`relative aspect-[3/2] overflow-hidden rounded-[2rem] ${i % 2 ? "lg:order-2" : ""}`}>
                <Image src={s.image!} alt="" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
              <div>
                <p data-reveal className="eyebrow">0{i + 1}</p>
                <h2 data-reveal className="heading mt-2">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate">{s.summary}</p>
                <ul data-reveal-group className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-ink/85">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green text-xs font-extrabold text-white"><Check /></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Specialties + skills */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div>
          <p data-reveal className="eyebrow">Our specialties</p>
          <h2 data-reveal className="heading mt-3">Precision dry blends</h2>
          <ul data-reveal-group className="mt-8 grid grid-cols-2 gap-3 [&>li:last-child:nth-child(odd)]:col-span-2">
            {SPECIALTIES.map((s) => (
              <li key={s} className="card px-5 py-4 font-bold text-teal">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p data-reveal className="eyebrow">Specialist skills</p>
          <h2 data-reveal className="heading mt-3">Built for every project size</h2>
          <ol data-reveal-group className="mt-8 space-y-4">
            {SKILLS.map((s, i) => (
              <li key={s} className="card-white lift flex items-center gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-teal bg-pale font-extrabold text-teal">{i + 1}</span>
                <span className="font-semibold text-ink">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process */}
      <section className="bg-teal-deep py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pale">B2B solution strategy</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">How CBS supports you from concept to finished product</h2>
          <ol data-reveal-group className="mt-12 grid gap-6 md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-pale text-lg font-extrabold text-pale">{i + 1}</span>
                <h3 className="mt-5 text-xl font-extrabold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-white/75">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction title="Have a product in mind?" text="Share your product type, volumes, packaging format and timelines, and we'll propose the right model for you." />
    </>
  );
}
