import type { Metadata } from "next";
import { PRIVACY_POLICY } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Collaborative Blending Solutions processes and protects personal information under POPIA.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 normal-case lg:py-20">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-3 text-4xl font-extrabold text-teal">Privacy &amp; Cookies Policy</h1>
      <div className="mt-10 space-y-5 leading-relaxed text-ink/85">
        {PRIVACY_POLICY.map((b, i) =>
          b.type === "h" ? (
            <h2 key={i} className="pt-6 text-2xl font-extrabold text-teal">
              {b.text}
            </h2>
          ) : b.type === "p" ? (
            <p key={i}>{b.text}</p>
          ) : (
            <ul key={i} className={b.items.every((x) => x.length < 30) ? "grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3" : "list-disc space-y-1.5 pl-6"}>
              {b.items.map((item) => (
                <li key={item} className={b.items.every((x) => x.length < 30) ? "text-slate" : ""}>
                  {item}
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </article>
  );
}
