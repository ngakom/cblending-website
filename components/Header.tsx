"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    // Guidelines: thin teal bar across the top of every page.
    <header className="sticky top-0 z-40 border-t-[6px] border-teal border-b border-b-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 lg:px-10">
        <Link href="/" aria-label={`${SITE.name} home`} className="shrink-0">
          <Image src="/images/logo-cbs.png" alt={SITE.name} width={1040} height={974} priority className={`w-auto transition-all ${pathname === "/" ? "h-20 sm:h-24" : "h-16 sm:h-[4.5rem]"}`} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-bold lowercase transition-colors hover:text-teal ${pathname === item.href ? "text-teal" : "text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2.5">
            Partner with us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-full p-2 text-teal lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        // Any link tap inside the menu closes it.
        <nav className="border-t border-line px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile" onClick={() => setOpen(false)}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block border-b border-line py-3.5 text-lg font-bold lowercase ${pathname === item.href ? "text-teal" : "text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-5 w-full">
            Partner with us
          </Link>
        </nav>
      )}
    </header>
  );
}
