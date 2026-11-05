import Link from "next/link";
import { SITE, mailLink } from "@/lib/site";

export default function CallToAction({
  title = "let's blend something great together",
  text = "Tell us about your product, volumes and timelines — our team will come back to you with how we can help.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-t border-line">
      <div data-reveal className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.3fr_1fr] lg:px-10 lg:py-24">
        <div>
          <h2 className="heading lowercase">{title}</h2>
          <span className="rule" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{text}</p>
        </div>
        <div className="box p-7">
          <p className="text-sm font-extrabold lowercase text-fg">start a conversation</p>
          <a href={mailLink("Enquiry from the website")} className="mt-3 block break-all text-xl font-extrabold text-accent hover:underline">
            {SITE.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary lowercase">
              send an enquiry
            </Link>
            <a href={`tel:+${SITE.phone.intl}`} className="btn-outline lowercase">
              call {SITE.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
