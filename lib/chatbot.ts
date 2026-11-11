import { CERTIFIED_VENDOR_TO, CERTIFICATIONS, JOURNEY, MODELS, PARTNERS, SERVICES, SITE, SKILLS, SPECIALTIES, VALUES } from "./site";

const contact = `email ${SITE.email}, call ${SITE.phone.display}, or use the enquiry form on the Contact page`;

export const SYSTEM_PROMPT = `You are the website assistant for ${SITE.legalName} (CBS), a proudly South African, Level 2 B-BBEE contract manufacturer of dry blended food solutions, based at ${SITE.address.lines.join(", ")} (an ${SITE.facility}).

About: Founded in ${SITE.founded}, born from a partnership to reduce complexity, risk and cost in the value chain. CoSo is a shareholder and mentor; through CoSo, a company of PortionPack Group, CBS is part of the Südzucker Group.

Journey:
${JOURNEY.map((j) => `- ${j.year}: ${j.title} — ${j.text}`).join("\n")}

Certifications and accreditation:
${CERTIFICATIONS.map((c) => `- ${c.name}: ${c.detail}`).join("\n")}
Certified vendor to: ${CERTIFIED_VENDOR_TO.join(", ")} and many others.
Trusted blending partner to: ${PARTNERS.join(", ")}.

Specialties: ${SPECIALTIES.join(", ")}.

Services:
${SERVICES.map((s) => `- ${s.title}: ${s.summary} ${s.points.join(" ")}`).join("\n")}
Supply models:
${MODELS.map((m) => `- ${m.title}: ${m.points.join(" ")}`).join("\n")}
Specialist skills: ${SKILLS.join("; ")}.
Values: ${VALUES.map((v) => v.title).join(", ")}.
Confidentiality: CBS takes an uncompromising approach to confidentiality and protects clients' brands as if they were its own.

How to start a project: ${contact}. Useful details to share: product type, estimated volumes, packaging format, timelines, and certification needs (e.g. Halaal or Kosher).

Rules:
- Reply in a professional, clear and concise tone (1-3 short paragraphs, plain text, no markdown headings or tables, no emojis).
- Use only the facts above. Never invent prices, lead times, capacities, minimum order quantities, client names or certifications. For pricing, quotes, capacity or anything not listed, say the team will advise and give the contact details.
- Do not disclose confidential information about specific client formulations or projects.
- Stay on CBS topics; politely decline unrelated requests.`;

const FAQ: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["price", "cost", "quote", "how much", "moq", "minimum", "lead time", "capacity"],
    answer: `Pricing, capacity and lead times depend on your product, volumes and packaging. Please share those details and our team will prepare a proposal — ${contact}.`,
  },
  {
    keywords: ["fssc", "certif", "halaal", "halal", "kosher", "audit", "bbbee", "b-bbee", "bee"],
    answer: `CBS is FSSC 22000 certified, Halaal accredited (SANHA and NIHT) and Kosher accredited. We are a Level 2 B-BBEE contributor.`,
  },
  {
    keywords: ["blend", "make", "manufactur", "product", "special", "seasoning", "chocolate", "drink", "sweetener", "fortif"],
    answer: `We specialise in precision dry blending: ${SPECIALTIES.join(", ").toLowerCase()}.`,
  },
  {
    keywords: ["service", "consignment", "sourc", "pack", "logistic", "distribut", "npd", "develop", "lab", "sensory"],
    answer: `Our services include ingredient and raw material blending, an onsite sensory laboratory, project management and NPD from concept to packed product, and logistics and distribution. We work on a consignment model (you supply packaging and raw materials) or a fully sourced model (we plan and manage materials against your confirmed orders).`,
  },
  {
    keywords: ["client", "customer", "partner", "who do you", "brand"],
    answer: `CBS is a trusted blending partner to leading FMCG and QSR brands, including ${PARTNERS.slice(0, 6).join(", ")} and more.`,
  },
  {
    keywords: ["where", "address", "location", "located", "visit"],
    answer: `We are at ${SITE.address.lines.join(", ")}. There's a map on our Contact page.`,
  },
  {
    keywords: ["start", "project", "contact", "email", "phone", "call", "enquir", "reach"],
    answer: `We'd be glad to discuss your project — ${contact}. Sharing your product type, volumes, packaging format and timelines helps us respond faster.`,
  },
  {
    keywords: ["about", "history", "founded", "owned", "coso", "who are"],
    answer: `CBS was founded in ${SITE.founded} in Midrand, Gauteng. We work in partnership with CoSo, a company of PortionPack Group.`,
  },
];

/** Keyword answers used when the AI service isn't configured. */
export function faqReply(question: string): string {
  const q = question.toLowerCase();
  const match = FAQ.find((item) => item.keywords.some((k) => q.includes(k)));
  return match?.answer ?? `Thank you for your message. I can help with our services, certifications and how to start a project. For anything else, ${contact}.`;
}
