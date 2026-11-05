import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { SITE, mailLink, telLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Collaborative Blending Solutions — ${SITE.email}, ${SITE.phone.display}, ${SITE.address.line1}, Midrand.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="contact us"
        title="let's talk about your next blend"
        intro="Tell us about your product and our team will get back to you. Every enquiry is treated in confidence."
        image="/images/warehouse.jpg"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.4fr_1fr] lg:px-10 lg:py-24">
        <div data-reveal className="box p-7 sm:p-10">
          <h2 className="text-3xl font-black text-white">send us an enquiry</h2>
          <span className="rule" />
          <p className="mt-5 text-muted">Fields marked * are required.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div data-reveal-group className="space-y-4">
          <a href={mailLink()} className="box block p-7">
            <p className="eyebrow">email</p>
            <p className="mt-2 break-all text-xl font-black text-white">{SITE.email}</p>
          </a>
          <a href={telLink} className="box block p-7">
            <p className="eyebrow">phone</p>
            <p className="mt-2 text-xl font-black text-white">{SITE.phone.display}</p>
          </a>
          <div className="box p-7">
            <p className="eyebrow">facility</p>
            <p className="mt-2 text-lg font-black leading-snug text-white">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <div data-reveal className="overflow-hidden border border-line">
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
