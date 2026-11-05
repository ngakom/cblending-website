import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/nav";
import { SITE, mailLink, telLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          {/* Guidelines: on dark backgrounds the logo sits on a white panel. */}
          <span className="inline-block bg-white p-3">
            <Image src="/images/logo.png" alt={SITE.name} width={482} height={442} className="h-16 w-auto" />
          </span>
          <p className="mt-5 max-w-sm leading-relaxed text-muted">
            A proudly South African, Level 1 B-BBEE contract manufacturer of dry blended food solutions. FSSC 22000 certified, Halaal and
            Kosher accredited.
          </p>
        </div>

        <div>
          <p className="text-sm font-extrabold lowercase text-white">explore</p>
          <ul className="mt-4 space-y-2.5">
            {[...NAV, { label: "Privacy Policy", href: "/privacy-policy" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="lowercase text-muted transition-colors hover:text-green">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-extrabold lowercase text-white">get in touch</p>
          <ul className="mt-4 space-y-2.5 text-muted">
            <li>
              <a href={mailLink()} className="transition-colors hover:text-green">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={telLink} className="transition-colors hover:text-green">
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

      {/* Guidelines: website footer line on every page. */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-muted sm:flex-row sm:justify-between lg:px-10">
          <p>{SITE.name.toLowerCase()} &nbsp;|&nbsp; www.cblending.co.za</p>
          <p>
            © {new Date().getFullYear()} {SITE.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
