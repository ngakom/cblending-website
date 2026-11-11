import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/nav";
import { PARTNER, SITE, mailLink, telLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          {/* Guidelines: on dark backgrounds the logo sits on a white panel. */}
          <span className="inline-block rounded-2xl bg-white p-4">
            <Image src="/images/logo-cbs.png" alt={SITE.name} width={1040} height={974} className="h-28 w-auto" />
          </span>
          <p className="mt-5 max-w-sm leading-relaxed text-white/80">
            A proudly South African, Level 2 B-BBEE contract manufacturer of dry blended food solutions. <span className="normal-case">FSSC 22000</span> certified, <span className="normal-case">Halaal</span>{" "}
            and <span className="normal-case">Kosher</span> accredited.
          </p>
          <a
            href={PARTNER.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex flex-col rounded-xl border border-white/25 px-4 py-3 transition-colors hover:border-white/60 hover:bg-white/5"
          >
            <span className="text-xs font-bold tracking-[0.15em] text-white/60">in partnership with</span>
            <span className="mt-0.5 inline-flex items-center gap-1.5 font-extrabold text-white">
              {PARTNER.name} · {PARTNER.fullName}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        <div>
          <p className="text-sm font-extrabold lowercase tracking-[0.18em] text-white/60">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-semibold lowercase text-white/90 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="font-semibold lowercase text-white/90 transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-extrabold lowercase tracking-[0.18em] text-white/60">Contact</p>
          <ul className="mt-4 space-y-2.5 text-white/90">
            <li>
              <a href={mailLink()} className="font-semibold hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={telLink} className="font-semibold hover:text-white">
                {SITE.phone.display}
              </a>
            </li>
            <li className="leading-relaxed">
              {SITE.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>

      {/* Guidelines: website footer line on every page. Extra bottom/right padding keeps it clear of the chat button. */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 pt-5 pb-24 text-sm text-white/70 sm:flex-row sm:justify-between sm:pb-5 sm:pr-64 lg:px-10 lg:pr-64">
          <p>
            {SITE.name.toLowerCase()} &nbsp;|&nbsp; www.cblending.co.za
          </p>
          <p>
            © {new Date().getFullYear()} {SITE.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
