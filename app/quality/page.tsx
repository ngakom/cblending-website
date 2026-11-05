import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import CountUp from "@/components/CountUp";
import PageHero from "@/components/PageHero";
import Check from "@/components/Check";
import { CERTIFICATIONS, CERTIFIED_VENDOR_TO, INTEGRITY, SAFETY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quality & Safety",
  description: "FSSC 22000 certified, Halaal (SANHA, NIHT) and Kosher accredited, SEDEX listed — food safety and health & safety at CBS.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="quality & safety"
        title="living a food safety culture is our highest priority"
        intro="World-class food safety systems, independent accreditation and a safety record we're proud of."
        image="/images/laboratory.jpg"
      />

      {/* Certifications */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <div data-reveal>
          <h2 className="heading">independently certified and audited</h2>
          <span className="rule" />
        </div>
        <div data-reveal-group className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CERTIFICATIONS.map((c) => (
            <div key={c.name} className="box lift p-6">
              <span className="flex h-10 w-10 items-center justify-center bg-green text-lg font-black text-night"><Check /></span>
              <h3 className="mt-5 text-xl font-black text-white">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.detail}</p>
            </div>
          ))}
        </div>
        <div data-reveal className="box mt-6 p-7">
          <p className="font-extrabold lowercase text-green">cbs is a certified vendor to</p>
          <p className="mt-2 text-lg text-white">{CERTIFIED_VENDOR_TO.join(" · ")} · and many others</p>
        </div>
      </section>

      <div className="divider" />

      {/* Brand integrity */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div data-reveal-group className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/images/quality-check.jpg" alt="Quality checks at CBS" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="relative mt-12 aspect-[4/5] overflow-hidden">
            <Image src="/images/sensory-tasting.jpg" alt="Sensory evaluation in the CBS laboratory" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
        <div>
          <div data-reveal>
            <h2 className="heading">why brand integrity matters</h2>
            <span className="rule" />
          </div>
          <ol data-reveal-group className="mt-10 space-y-4">
            {INTEGRITY.map((x, i) => (
              <li key={x.title} className="box flex gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-green font-black text-green">{i + 1}</span>
                <span>
                  <span className="block font-black lowercase text-white">{x.title}</span>
                  <span className="text-muted">{x.text}</span>
                </span>
              </li>
            ))}
          </ol>
          <p data-reveal className="mt-6 leading-relaxed text-muted">
            Our quality systems include statistical quality control and Good Manufacturing Practice (GMP), giving our customers comfort in how
            their products are made and a solid foundation for sustainable growth.
          </p>
        </div>
      </section>

      {/* Health & safety */}
      <section className="border-y border-line bg-black">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_1.3fr] lg:px-10 lg:py-24">
          <div data-reveal="zoom" className="box p-10 text-center">
            <p className="text-7xl font-black text-green">
              <CountUp to={2000} suffix="+" />
            </p>
            <p className="mt-3 text-lg lowercase text-white">days without an injury on duty (IOD)</p>
          </div>
          <div>
            <div data-reveal>
              <h2 className="heading">safe people, safe products</h2>
              <span className="rule" />
            </div>
            <ul data-reveal-group className="mt-10 space-y-3">
              {SAFETY.map((s) => (
                <li key={s} className="flex gap-3 text-lg text-white/85">
                  <span className="mt-1 text-green">→</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CallToAction title="need certified blending you can trust?" />
    </>
  );
}
