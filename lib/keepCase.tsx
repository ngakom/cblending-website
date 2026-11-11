import { Fragment, type ReactNode } from "react";

// The site is styled all-lowercase (client request), except these names, which keep their capitals.
const KEEP = /(FSSC 22000|Halaal|Kosher|Quick Service Restaurants?|QSR)/;

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
