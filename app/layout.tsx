import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display"
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.nxrent.com"),
  title: "TO | IT Professional & Entrepreneur",
  description:
    "Portfolio of TO—IT professional, entrepreneur, founder of NXrent LLC, and builder of practical business technology solutions.",
  openGraph: {
    title: "TO | Portfolio",
    description: "IT, software, networking, cybersecurity, and business technology projects.",
    url: "https://portfolio.nxrent.com",
    siteName: "TO Portfolio",
    images: ["/images/hero-ocean.png"],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
