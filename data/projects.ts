export type Project = {
  title: string;
  category: string;
  description: string;
  imageClass: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "NXrent SaaS Platform",
    category: "SaaS / Payments",
    description: "A rental-management and payment platform built for modern small businesses.",
    imageClass: "project-nxrent",
    href: "https://nxrent.com"
  },
  {
    title: "ITNX.tech",
    category: "IT Services",
    description: "A customer-facing website for computer repair, support, and managed technology services.",
    imageClass: "project-itnx",
    href: "https://itnx.tech"
  },
  {
    title: "Fleet Dashboard",
    category: "Operations Tool",
    description: "A custom dashboard that connects mobile-device, vehicle, and assignment data.",
    imageClass: "project-fleet",
    href: "#contact"
  },
  {
    title: "Printer Management Tool",
    category: "Network Automation",
    description: "A local network utility for printer discovery, status monitoring, and support workflows.",
    imageClass: "project-printer",
    href: "#contact"
  },
  {
    title: "DW Spectrum Kiosk",
    category: "Windows Automation",
    description: "Reliable auto-login, launch, fullscreen, and recovery automation for video monitoring stations.",
    imageClass: "project-kiosk",
    href: "#contact"
  },
  {
    title: "Client Websites",
    category: "Web Development",
    description: "Responsive websites and business systems for salons, service providers, and local companies.",
    imageClass: "project-web",
    href: "#contact"
  }
];
