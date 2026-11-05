import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
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
        eyebrow="our services"
        title="contract blending, from concept to finished product"
        intro="Flexible supply models and end-to-end capability for large-volume programmes and fast-turnaround projects alike."
        image="/images/ribbon-blender.jpg"
      />

      {/* Supply models */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <div data-reveal>
          <h2 className="heading">two supply models</h2>
          <span className="rule" />
        </div>
        <div data-reveal-group className="mt-12 grid gap-6 md:grid-cols-2">
          {MODELS.map((m, i) => (
            <div key={m.title} className="box lift p-8">
              <p className="text-5xl font-black text-green">0{i + 1}</p>
              <h3 className="mt-4 text-2xl font-black lowercase text-white">{m.title}</h3>
              <ul className="mt-4 space-y-3 text-lg text-muted">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 bg-green" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Services detail */}
      <section className="mx-auto max-w-7xl space-y-20 px-5 py-20 lg:px-10 lg:py-24">
        {SERVICES.map((s, i) => (
          <article key={s.id} id={s.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2">
            <div data-reveal={i % 2 ? "right" : "left"} className={`relative aspect-[3/2] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
              <Image src={s.image!} alt="" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div data-reveal>
              <p className="eyebrow">0{i + 1}</p>
              <h2 className="heading mt-3 lowercase">{s.title}</h2>
              <span className="rule" />
              <p className="mt-6 text-lg leading-relaxed text-muted">{s.summary}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-white/85">
                    <span className="mt-1 text-green">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* Process */}
      <section className="border-y border-line bg-black py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div data-reveal>
            <h2 className="heading">from concept to finished product</h2>
            <span className="rule" />
          </div>
          <ol data-reveal-group className="mt-12 grid gap-4 md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.title} className="box lift p-7">
                <span className="flex h-11 w-11 items-center justify-center border-2 border-green text-lg font-black text-green">{i + 1}</span>
                <h3 className="mt-5 text-xl font-black lowercase text-white">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Specialties + skills */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div>
          <div data-reveal>
            <h2 className="heading">what we blend</h2>
            <span className="rule" />
          </div>
          <ul data-reveal-group className="mt-10">
            {SPECIALTIES.map((s, i) => (
              <li key={s} className="group flex items-baseline gap-4 border-b border-line py-3.5">
                <span className="text-sm font-extrabold text-green">0{i + 1}</span>
                <span className="text-xl font-black lowercase text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-green">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div data-reveal>
            <h2 className="heading">built for every project size</h2>
            <span className="rule" />
          </div>
          <ol data-reveal-group className="mt-10 space-y-4">
            {SKILLS.map((s, i) => (
              <li key={s} className="box flex items-center gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-green font-black text-green">{i + 1}</span>
                <span className="font-semibold text-white">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction title="have a product in mind?" text="Share your product type, volumes, packaging format and timelines, and we'll propose the right model for you." />
    </>
  );
}
