import type { SVGProps } from "react";

/** Drawn tick, so it never depends on the visitor's fonts having a ✓ glyph. */
export default function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
