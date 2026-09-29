export const FOOTER_COLUMNS = [
  {
    heading: "Featured Courses",
    links: [
      { label: "Featured Categories", href: "#" },
      { label: "Business", href: "#" },
      { label: "IT", href: "#" },
      { label: "Design", href: "#" },
    ],
  },
  {
    heading: "Development",
    links: [
      { label: "Marketing", href: "#" },
      { label: "Photography", href: "#" },
      { label: "Finance", href: "#" },
      { label: "Sport", href: "#" },
    ],
  },
  {
    heading: "Become a Creator",
    links: [
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
] as const;

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
] as const;

export const FOOTER_COPY = {
  tagline:
    "Stay up to date with our latest features and releases by joining our newsletter.",
  emailPlaceholder: "Enter your email",
  emailCta: "Search",
  consent:
    "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
  copyright: "© 2023 ByteSpace. All rights reserved.",
} as const;
