export const site = {
  name: "Perry Plays",
  handle: "@perryplaysalot",
  email: "perryplaysalot@gmail.com",
  location: "Based in Europe · Available remote",
  tagline:
    "I help tech & productivity brands reach students through relatable educational content + UGC that feels native to university life.",
  ctas: {
    primary: { label: "Work With Me", href: "#contact" },
    secondary: { label: "View UGC", href: "#portfolio" },
    mediaKit: { label: "Download Media Kit", href: "#contact" },
  },
} as const;

export const pillars = [
  {
    title: "Educational & uni-relatable memes",
    description:
      "Exam season energy, deadlines, procrastination lore — delivered in a way students instantly share.",
    icon: "meme",
  },
  {
    title: "Tech for students",
    description:
      "Apps, laptops, note-taking stacks, and tools explained in student language (not product pages).",
    icon: "tech",
  },
  {
    title: "Productivity & study systems",
    description:
      "Workflows that actually survive midterms: time-blocking, templates, study hacks, and habit loops.",
    icon: "workflow",
  },
] as const;

export const portfolioItems = [
  {
    title: "UGC Ad · Productivity app",
    caption: "Hook + demo + student proof in 22s",
    tag: "UGC Ad",
  },
  {
    title: "Organic TikTok · Study workflow",
    caption: "3-step study system: template + timer + wins",
    tag: "Organic TikTok",
  },
  {
    title: "Meme Content · Exam week",
    caption: "Relatable carousel-style meme",
    tag: "Meme Content",
  },
  {
    title: "UGC Ad · Note-taking tool",
    caption: "Before/after: messy notes → clean system",
    tag: "UGC Ad",
  },
  {
    title: "Organic TikTok · Laptop setup",
    caption: "Dorm desk tour + study stack",
    tag: "Organic TikTok",
  },
  {
    title: "Meme Content · Deadline panic",
    caption: "Internet-native humor, brand-safe",
    tag: "Meme Content",
  },
] as const;

export const stats = [
  { label: "Avg. engagement", value: "6–12%" },
  { label: "Monthly views", value: "500K+" },
  { label: "Audience", value: "Students (18–24)" },
  { label: "Turnaround", value: "48–72h" },
] as const;

export const brands = [
  "Notion-style",
  "Study app",
  "Laptop brand",
  "EdTech startup",
  "SaaS tool",
  "Campus org",
] as const;

export const reasons = [
  {
    title: "Student-culture native",
    description:
      "I speak fluent campus life — the jokes, the stress, the vibe. Your product fits in naturally.",
  },
  {
    title: "Tech clarity without the cringe",
    description:
      "I translate features into student outcomes: better grades, less chaos, more time.",
  },
  {
    title: "Content that doesn’t feel like ads",
    description:
      "Hooks + storytelling + humor that earns attention first, then sells (softly).",
  },
] as const;

export const services = [
  {
    title: "UGC video creation",
    description:
      "Organic-style videos + paid ad variants, shot for vertical-first platforms.",
  },
  {
    title: "Educational meme content",
    description:
      "Brand-safe meme formats students actually share (and brands can approve).",
  },
  {
    title: "Product demos for students",
    description:
      "Screen recordings + voiceover, simplified for first-time users.",
  },
  {
    title: "Scripting + hooks",
    description:
      "Scroll-stopping openings, clean structure, clear CTAs — optimized for retention.",
  },
] as const;

export const about = {
  title: "About",
  headline: "Student brain, brand standards.",
  body:
    "I’m a student-focused creator making educational memes and tech content that feels native to university life. I blend internet-native humor with clear product storytelling — so brands get results and students don’t feel marketed to.",
} as const;
