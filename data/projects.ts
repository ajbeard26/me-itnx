export type Project = {
  title: string;
  category: string;
  description: string;
  preview: "nxrent" | "itnx" | "fleet" | "printer" | "kiosk" | "web";
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
    title: "Verizon Fleet Dashboard",
    category: "Operations Tool",
    description: "A custom dashboard that connects mobile-device, vehicle, and assignment data.",
    preview: "fleet",
    href: "#contact"
  },
  {
    title: "Printer Management Tool",
    category: "Network Automation",
    description: "A local network utility for printer discovery, status monitoring, and support workflows.",
    preview: "printer",
    href: "#contact"
  },
  {
    title: "DW Spectrum Kiosk",
    category: "Windows Automation",
    description: "Reliable auto-login, launch, fullscreen, and recovery automation for video monitoring stations.",
    preview: "kiosk",
    logo: "/images/logos/dw-spectrum.png",
    logoBg: "#1a1a1a",
    href: "#contact"
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
