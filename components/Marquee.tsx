/**
 * Endlessly scrolling row. Short lists are repeated so half the track is always wider than the screen,
 * then the track is doubled so the loop is seamless. Pauses on hover.
 */
export default function Marquee({ items, reverse = false, itemClassName }: { items: string[]; reverse?: boolean; itemClassName: string }) {
  const half = Array.from({ length: Math.ceil(10 / items.length) }, () => items).flat();
  return (
    <div className="marquee group relative overflow-hidden">
      <ul className={`marquee-track flex w-max gap-4 group-hover:[animation-play-state:paused] ${reverse ? "marquee-reverse" : ""}`}>
        {[...half, ...half].map((item, i) => (
          <li key={i} aria-hidden={i >= items.length} className={itemClassName}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
