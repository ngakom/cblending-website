import type { CSSProperties } from "react";

/** Stagger helper for [data-reveal] items: style={delay(i)} on the i-th item. */
export const delay = (i: number, step = 90) => ({ "--d": `${i * step}ms` }) as CSSProperties;
