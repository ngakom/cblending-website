import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import Check from "@/components/Check";
import { keepCase } from "@/lib/keepCase";
import { CERTIFICATIONS, CERTIFIED_VENDOR_TO, INTEGRITY, SAFETY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quality & Safety",
  description: "FSSC 22000 certified, Halaal (SANHA, NIHT) and Kosher accredited — food safety and health & safety at CBS.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & safety"
        title="Living a food safety culture is our highest priority"
        intro="World-class food safety systems, independent accreditation and a safety record we're proud of."
        image="/images/laboratory.jpg"
      />

      {/* Certifications */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <p data-reveal className="eyebrow">Certifications &amp; accreditation</p>
        <h2 data-reveal className="heading mt-3">Independently certified and audited</h2>
        <div data-reveal-group className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {CERTIFICATIONS.map((c) => (
            <div key={c.name} className="card lift p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-lg font-extrabold text-white"><Check /></span>
              <h3 className="mt-5 text-xl font-extrabold text-teal">{keepCase(c.name)}</h3>
              <p className="mt-2 leading-relaxed text-ink/80">{keepCase(c.detail)}</p>
            </div>
          ))}
        </div>
        <div className="card-white mt-8 p-7">
          <p className="font-extrabold text-teal">CBS is a certified vendor to</p>
          <p className="mt-2 text-lg text-ink/85">{CERTIFIED_VENDOR_TO.join(" · ")} · and many others</p>
        </div>
      </section>

      {/* Brand integrity */}
      <section className="bg-pale/60">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div className="grid grid-cols-2 gap-4">
            <div data-reveal="zoom" className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src="/images/quality-check.jpg" alt="Quality checks at CBS" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
            </div>
            <div data-reveal="zoom" className="relative mt-10 aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src="/images/sensory-tasting.jpg" alt="Sensory evaluation in the CBS laboratory" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div>
            <p data-reveal className="eyebrow">Brand integrity &amp; food safety</p>
            <h2 data-reveal className="heading mt-3">Why it matters</h2>
            <ol data-reveal-group className="mt-8 space-y-4">
              {INTEGRITY.map((x, i) => (
                <li key={x.title} className="card-white lift flex gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-teal bg-pale font-extrabold text-teal">{i + 1}</span>
                  <span>
                    <span className="block font-extrabold text-teal">{x.title}</span>
                    <span className="text-slate">{x.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 leading-relaxed text-slate">
              Our quality systems include statistical quality control and Good Manufacturing Practice (GMP), giving our customers comfort in
              how their products are made and a solid foundation for sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Health & safety */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_1.3fr] lg:px-10 lg:py-24">
        <div className="rounded-3xl bg-teal p-10 text-center text-white">
          <p className="text-6xl font-extrabold">2,000+</p>
          <p className="mt-2 text-lg text-white/85">days without an injury on duty (IOD)</p>
        </div>
        <div>
          <p data-reveal className="eyebrow">Health &amp; safety</p>
          <h2 data-reveal className="heading mt-3">Safe people, safe products</h2>
          <ul data-reveal-group className="mt-8 space-y-3">
            {SAFETY.map((s) => (
              <li key={s} className="flex gap-3 text-lg text-ink/85">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green text-xs font-extrabold text-white"><Check /></span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction title="Need certified blending you can trust?" />
    </>
  );
}
