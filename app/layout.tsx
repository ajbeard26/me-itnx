import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.nxrent.com"),
  title: "AJ Beard | IT Professional & Entrepreneur",
  description:
    "Portfolio of AJ Beard—IT professional, entrepreneur, founder of NXrent LLC, and builder of practical business technology solutions.",
  openGraph: {
    title: "AJ Beard | Portfolio",
    description: "IT, software, networking, cybersecurity, and business technology projects.",
    url: "https://portfolio.nxrent.com",
    siteName: "AJ Beard Portfolio",
    images: ["/images/hero-ocean.png"],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
