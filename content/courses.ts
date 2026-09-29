export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: CourseLevel;
  price: number;
  priceNote: string;
  studentCount: string;
  avatars: string[];
};

export const COURSE_CATEGORIES = [
  { label: "Featured", value: "featured", active: true },
  { label: "Music", value: "music" },
  { label: "Drawing & Painting", value: "drawing-painting" },
  { label: "Marketing", value: "marketing" },
  { label: "Animation", value: "animation" },
  { label: "Social Media", value: "social-media" },
  { label: "UI/UX Design", value: "ui-ux" },
  { label: "Creative Marketing", value: "creative-marketing" },
  { label: "Cooking", value: "cooking" },
  { label: "Graphic Design", value: "Graphic-Design" },
  { label: "Photography", value: "Photography" },
  { label: "Productivity", value: "Productivity" },
  { label: "Web Development", value: "Web-Development" },
  { label: "Data Science", value: "Data-Science" },
] as const;

// Six repeats for the 6-row grid. Swap for real data when available.
const A = [
  "/images/avatars/a1.png",
  "/images/avatars/a2.png",
  "/images/avatars/a3.png",
  "/images/avatars/a4.png",
];

export const COURSES: Course[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    author: "punctual studio",
    thumbnail: "/images/image2.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceNote: "lifetime",
    studentCount: "2K+",
    avatars: A,
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    author: "punctual studio",
    thumbnail: "/images/image4.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceNote: "lifetime",
    studentCount: "2K+",
    avatars: A,
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    author: "punctual studio",
    thumbnail: "/images/image5.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceNote: "lifetime",
    studentCount: "2K+",
    avatars: A,
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Wellness",
    author: "punctual studio",
    thumbnail: "/images/image3.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceNote: "lifetime",
    studentCount: "2K+",
    avatars: A,
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    author: "punctual studio",
    thumbnail: "/images/image7.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceNote: "lifetime",
    studentCount: "2K+",
    avatars: A,
  },
  {
    id: "startup-success",
    title: "From Idea to Startup Success",
    author: "punctual studio",
    thumbnail: "/images/image6.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceNote: "lifetime",
    studentCount: "2K+",
    avatars: A,
  },
];
