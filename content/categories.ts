export const CATEGORIES_HEADER = {
  heading: "Explore Diverse Learning Paths at Bytespace",
  body: "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
} as const;

export type Category = {
  id: string;
  label: string;
  icon: string;
};

export const CATEGORIES: Category[] = [
  { id: "design", label: "Design", icon: "/icons/icon-1.png" },
  { id: "development", label: "Development", icon: "/icons/icon-2.png" },
  { id: "it-software", label: "IT & Software", icon: "/icons/icon-3.png" },
  { id: "business", label: "Business", icon: "/icons/icon-4.png" },
  { id: "marketing", label: "Marketing", icon: "/icons/icon-5.png" },
  { id: "photography", label: "Photography", icon: "/icons/icon-6.png" },
];
