import { Fragment, type ReactNode } from "react";
import { CERTIFIED_VENDOR_TO, PARTNERS } from "./site";

// The site is styled all-lowercase (client request), except these terms and customer names, which keep
// their capitals (customers are written the way they write their own names).
const CUSTOMERS = [...new Set([...PARTNERS, ...CERTIFIED_VENDOR_TO])].sort((a, b) => b.length - a.length);
const KEEP = new RegExp(`(FSSC 22000|Halaal|Kosher|Quick Service Restaurants?|QSR|${CUSTOMERS.join("|")})`);

export function keepCase(text: string): ReactNode {
  const parts = text.split(KEEP);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 ? (
      <span key={i} className="normal-case">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
