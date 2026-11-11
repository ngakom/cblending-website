// Single source of truth for CBS facts. Sources: the CBS Company Overview (31 July 2026),
// the corporate identity guidelines and the previous website. Edit here when the client sends updates.

export const SITE = {
  name: "Collaborative Blending Solutions",
  shortName: "CBS",
  legalName: "Collaborative Blending Solutions (Pty) Ltd",
  url: "https://www.cblending.co.za",
  tagline: "Precision dry blending for leading food and beverage brands",
  email: "enquiries@cblending.co.za",
  phone: { display: "010 021 5554", intl: "27100215554" },
  address: {
    // Layout confirmed by the client (2026-11-11): one item per line.
    lines: ["399 George Street", "Unit 15", "Mifa Industrial Park", "Midrand"],
    mapQuery: "MIFA Industrial Park, 399 George Street, Randjespark, Midrand",
  },
  facility: "840 m² FSSC 22000 certified facility",
  founded: 2018,
};

// Partner company (requested by KG): linked from the footer badge and the "partnership with CoSo" text.
export const PARTNER = { name: "CoSo", group: "PortionPack Group", url: "https://coso.co.za" };

export const telLink = `tel:+${SITE.phone.intl}`;
export const mailLink = (subject?: string) => `mailto:${SITE.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const CERTIFICATIONS = [
  { name: "FSSC 22000", detail: "Certified since 2019 — world-class food safety systems." },
  { name: "Halaal", detail: "Accredited by SANHA and the National Independent Halaal Trust (NIHT)." },
  { name: "Kosher", detail: "Kosher accredited." },
  { name: "Level 2 B-BBEE", detail: "A Level 2 B-BBEE contributor." },
];

// `count` makes the number count up on screen; the rest show `value` as is.
export const STATS: { value: string; label: string; count?: number; suffix?: string }[] = [
  { value: "2018", label: "Founded in Midrand, Gauteng" },
  { value: "Level 2", label: "B-BBEE contributor" },
  { value: "4", count: 4, label: "Industrial double helix ribbon blenders" },
  { value: "2,000+", count: 2000, suffix: "+", label: "Days without an injury on duty" },
];

export const SPECIALTIES = [
  "Fortification Mixes",
  "Hot Chocolates",
  "Powdered Soft Drinks",
  "Seasonings",
  "Sweeteners",
  "Packs for the Beverage Industry",
  "Sweet & Savoury Blends",
  "Custom Formulations",
  "Downpacking",
];

export const PARTNERS = ["Nestlé", "Kellogg", "Tiger Brands", "Clover", "Cubbs", "Promasidor", "CRB", "Oceana", "Aldor", "Lactalis"];

export const CERTIFIED_VENDOR_TO = ["Nestlé", "Kellogg", "Tiger Brands", "Ciro", "Entyce", "Aldor"];

export type Service = { id: string; title: string; summary: string; points: string[]; image?: string };

export const SERVICES: Service[] = [
  {
    id: "blending",
    title: "Ingredient & Raw Material Blending",
    summary: "Accurate, consistently homogenous dry food blends made to each product's specification.",
    points: [
      "Four full-scale industrial double helix ribbon blenders.",
      "Counter-directional flow: the inner ribbon moves material to the ends while the outer ribbon moves it to the centre discharge.",
      "Gentle, fluid agitation with typical blending times of 10 to 20 minutes.",
      "Strategic partnerships for unique raw material sourcing, with quality and laboratory services.",
    ],
    image: "/images/ribbon-agitator-tank.jpg",
  },
  {
    id: "sensory",
    title: "Sensory Laboratory Services",
    summary: "An onsite sensory laboratory that measures, analyses and interprets how products are perceived.",
    points: [
      "Evaluation of sight, smell, taste, touch and sound characteristics.",
      "Supports product matching, new product development and quality release.",
    ],
    image: "/images/laboratory.jpg",
  },
  {
    id: "project-management",
    title: "Project Management & NPD",
    summary: "We partner with you across the innovation funnel — from ideation to a commercialised, packed product.",
    points: [
      "Management of the entire process from concept to production-ready design.",
      "Innovation sessions with key suppliers to identify optimal packaging.",
      "Assistance with sign-off of responsibility and liability for key packaging decisions.",
    ],
    image: "/images/inspection.jpg",
  },
  {
    id: "logistics",
    title: "Logistics & Distribution",
    summary: "Finished products delivered to CoSo, a company of PortionPack Group, or your designated distribution centre.",
    points: [
      "CBS aligns with your infrastructure and contracts an outsourced distribution partner.",
      "Products are palletised and shrink-wrapped for dispatch.",
    ],
    image: "/images/distribution-truck.jpg",
  },
];

export const MODELS = [
  {
    title: "Consignment Model",
    points: [
      "Packaging and raw materials are delivered by the customer.",
      "CBS packs into stipulated sizes, palletised, shrink-wrapped and supplied Ex Works.",
    ],
  },
  {
    title: "Fully Sourced Model",
    points: [
      "CBS plans, orders and manages materials based on customer-confirmed orders.",
      "The customer owns the demand numbers; CBS plans based on that input.",
    ],
  },
];

export const PROCESS = [
  { title: "Develop & Blend", text: "CBS develops and blends the product — fortification mixes, seasonings, powdered drinks and more." },
  { title: "Pack & Portion", text: "Packing and portioning in partnership, aligned with the capabilities of CoSo, a company of PortionPack Group." },
  { title: "Logistics", text: "Distribution to the customer or to designated centres of CoSo, a company of PortionPack Group." },
  { title: "Market Readiness", text: "Support for market readiness and customer mobility." },
];

export const SKILLS = [
  "Dedicated facilities for large-volume, long-term projects",
  "Fast turnaround of small-volume, ad-hoc projects",
  "Partnering with clients to drive new product development (NPD)",
  "Blending and NPD expertise in dry food products",
];

export const ADVANTAGES = [
  {
    title: "People",
    points: ["Experienced team with complementing competencies", "Young, dynamic and highly skilled", "Shareholders involved in day-to-day operations"],
  },
  {
    title: "Food Safety & Quality",
    points: ["FSSC 22000 compliant", "Statistical quality control and GMP", "Halaal and Kosher accredited"],
  },
  {
    title: "Location",
    points: ["Midrand, Gauteng — close to suppliers and customers", "Facility aligned to food safety standards", "Layout designed for efficiency and product integrity"],
  },
  {
    title: "Strategy",
    points: ["Outsource partner from NPD concept phase", "Flexibility for promotional items", "Full supply chain solution with brand protection"],
  },
];

export const VALUES = [
  { title: "Appreciation", text: "Recognising the contributions of our people, partners and customers. We value diversity, skills and passion." },
  { title: "Collaboration", text: "Working together internally and with external stakeholders to create better outcomes for everyone." },
  { title: "Responsibility", text: "Acting ethically and sustainably — for our people, our environment and the communities we serve." },
  { title: "Creativity", text: "Encouraging innovation, new ideas and continuous improvement in everything we do." },
];

export const JOURNEY = [
  { year: "2018", title: "Inception", text: "CBS is founded as a contract blending manufacturer, born from a partnership to reduce complexity, risk and cost in the value chain." },
  { year: "2019", title: "FSSC 22000", text: "Achieved FSSC 22000 certification, establishing world-class food safety systems." },
  { year: "2021", title: "New Plant & Growth", text: "Commissioned a new plant for Tiger Brands and expanded into seasoning blending." },
  { year: "2022", title: "Facilities Upgrade", text: "Upgraded ablution facilities to further enhance hygiene and employee welfare standards." },
  { year: "2023", title: "QSR Expansion", text: "Began blending for Quick Service Restaurants, alongside continued work for major FMCG clients." },
];

export const TEAM = [
  { name: "Kgaugelo Sekwaila", role: "Director & Co-Founder" },
  { name: "Dawid Muller", role: "Director" },
  { name: "Corlia Pieterse", role: "Operations Manager" },
  { name: "Aarone Makola", role: "Production Lead" },
  { name: "Khensani Matjebe", role: "QA / HSE Lead" },
  { name: "Kwena Kgowa", role: "Warehouse Lead" },
  { name: "Sydney Sekgogoba", role: "Warehouse Coordinator" },
  { name: "Manoko Monyebodi", role: "Production Coordinator" },
];

export const SAFETY = [
  "External Occupational Health & Safety / SHE consultant",
  "Scientific pest control — monthly documented control plus daily inspections",
  "No jewellery in the factory; hands washed and sanitised on entry",
  "Handrails used at all times — no phones while walking",
];

export const INTEGRITY = [
  { title: "Consumer protection", text: "Safe, consistent products for the people who enjoy them." },
  { title: "Customer brand protection", text: "We protect our clients' brands as if they are our own." },
  { title: "Regulatory compliance", text: "Meeting statutory and regulatory body requirements." },
];
