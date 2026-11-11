import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/nav";
import { SITE, mailLink, telLink } from "@/lib/site";

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
            A proudly South African, Level 2 B-BBEE contract manufacturer of dry blended food solutions. FSSC 22000 certified, Halaal and
            Kosher accredited.
          </p>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/60">Explore</p>
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
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/60">Contact</p>
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
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
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
