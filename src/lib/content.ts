/* ════════════════════════════════════════════════════════════════
   SOROSHA — Content & data layer
   All marketing copy and catalogue data lives here so the UI stays
   declarative and every word is intentional.
   ════════════════════════════════════════════════════════════════ */

export type WatchTheme = {
  /** Case / outer metal */
  caseMetal: string;
  caseMetalDark: string;
  /** Dial backdrop */
  dial: string;
  dialDark: string;
  /** Exposed movement / gears */
  movement: string;
  /** Hands + indices + accents */
  accent: string;
  accentLight: string;
  /** Soft glow behind the piece */
  glow: string;
};

export const THEMES: Record<string, WatchTheme> = {
  silver: {
    caseMetal: "#D7DAE0", caseMetalDark: "#9CA0A8", dial: "#1A1C20", dialDark: "#0C0D0F",
    movement: "#B9BDC6", accent: "#EDEFF3", accentLight: "#FFFFFF", glow: "rgba(201,204,210,0.45)",
  },
  onyx: {
    caseMetal: "#3A3C40", caseMetalDark: "#161718", dial: "#0B0B0C", dialDark: "#050505",
    movement: "#4A4C52", accent: "#B68D40", accentLight: "#D8B570", glow: "rgba(182,141,64,0.4)",
  },
  rose: {
    caseMetal: "#E5B98F", caseMetalDark: "#B27A4E", dial: "#1C1410", dialDark: "#0E0A08",
    movement: "#D9A877", accent: "#F0C9A0", accentLight: "#FBE3CB", glow: "rgba(224,170,124,0.42)",
  },
  titanium: {
    caseMetal: "#A7ACB4", caseMetalDark: "#6E737B", dial: "#15171A", dialDark: "#0A0B0C",
    movement: "#888D96", accent: "#C9CCD2", accentLight: "#EDEFF3", glow: "rgba(138,141,148,0.4)",
  },
};

export type Product = {
  slug: string;
  name: string;
  line: string;
  themeKey: keyof typeof THEMES;
  price: number;
  reference: string;
  tagline: string;
  story: string[];
  description: string;
  caseSize: string;
  badge?: string;
  specs: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "silver-meridian",
    name: "Meridian",
    line: "Silver Collection",
    themeKey: "silver",
    price: 4250,
    reference: "SRH-01·MRD",
    badge: "Signature",
    tagline: "Polished steel. Open heart. Quiet authority.",
    description:
      "A study in restraint, the Meridian frames a fully skeletonised calibre within a mirror-polished 316L case. Light travels through it like water through crystal.",
    caseSize: "41mm",
    story: [
      "The Meridian was conceived as SOROSHA's purest statement — a timepiece stripped of everything but the essential and the exquisite.",
      "Its open architecture invites the eye into the movement itself, where 142 hand-finished components keep a rhythm that has not changed in centuries.",
    ],
    specs: [
      { label: "Movement", value: "SOROSHA Automatic SR-200" },
      { label: "Power Reserve", value: "48 hours" },
      { label: "Case", value: "316L Stainless Steel" },
      { label: "Crystal", value: "Domed Anti-Reflective Sapphire" },
      { label: "Water Resistance", value: "100m / 10 ATM" },
      { label: "Bracelet", value: "Brushed & Polished Steel" },
    ],
  },
  {
    slug: "onyx-eclipse",
    name: "Eclipse",
    line: "Black Collection",
    themeKey: "onyx",
    price: 5600,
    reference: "SRH-02·ECL",
    badge: "Limited",
    tagline: "Midnight engineering, lit by a single thread of gold.",
    description:
      "Cloaked in matte black DLC, the Eclipse hides its strength in shadow. Only the gold of its skeleton dial betrays the precision within.",
    caseSize: "42mm",
    story: [
      "The Eclipse is what happens when darkness is treated as a material rather than an absence.",
      "Every surface is coated in diamond-like carbon, then broken by veins of warm gold that trace the movement like firelight across obsidian.",
    ],
    specs: [
      { label: "Movement", value: "SOROSHA Automatic SR-220" },
      { label: "Power Reserve", value: "60 hours" },
      { label: "Case", value: "316L Steel · Black DLC" },
      { label: "Crystal", value: "Box Sapphire, AR-coated" },
      { label: "Water Resistance", value: "100m / 10 ATM" },
      { label: "Bracelet", value: "DLC Steel & Gold Accents" },
    ],
  },
  {
    slug: "rose-aurelia",
    name: "Aurelia",
    line: "Rose Gold Collection",
    themeKey: "rose",
    price: 7900,
    reference: "SRH-03·AUR",
    tagline: "Warmth made mechanical. A sunrise on the wrist.",
    description:
      "The Aurelia wraps its skeleton calibre in 18k rose gold, a metal chosen for the way it holds light long after the sun has gone.",
    caseSize: "40mm",
    story: [
      "Named for the golden hour, the Aurelia is the most romantic expression in the SOROSHA atelier.",
      "Its rose gold case is cast in-house and finished by hand over three full days, until the metal seems to glow from within.",
    ],
    specs: [
      { label: "Movement", value: "SOROSHA Automatic SR-240" },
      { label: "Power Reserve", value: "72 hours" },
      { label: "Case", value: "18k Rose Gold" },
      { label: "Crystal", value: "Double-Domed Sapphire" },
      { label: "Water Resistance", value: "50m / 5 ATM" },
      { label: "Bracelet", value: "Hand-Stitched Alligator" },
    ],
  },
  {
    slug: "titanium-vanguard",
    name: "Vanguard",
    line: "Titanium Collection",
    themeKey: "titanium",
    price: 6400,
    reference: "SRH-04·VNG",
    badge: "New",
    tagline: "Aerospace-grade. Feather-light. Unbreakable resolve.",
    description:
      "Forged from grade-5 titanium, the Vanguard is the athlete of the collection — barely there on the wrist, yet engineered to outlast its owner.",
    caseSize: "43mm",
    story: [
      "The Vanguard answers a single question: how light can excellence become?",
      "Its sandblasted titanium case weighs less than a coin, yet shrugs off impact, salt and time with the indifference of something built to last generations.",
    ],
    specs: [
      { label: "Movement", value: "SOROSHA Automatic SR-260" },
      { label: "Power Reserve", value: "65 hours" },
      { label: "Case", value: "Grade-5 Titanium" },
      { label: "Crystal", value: "Scratch-Resistant Sapphire" },
      { label: "Water Resistance", value: "200m / 20 ATM" },
      { label: "Bracelet", value: "Integrated Titanium Links" },
    ],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

/* ── "Why SOROSHA" pillars ────────────────────────────────────── */
export type Pillar = { icon: string; title: string; copy: string };
export const PILLARS: Pillar[] = [
  { icon: "movement", title: "Automatic Movement", copy: "A self-winding calibre powered by nothing but the motion of your day. No batteries. No compromise." },
  { icon: "steel", title: "316L Surgical Steel", copy: "The same alloy trusted by surgeons, polished to a mirror and built to resist a lifetime of wear." },
  { icon: "sapphire", title: "Sapphire Crystal", copy: "A glass second only to diamond in hardness, so the view stays flawless decade after decade." },
  { icon: "water", title: "Water Resistant", copy: "Sealed against the elements, ready for the boardroom, the ocean and everything in between." },
  { icon: "skeleton", title: "Skeleton Dial", copy: "An open heart that lays bare the mechanical ballet of gears, springs and escapement." },
  { icon: "bracelet", title: "Premium Bracelet", copy: "Every link is brushed, bevelled and assembled by hand for a fit that disappears on the wrist." },
];

/* ── Collections carousel ─────────────────────────────────────── */
export type Category = { key: keyof typeof THEMES; name: string; tag: string; line: string; blurb: string; from: number };
export const CATEGORIES: Category[] = [
  { key: "silver", name: "Dress Watches", tag: "Refined", line: "Silver Collection", blurb: "For the occasions that ask for nothing less than perfect.", from: 4250 },
  { key: "titanium", name: "Sport Watches", tag: "Resilient", line: "Titanium Collection", blurb: "Engineered to keep pace with a life lived at full speed.", from: 6400 },
  { key: "onyx", name: "Skeleton Collection", tag: "Exposed", line: "Black Collection", blurb: "The movement, unveiled. Mechanical art you can wear.", from: 5600 },
  { key: "rose", name: "Limited Editions", tag: "Rare", line: "Rose Gold Collection", blurb: "Numbered, coveted, and never produced twice.", from: 7900 },
];

/* ── Craftsmanship timeline ───────────────────────────────────── */
export type Stage = { no: string; title: string; copy: string };
export const STAGES: Stage[] = [
  { no: "01", title: "Design", copy: "Every line begins as a sketch in our Ontario atelier, refined across hundreds of iterations." },
  { no: "02", title: "Engineering", copy: "Calibres are modelled to the micron, where a single hair's width decides a watch's soul." },
  { no: "03", title: "Assembly", copy: "A master watchmaker sets 140+ components by hand, one breath at a time." },
  { no: "04", title: "Quality Inspection", copy: "Each timepiece endures fifteen days of testing before it earns the SOROSHA seal." },
  { no: "05", title: "Final Polish", copy: "Surfaces are hand-finished until light bends across them without a single flaw." },
  { no: "06", title: "Packaging", copy: "Your watch is cradled in a hand-built case, sealed and ready for the next chapter." },
];

/* ── Testimonials ─────────────────────────────────────────────── */
export type Review = { name: string; role: string; quote: string; initials: string };
export const REVIEWS: Review[] = [
  { name: "Julian Marchetti", role: "Architect · Milan", initials: "JM", quote: "I have owned watches that cost three times as much. None of them make me pause the way the Eclipse does every single morning." },
  { name: "Naomi Adeyemi", role: "Investor · London", initials: "NA", quote: "The Aurelia is the first object I have ever called an heirloom before I even unboxed it. Faultless." },
  { name: "Thomas Brandt", role: "Pilot · Zürich", initials: "TB", quote: "Feather-light on the wrist, unbreakable in the air. The Vanguard goes everywhere I do and never blinks." },
  { name: "Elena Voss", role: "Gallerist · New York", initials: "EV", quote: "SOROSHA understands that luxury is a feeling, not a logo. This is the most quietly confident watch I own." },
];

/* ── Statistics ───────────────────────────────────────────────── */
export const STATS = [
  { value: "142", label: "Components Per Calibre" },
  { value: "15", label: "Days Of Testing" },
  { value: "72h", label: "Power Reserve" },
  { value: "5yr", label: "International Warranty" },
];

/* ── FAQ ──────────────────────────────────────────────────────── */
export const FAQ = [
  { q: "What does 'automatic movement' mean?", a: "An automatic — or self-winding — movement harvests energy from the natural motion of your wrist, storing it in a mainspring. Worn regularly, a SOROSHA never needs a battery and never stops." },
  { q: "How should I care for my SOROSHA?", a: "Wipe the case with a soft cloth, keep it away from strong magnets, and have the movement serviced by our atelier every four to five years. With this care, it will outlive trends and owners alike." },
  { q: "Is the sapphire crystal really scratch-proof?", a: "Sapphire sits at 9 on the Mohs scale, second only to diamond. In everyday wear it is, for all practical purposes, impossible to scratch." },
  { q: "What is covered by the warranty?", a: "Every SOROSHA carries a five-year international warranty against defects in materials and craftsmanship, honoured at any of our authorised ateliers worldwide." },
  { q: "Can I reserve a Limited Edition before release?", a: "Members of the SOROSHA Circle receive private access to new and limited releases before they are offered publicly. Join the Circle below to be first." },
];

/* ── Instagram-style gallery captions ─────────────────────────── */
export const GALLERY: { key: keyof typeof THEMES; caption: string; span?: boolean }[] = [
  { key: "onyx", caption: "Eclipse, after dark", span: true },
  { key: "silver", caption: "The Meridian, unboxed" },
  { key: "rose", caption: "Aurelia · golden hour" },
  { key: "titanium", caption: "Vanguard at altitude", span: true },
  { key: "silver", caption: "Movement, exposed" },
  { key: "onyx", caption: "Hand-finished bevels" },
];
