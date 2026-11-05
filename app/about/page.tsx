import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import { ADVANTAGES, JOURNEY, TEAM, VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "South Africa's first Black-owned contract blending manufacturer — our story, values, journey and team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="about cbs"
        title="sustainable transformation in food manufacturing"
        intro="A Level 1 B-BBEE business combining lower cost and risk for our customers with real, shareholder-led economic transformation."
        image="/images/team-warehouse.jpg"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.2fr_1fr] lg:px-10 lg:py-24">
        <div data-reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <h2 className="heading">born from partnership</h2>
          <span className="rule" />
          <p className="pt-2">
            CBS is a Level 1 Black Economic Empowered business that was born out of a need to reduce complexity, risk and cost in the value
            chain of manufacturing certain products for one of our key customers. Together we built a business plan that resulted in the
            first Black-owned contract blending manufacturer in South Africa — one that truly represents sustainable transformation, with
            its shareholders directly involved in the day-to-day running of the business.
          </p>
          <p>
            CBS was selected by the AVI board as the winner of a joint Corporate Social Investment project, which provided start-up capital.
            CBS is 51% owned by Black shareholders employed by CoSo, with CoSo as a minority shareholder assisting as mentor — and through
            our partnership with CoSo / PortionPack Group, we are a proud part of the Südzucker Group.
          </p>
          <p>
            Our long-term partnerships with blue-chip customers have enabled us to develop our employees into highly qualified
            professionals in quality and food safety, supply chain, engineering, finance and project management.
          </p>
        </div>
        <div className="space-y-5">
          <div data-reveal="right" className="relative aspect-[3/2] overflow-hidden">
            <Image src="/images/team.jpg" alt="The CBS team" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div data-reveal className="box p-7">
            <p className="text-xl font-black text-fg">our goal</p>
            <p className="mt-2 leading-relaxed text-muted">
              To deliver world-class service to our customers while empowering our employees and the communities around us.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Journey */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <div data-reveal>
          <h2 className="heading">our journey</h2>
          <span className="rule" />
        </div>
        <ol data-reveal-group className="mt-12 grid gap-4 md:grid-cols-5">
          {JOURNEY.map((j) => (
            <li key={j.year} className="box lift p-6">
              <p className="text-4xl font-black text-accent">{j.year}</p>
              <h3 className="mt-3 text-lg font-black text-fg">{j.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{j.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="divider" />

      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <div data-reveal className="max-w-3xl">
          <h2 className="heading">our values</h2>
          <span className="rule" />
          <p className="mt-6 text-lg text-muted">Aligned with the principles of the Südzucker Group.</p>
        </div>
        <div data-reveal-group className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="box lift p-7">
              <h3 className="text-2xl font-black lowercase text-fg">{v.title}</h3>
              <span className="rule !mt-4 !w-10" />
              <p className="mt-4 leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="border-y border-line band py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div data-reveal>
            <h2 className="heading">why cbs</h2>
            <span className="rule" />
          </div>
          <div data-reveal-group className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="box p-7">
                <h3 className="text-xl font-black lowercase text-fg">{a.title}</h3>
                <ul className="mt-4 space-y-2.5 text-muted">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
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
        <div data-reveal>
          <h2 className="heading">meet the team</h2>
          <span className="rule" />
        </div>
        <ul data-reveal-group className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {TEAM.map((t) => (
            <li key={t.name} className="box lift p-6 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center border-2 border-accent text-xl font-black text-accent">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <p className="mt-4 font-extrabold text-fg">{t.name}</p>
              <p className="text-sm text-muted">{t.role}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">Supported by our production operators, QC, cleaning and sanitation teams.</p>
      </section>

      <CallToAction />
    </>
  );
}
