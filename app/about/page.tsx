import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import { ADVANTAGES, JOURNEY, TEAM, VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Collaborative Blending Solutions, a Level 2 B-BBEE contract blending manufacturer — our story, values, journey and team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CBS"
        title="Sustainable transformation in the food manufacturing value chain"
        intro="A Level 2 B-BBEE business combining lower cost and risk for our customers with real, shareholder-led economic transformation."
        image="/images/team-warehouse.jpg"
      />

      {/* Who we are */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.2fr_1fr] lg:px-10 lg:py-24">
        <div className="space-y-5 text-lg leading-relaxed text-slate">
          <p data-reveal className="eyebrow">Who we are</p>
          <h2 data-reveal className="heading">Born from partnership</h2>
          <p>
            CBS is a Level 2 B-BBEE business that was born out of a need to reduce complexity, risk and cost in the value
            chain of manufacturing certain products for one of our key customers. Together we built a business plan that resulted in a
            contract blending manufacturer that truly represents sustainable transformation, with
            its shareholders directly involved in the day-to-day running of the business.
          </p>
          <p>
            CBS was selected by the AVI board as the winner of a joint Corporate Social Investment project, which provided start-up capital.
            CoSo is a shareholder assisting as mentor and, through
            our partnership with CoSo / PortionPack Group, we are a proud part of the Südzucker Group.
          </p>
          <p>
            Our long-term partnerships with blue-chip customers have enabled us to develop our employees into highly qualified
            professionals in quality and food safety, supply chain, engineering, finance and project management. Our goal is to empower our
            people to reach their full potential while building a sustainable enterprise focused on food products, skills development and
            job creation.
          </p>
        </div>
        <div className="space-y-5">
          <div data-reveal="zoom" className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
            <Image src="/images/team.jpg" alt="The CBS team" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="card lift p-7">
            <p className="text-xl font-extrabold text-teal">Our goal</p>
            <p className="mt-2 leading-relaxed text-ink/80">
              To deliver world-class service to our customers while empowering our employees and the communities around us.
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-pale/60 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-10">
          <p data-reveal className="eyebrow">Our journey</p>
          <h2 data-reveal className="heading mt-3">From inception to trusted partner</h2>
          <ol data-reveal-group className="relative mt-12 space-y-8 border-l-2 border-teal/25 pl-8">
            {JOURNEY.map((j) => (
              <li key={j.year} className="relative">
                <span className="absolute -left-[2.6rem] top-1 h-5 w-5 rounded-full border-4 border-pale bg-teal" />
                <p className="text-sm font-extrabold text-green">{j.year}</p>
                <h3 className="text-xl font-extrabold text-teal">{j.title}</h3>
                <p className="mt-1 leading-relaxed text-slate">{j.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <p data-reveal className="eyebrow">Our values</p>
        <h2 data-reveal className="heading mt-3 max-w-3xl">Aligned with the principles of the Südzucker Group</h2>
        <div data-reveal-group className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="card lift p-7">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-teal">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/80">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-teal-deep py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-pale">Why CBS</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Our competitive advantages</h2>
          <div data-reveal-group className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="rounded-2xl border border-white/15 bg-white/5 p-7">
                <h3 className="text-xl font-extrabold">{a.title}</h3>
                <ul className="mt-4 space-y-2.5 text-white/80">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <p data-reveal className="eyebrow">Meet the team</p>
        <h2 data-reveal className="heading mt-3">The people behind every blend</h2>
        <ul data-reveal-group className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {TEAM.map((t) => (
            <li key={t.name} className="card-white lift p-6 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pale text-xl font-extrabold text-teal">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <p className="mt-4 font-extrabold text-ink">{t.name}</p>
              <p className="text-sm text-slate">{t.role}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate">Supported by our production operators, QC, cleaning and sanitation teams.</p>
      </section>

      <CallToAction />
    </>
  );
}
