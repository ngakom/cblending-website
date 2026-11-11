import { SITE } from "@/lib/site";

/** Google-readable company details (name, address, contact) for search results. */
export default function BusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo-cbs.png`,
    email: SITE.email,
    telephone: `+${SITE.phone.intl}`,
    foundingDate: String(SITE.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.lines.slice(0, 3).join(", "),
      addressLocality: "Midrand",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
