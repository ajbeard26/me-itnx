export type Project = {
  title: string;
  category: string;
  description: string;
  preview: "nxrent" | "itnx" | "web";
  logo?: string;
  logoBg?: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "NXrent SaaS Platform",
    category: "SaaS / Payments",
    description: "A rental-management and payment platform built for modern small businesses.",
    preview: "nxrent",
    logo: "/images/logos/nxrent.png",
    logoBg: "#ffffff",
    href: "https://nxrent.com"
  },
  {
    title: "ITNX.tech",
    category: "IT Services",
    description: "A customer-facing website for computer repair, support, and managed technology services.",
    preview: "itnx",
    logo: "/images/logos/itnx.png",
    logoBg: "#000000",
    href: "https://itnx.tech"
  },
  {
    title: "For The Love of Beauty",
    category: "Web Development",
    description: "A modern salon website for booking, services, and brand presence online.",
    preview: "web",
    logo: "/images/logos/fortheloveofbeauty.png",
    logoBg: "#ffffff",
    href: "https://fortheloveofbeautysalon.com/home"
  },
  {
    title: "Shear Beauty Salon",
    category: "Web Development",
    description: "A clean, modern salon website for services, booking, and local beauty care in Marlette, Michigan.",
    preview: "web",
    logo: "/images/logos/shear-beauty.png",
    logoBg: "#ffffff",
    href: "https://shear.beauty"
  }
];
