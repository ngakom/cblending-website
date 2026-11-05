import Link from "next/link";
import { SITE, telLink } from "@/lib/site";

export default function CallToAction({
  title = "Let's blend your next product together",
  text = "Tell us about your product, volumes and timelines — our team will come back to you with how we can help.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 py-16 lg:px-10 lg:py-20">
      <div data-reveal="zoom" className="mx-auto flex max-w-6xl flex-col items-start gap-8 rounded-3xl bg-gradient-to-br from-teal to-teal-deep px-8 py-12 text-white sm:px-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg leading-relaxed text-white/85">{text}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link href="/contact" className="btn-light">
            Send an enquiry
          </Link>
          <a href={telLink} className="inline-flex items-center rounded-full border-2 border-white/60 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
            Call {SITE.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
