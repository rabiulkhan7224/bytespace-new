export type LessonModule = {
  id: string;
  index: number;
  title: string;
  description: string;
};

export type Review = {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  body: string;
};

export type CourseDetail = {
  slug: string;
  title: string;
  subtitle: string;
  author: { name: string; href: string };
  level: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  videoThumbnail: string;
  price: number;
  priceNote: string;
  sidebar: {
    lessonsHeader: string;
    preview: { index: number; title: string; duration: string }[];
    moreVideos: string;
    enrollCta: string;
    includes: {
      label: string;
      icon: "book" | "video" | "certificate" | "consult";
    }[];
    instructor: { name: string; role: string; avatar: string };
    profileCta: string;
  };
  about: {
    description: string[];
    sneakPeak: string[];
    keyPoints: string[];
  };
  lessons: {
    intro: string;
    modules: LessonModule[];
    contentHeading: string;
    contentBody: string;
    progressHeading: string;
    progressBody: string;
    progressValue: number;
  };
  reviews: {
    intro: string;
    summary: {
      average: number;
      total: number;
      breakdown: { stars: number; count: number }[];
    };
    filters: { label: string; value: string }[];
    items: Review[];
  };
};

export const COURSE_DETAIL: CourseDetail = {
  slug: "build-digital-asset",
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  author: { name: "purepearl studio", href: "#" },
  level: "Intermediate",
  rating: 4.8,
  reviewCount: 172,
  studentCount: 199,
  videoThumbnail: "/images/digital-asset-hero.jpg",
  price: 25,
  priceNote: "lifetime",
  sidebar: {
    lessonsHeader: "112 Lessons (24 hours)",
    preview: [
      {
        index: 1,
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      { index: 2, title: "Design Principles for Impacts", duration: "21 mins" },
      {
        index: 3,
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    moreVideos: "99 more videos",
    enrollCta: "Enroll Now",
    includes: [
      { label: "Learning Resources", icon: "book" },
      { label: "Quality Lesson Videos", icon: "video" },
      { label: "Certificate of Completion", icon: "certificate" },
      { label: "Private Consultation", icon: "consult" },
    ],
    instructor: {
      name: "PurePearl Studio",
      role: "Professional Creator",
      avatar: "/images/purepearl.jpg",
    },
    profileCta: "See Full Profile",
  },
  about: {
    description: [
      'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeak: [
      "/images/sneak-1.jpg",
      "/images/sneak-2.jpg",
      "/images/sneak-3.jpg",
      "/images/sneak-4.jpg",
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
  },
  lessons: {
    intro:
      "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
    modules: [
      {
        id: "m1",
        index: 1,
        title: "Module 1: Introduction to Digital Assets",
        description:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation.",
      },
      {
        id: "m2",
        index: 2,
        title: "Module 2: Design Principles for Impact",
        description:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills.",
      },
      {
        id: "m4",
        index: 4,
        title: "Module 4: User-Centric Design Strategies",
        description:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design.",
      },
      {
        id: "m5",
        index: 5,
        title: "Module 5: Interactive Media and Engagement",
        description:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of creating immersive digital experiences.",
      },
      {
        id: "m6",
        index: 6,
        title: "Module 6: Project Showcase and Critique",
        description:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration'. Showcase your work with confidence.",
      },
      {
        id: "m7",
        index: 7,
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        description:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media'. Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    contentHeading: "Lesson Content",
    contentBody:
      "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
    progressHeading: "Lesson Progress Tracking",
    progressBody:
      "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
    progressValue: 55,
  },
  reviews: {
    intro:
      "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    summary: {
      average: 4.7,
      total: 889,
      breakdown: [
        { stars: 5, count: 720 },
        { stars: 4, count: 120 },
        { stars: 3, count: 21 },
        { stars: 2, count: 12 },
        { stars: 1, count: 16 },
      ],
    },
    filters: [
      { label: "All rating", value: "all" },
      { label: "5", value: "5" },
      { label: "4", value: "4" },
      { label: "3", value: "3" },
      { label: "2", value: "2" },
      { label: "1", value: "1" },
    ],
    items: [
      {
        id: "r1",
        author: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: "/images/avatars/a1.png",
        rating: 5,
        timeAgo: "a year ago",
        body: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
      },
      {
        id: "r2",
        author: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "/images/avatars/a2.png",
        rating: 5,
        timeAgo: "a year ago",
        body: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        id: "r3",
        author: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: "/images/avatars/a3.png",
        rating: 5,
        timeAgo: "a year ago",
        body: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        id: "r4",
        author: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: "/images/avatars/a4.png",
        rating: 5,
        timeAgo: "a year ago",
        body: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  },
};
