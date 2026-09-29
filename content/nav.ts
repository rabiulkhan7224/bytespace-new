export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
  { label: "About", href: "/about" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
