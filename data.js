// =============================================================
//  EDIT THIS FILE to make the portfolio yours.
//  Everything on the site is rendered from this object.
// =============================================================
window.PORTFOLIO = {
  name: "Chino",
  role: "Developer · Designer · Maker",
  location: "Manila, Philippines",
  tagline:
    "I build useful things for the web and beyond — from apps and interfaces to visual work and side projects.",
  about: [
    "Hi! I'm Chino. Replace this paragraph with a short introduction: what you do, what you care about, and what kind of work you're looking for.",
    "Add a second paragraph about your background, the tools you love, or what you're learning right now.",
  ],
  email: "onihc015@gmail.com",
  resumeUrl: "#", // e.g. "assets/resume.pdf"
  socials: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/" },
    { label: "Instagram", url: "https://instagram.com/" },
  ],

  skills: {
    Development: ["HTML & CSS", "JavaScript", "React", "Node.js", "Python"],
    Design: ["Figma", "UI/UX", "Branding", "Prototyping"],
    Other: ["Photography", "Video editing", "Writing"],
  },

  // category is used for the filter buttons — use any names you like.
  // image: path or URL (leave "" to show a generated color tile).
  projects: [
    {
      title: "Task Flow App",
      category: "Development",
      year: 2026,
      description: "A productivity web app with drag-and-drop boards, offline support and dark mode.",
      tags: ["React", "TypeScript", "PWA"],
      image: "",
      links: { live: "#", code: "#" },
    },
    {
      title: "Café Rebrand",
      category: "Design",
      year: 2026,
      description: "Full visual identity for a neighborhood coffee shop: logo, menu, packaging and signage.",
      tags: ["Branding", "Illustrator"],
      image: "",
      links: { live: "#" },
    },
    {
      title: "Weather Dashboard",
      category: "Development",
      year: 2025,
      description: "Real-time forecasts with charts and location search, built on a public weather API.",
      tags: ["JavaScript", "API", "Charts"],
      image: "",
      links: { live: "#", code: "#" },
    },
    {
      title: "Streets of Manila",
      category: "Photography",
      year: 2025,
      description: "A street photography series capturing daily life across the city.",
      tags: ["Photography", "Lightroom"],
      image: "",
      links: { live: "#" },
    },
    {
      title: "Mobile Banking UI",
      category: "Design",
      year: 2025,
      description: "Case study redesigning a mobile banking flow to cut onboarding time in half.",
      tags: ["Figma", "UX Research"],
      image: "",
      links: { live: "#" },
    },
    {
      title: "CLI Toolkit",
      category: "Development",
      year: 2024,
      description: "A set of command-line utilities for automating file organization and backups.",
      tags: ["Python", "Open source"],
      image: "",
      links: { code: "#" },
    },
  ],

  experience: [
    { when: "2025 — Present", title: "Freelance Developer & Designer", org: "Self-employed", text: "Building websites and brand identities for small businesses." },
    { when: "2023 — 2025", title: "Frontend Developer", org: "Company Name", text: "Shipped features for a web app used by thousands of customers." },
    { when: "2019 — 2023", title: "B.S. Your Degree", org: "Your University", text: "Relevant coursework, honors, or organizations." },
  ],
};
