"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Guidelines: thin teal bar across the top of every page.
    <header
      className={`sticky top-0 z-40 border-t-[6px] border-teal border-b transition-colors duration-300 ${
        scrolled || open ? "border-b-line bg-night/95 backdrop-blur-md" : "border-b-transparent bg-night"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-10">
        {/* Guidelines: on dark backgrounds the logo sits on a white panel. */}
        <Link href="/" aria-label={`${SITE.name} home`} className="shrink-0 bg-white px-2.5 py-1.5">
          <Image src="/images/logo.png" alt={SITE.name} width={482} height={442} priority className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative py-1 text-[15px] font-bold lowercase transition-colors hover:text-white ${
                pathname === item.href ? "text-white" : "text-muted"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 bg-green transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          ))}
          <Link href="/contact" className="btn-outline !py-2 lowercase">
            partner with us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="p-2 text-white lg:hidden"
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
              className={`block border-b border-line py-3.5 text-lg font-bold lowercase ${pathname === item.href ? "text-green" : "text-white"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-5 w-full lowercase">
            partner with us
          </Link>
        </nav>
      )}
    </header>
  );
}
