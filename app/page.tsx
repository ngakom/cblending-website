import Image from "next/image";
import Link from "next/link";
import BusinessSchema from "@/components/BusinessSchema";
import CallToAction from "@/components/CallToAction";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import { delay } from "@/lib/motion";
import Check from "@/components/Check";
import { keepCase } from "@/lib/keepCase";
import { CERTIFICATIONS, PARTNER, PARTNERS, PROCESS, SERVICES, SPECIALTIES, STATS } from "@/lib/site";

const COMMITMENTS = [
  { title: "Customer alignment", text: "We place immense value on our customer relationships and take an uncompromising approach to confidentiality and integrity." },
  { title: "Protecting client brands", text: "Ultimately it is in our best interest to protect our clients' brands as if they are our own." },
  { title: "Trust & integrity", text: "Confidentiality is foundational to every partnership we build — from formulation to finished blend." },
];

export default function Home() {
  return (
    <>
      <BusinessSchema />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pale via-pale/50 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:py-20">
          <div className="fade-up">
            <p className="eyebrow">Proudly South African · Level 2 <span className="whitespace-nowrap">B-BBEE</span></p>
            <h1 className="mt-4 text-4xl font-black leading-[1.1] text-teal sm:text-5xl lg:text-[3.4rem]">
              Precision dry blending for leading food &amp; beverage brands
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              Collaborative Blending Solutions is a contract manufacturer of dry blended food solutions — from fortification mixes and hot
              chocolates to seasonings and custom formulations — made in our <span className="normal-case">FSSC 22000</span> certified facility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Partner with us
              </Link>
              <Link href="/services" className="btn-secondary">
                Our services
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {["FSSC 22000", "Halaal (SANHA · NIHT)", "Kosher", "Level 2 B-BBEE"].map((c) => (
                <li key={c} className="rounded-full border border-teal/25 bg-white px-3.5 py-1.5 text-xs font-bold text-teal">
                  <Check className="inline -mt-0.5" /> {keepCase(c)}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" data-reveal="zoom">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_rgba(0,79,87,0.25)]">
              <Image
                src="/images/blending-operator.jpg"
                alt="A CBS operator loading ingredients into a blender"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="ken-burns object-cover"
              />
            </div>
            <div className="float absolute -bottom-8 -left-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-left-10">
              <div className="relative aspect-[4/3]">
                <Image src="/images/laboratory.jpg" alt="Quality testing in the CBS laboratory" fill sizes="12rem" className="object-cover" />
              </div>
            </div>
            <div style={{ animationDelay: "1.5s" }} className="float card-white absolute left-4 top-4 max-w-[15rem] px-5 py-4 sm:left-auto sm:right-6 sm:-top-5">
              <p className="text-2xl font-extrabold text-teal">Since 2018</p>
              <p className="text-xs font-bold text-slate">Precision dry blending in Midrand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 text-white lg:grid-cols-4 lg:px-10">
          {STATS.map((s, i) => (
            <div key={s.label} data-reveal style={delay(i)}>
              <p className="text-4xl font-extrabold">{s.count ? <CountUp to={s.count} suffix={s.suffix} /> : s.value}</p>
              <p className="mt-1 text-sm leading-snug text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]" data-reveal="left">
          <Image src="/images/team-warehouse.jpg" alt="The CBS team in the warehouse" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <div data-reveal="right">
          <p className="eyebrow">Who we are</p>
          <h2 className="heading mt-3">Reducing complexity, risk and cost in the food value chain</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            CBS was born out of a need to reduce complexity, risk and cost in manufacturing for one of our key customers. Together we built
            a contract blending manufacturer with shareholders directly involved in the day-to-day running of the business.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            Today we blend sweet and savoury products for leading FMCG and <span className="normal-case">Quick Service Restaurant</span> brands, as part of the Südzucker Group
            through our partnership with{" "}
            <a href={PARTNER.url} target="_blank" rel="noopener noreferrer" className="font-bold text-teal underline underline-offset-2 hover:text-green">
              CoSo
            </a>{" "}
            / PortionPack Group.
          </p>
          <Link href="/about" className="btn-secondary mt-8">
            More about CBS
          </Link>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-pale/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="max-w-2xl" data-reveal>
            <p className="eyebrow">Our specialties</p>
            <h2 className="heading mt-3">What we blend</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALTIES.map((s, i) => (
              <li key={s} data-reveal style={delay(i, 60)} className="card-white lift flex items-center gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-teal bg-pale text-sm font-extrabold text-teal">
                  {i + 1}
                </span>
                <span className="font-bold leading-snug text-ink">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl" data-reveal>
            <p className="eyebrow">Our services</p>
            <h2 className="heading mt-3">From concept to finished, packed product</h2>
          </div>
          <Link href="/services" className="btn-secondary self-start md:self-auto">
            All services
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Link key={s.id} href={`/services#${s.id}`} data-reveal style={delay(i)} className="card-white lift group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={s.image!} alt="" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold leading-snug text-teal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-teal-deep py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div data-reveal>
            <p className="text-xs font-extrabold lowercase tracking-[0.2em] text-pale">How we work</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">A complete B2B solution for our customers</h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.title} data-reveal style={delay(i, 120)} className="relative rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:bg-white/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-pale text-lg font-extrabold text-pale">{i + 1}</span>
                <h3 className="mt-5 text-xl font-extrabold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-white/75">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 text-center lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10" data-reveal>
          <p className="eyebrow">Our partners</p>
          <h2 className="heading mt-3">Trusted blending partner to leading FMCG and <span className="normal-case">QSR</span> brands</h2>
        </div>
        <div className="mt-12 space-y-4" data-reveal>
          <Marquee items={PARTNERS.slice(0, 5)} itemClassName="card flex h-20 min-w-48 items-center justify-center px-8 text-xl font-extrabold text-teal" />
          <Marquee items={PARTNERS.slice(5)} reverse itemClassName="card flex h-20 min-w-48 items-center justify-center px-8 text-xl font-extrabold text-teal" />
        </div>
      </section>

      {/* Quality */}
      <section className="bg-pale/60">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_1.2fr] lg:px-10 lg:py-24">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-[2rem]" data-reveal="left">
            <Image src="/images/ribbon-agitator-tank.jpg" alt="A stainless steel tank with a ribbon agitator" fill sizes="24rem" className="object-cover" />
          </div>
          <div>
            <div data-reveal>
              <p className="eyebrow">Quality &amp; food safety</p>
              <h2 className="heading mt-3">Living a food safety culture is our highest priority</h2>
            </div>
            <ul className="mt-8 space-y-4">
              {CERTIFICATIONS.map((c, i) => (
                <li key={c.name} data-reveal="right" style={delay(i, 80)} className="card-white flex gap-4 p-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green text-sm font-extrabold text-white"><Check /></span>
                  <span>
                    <span className="block font-extrabold text-teal">{keepCase(c.name)}</span>
                    <span className="text-slate">{keepCase(c.detail)}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/quality" className="btn-secondary mt-8">
              Quality &amp; safety
            </Link>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">Our commitment</p>
          <h2 className="heading mt-3">Confidentiality you can rely on</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {COMMITMENTS.map((c, i) => (
            <div key={c.title} data-reveal style={delay(i, 120)} className="card lift p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-teal bg-white font-extrabold text-teal">{i + 1}</span>
              <h3 className="mt-5 text-xl font-extrabold text-teal">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/80">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
