import Image from "next/image";
import Link from "next/link";
import BusinessSchema from "@/components/BusinessSchema";
import CallToAction from "@/components/CallToAction";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import { delay } from "@/lib/motion";
import { CERTIFICATIONS, PARTNERS, SPECIALTIES, STATS } from "@/lib/site";

const ICON = {
  blend: "M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3M7 15h10",
  shield: "M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3ZM8.5 12l2.5 2.5 4.5-5",
  partner: "M3 11l4-4 5 3 5-3 4 4M7 7v6l5 4 5-4V7M12 17v4",
};

const BOXES = [
  { icon: ICON.blend, title: "our services", text: "Blending, sensory lab, project management and logistics — from concept to packed product.", href: "/services", cta: "explore services" },
  { icon: ICON.shield, title: "quality & safety", text: "FSSC 22000 certified, Halaal and Kosher accredited, with a food safety culture at our core.", href: "/quality", cta: "our standards" },
  { icon: ICON.partner, title: "partner with us", text: "Share your product, volumes and timelines and we'll propose the right supply model.", href: "/contact", cta: "get in touch" },
];

const STRIP = [
  { src: "/images/laboratory.jpg", alt: "Quality testing in the laboratory" },
  { src: "/images/ribbon-blender.jpg", alt: "A double helix ribbon blender" },
  { src: "/images/blending-operator.jpg", alt: "Loading ingredients into a blender" },
  { src: "/images/inspection.jpg", alt: "A quality inspection on the factory floor" },
  { src: "/images/distribution-truck.jpg", alt: "A distribution truck ready for delivery" },
];

export default function Home() {
  return (
    <>
      <BusinessSchema />

      {/* Hero: full-bleed photo, centred headline (reference: wagamama.com). */}
      <section className="band relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
        <Image src="/images/blending-operator.jpg" alt="" fill priority sizes="100vw" className="ken-burns -z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night/85 via-night/70 to-night/90" />
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center">
          <p className="fade-up eyebrow">proudly south african · level 1 <span className="whitespace-nowrap">b-bbee</span></p>
          <h1 className="fade-up mt-5 text-5xl font-black leading-[1.02] text-fg sm:text-7xl" style={{ animationDelay: "120ms" }}>
            precision blending for the brands you love
          </h1>
          <p className="fade-up mt-7 max-w-2xl text-lg leading-relaxed text-fg/85 sm:text-xl" style={{ animationDelay: "260ms" }}>
            Contract manufacturing of dry blended food solutions — fortification mixes, hot chocolates, powdered drinks, seasonings and
            custom formulations — in our FSSC 22000 certified facility.
          </p>
          <div className="fade-up mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: "380ms" }}>
            <Link href="/contact" className="btn-primary">
              partner with us
            </Link>
            <Link href="/services" className="btn-outline">
              our services
            </Link>
          </div>
        </div>
        <a href="#discover" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fg/70 hover:text-fg">
          <svg className="float" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* Three outlined boxes */}
      <section id="discover" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-10">
        <div data-reveal-group className="grid gap-6 md:grid-cols-3">
          {BOXES.map((b) => (
            <Link key={b.title} href={b.href} className="box lift group flex flex-col items-center px-8 py-12 text-center">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-fg transition-colors group-hover:text-accent">
                <path d={b.icon} />
              </svg>
              <h2 className="mt-6 text-3xl font-black text-fg">{b.title}</h2>
              <span className="rule !mx-auto" />
              <p className="mt-5 flex-1 leading-relaxed text-muted">{b.text}</p>
              <span className="btn-primary mt-8">{b.cta}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Story split */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div data-reveal>
          <h2 className="heading">south africa&apos;s first black-owned contract blender</h2>
          <span className="rule" />
          <p className="mt-7 text-lg leading-relaxed text-muted">
            CBS was born out of a need to reduce complexity, risk and cost in the value chain for one of our key customers. Today our
            shareholders are directly involved in the day-to-day running of the business — and we blend sweet and savoury products for
            leading FMCG and Quick Service Restaurant brands, as part of the Südzucker Group through CoSo / PortionPack Group.
          </p>
          <Link href="/about" className="group mt-8 inline-flex items-center gap-2 font-extrabold text-fg">
            learn more about cbs
            <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div data-reveal="right" className="relative aspect-[4/3] overflow-hidden">
          <Image src="/images/team-warehouse.jpg" alt="The CBS team in the warehouse" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
        </div>
      </section>

      <div className="divider" />

      {/* Staggered photo strip */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div data-reveal-group className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {STRIP.map((p, i) => (
            <div key={p.src} className={`relative aspect-[9/16] overflow-hidden ${i % 2 ? "lg:mt-0" : "lg:mt-14"} ${i === 4 ? "hidden sm:block" : ""}`}>
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 18vw, 45vw" className="object-cover transition-transform duration-700 hover:scale-110" />
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} data-reveal style={delay(i)} className="box p-7">
              <p className="text-4xl font-black text-accent sm:text-5xl">{s.count ? <CountUp to={s.count} suffix={s.suffix} /> : s.value}</p>
              <p className="mt-3 text-sm leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Specialties */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.4fr] lg:px-10 lg:py-24">
        <div data-reveal>
          <h2 className="heading">what we blend</h2>
          <span className="rule" />
          <p className="mt-7 text-lg leading-relaxed text-muted">Precision dry blending solutions for leading food and beverage brands.</p>
          <Link href="/services" className="btn-outline mt-8">
            all services
          </Link>
        </div>
        <ul data-reveal-group className="grid sm:grid-cols-2 sm:gap-x-8">
          {SPECIALTIES.map((s, i) => (
            <li key={s} className="group flex items-baseline gap-4 border-b border-line py-4">
              <span className="text-sm font-extrabold text-accent">0{i + 1}</span>
              <span className="text-2xl font-black lowercase text-fg transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Partners */}
      <section className="border-y border-line band py-16">
        <p data-reveal className="text-center text-sm font-extrabold lowercase text-muted">
          trusted blending partner to leading fmcg and qsr brands
        </p>
        <div data-reveal className="mt-8">
          <Marquee
            items={PARTNERS}
            itemClassName="flex items-center gap-4 pr-4 text-3xl font-black text-fg/45 transition-colors hover:text-fg after:ml-4 after:h-2 after:w-2 after:rounded-full after:bg-accent after:content-['']"
          />
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
        <div data-reveal className="max-w-2xl">
          <h2 className="heading">living a food safety culture</h2>
          <span className="rule" />
        </div>
        <div data-reveal-group className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CERTIFICATIONS.map((c) => (
            <div key={c.name} className="box p-6">
              <p className="text-xl font-black text-fg">{c.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.detail}</p>
            </div>
          ))}
        </div>
        <Link href="/quality" className="group mt-10 inline-flex items-center gap-2 font-extrabold text-fg">
          quality &amp; safety at cbs
          <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </section>

      <CallToAction />
    </>
  );
}
