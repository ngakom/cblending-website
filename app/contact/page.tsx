import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { SITE, mailLink, telLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Collaborative Blending Solutions — ${SITE.email}, ${SITE.phone.display}, ${SITE.address.lines.join(", ")}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about your next blend"
        intro="Tell us about your product and our team will get back to you. Every enquiry is treated in confidence."
        image="/images/warehouse.jpg"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.4fr_1fr] lg:px-10 lg:py-24">
        <div data-reveal className="card-white p-7 sm:p-10">
          <h2 className="text-2xl font-extrabold text-teal">Send us an enquiry</h2>
          <p className="mt-2 text-slate">Fields marked * are required.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div data-reveal-group className="space-y-5">
          <a href={mailLink()} className="card block p-7 transition-colors hover:bg-pale/70">
            <p className="eyebrow">Email</p>
            <p className="mt-2 break-all text-xl font-extrabold text-teal">{SITE.email}</p>
          </a>
          <a href={telLink} className="card block p-7 transition-colors hover:bg-pale/70">
            <p className="eyebrow">Phone</p>
            <p className="mt-2 text-xl font-extrabold text-teal">{SITE.phone.display}</p>
          </a>
          <div className="card p-7">
            <p className="eyebrow">Facility</p>
            <p className="mt-2 text-lg font-extrabold leading-snug text-teal">
              {SITE.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-line">
          <iframe
            title={`Map of ${SITE.address.mapQuery}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address.mapQuery)}&output=embed`}
            className="h-[400px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
