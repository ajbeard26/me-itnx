"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar-wrap${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <a className="signature" href="#home" aria-label="TO home" onClick={close}>
        TO
      </a>
      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`nav-links${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="nav-mobile-panel">
          {links.map(({ label, href }) => (
            <a key={label} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={close}>
            Let&apos;s Work Together
          </a>
        </div>
      </nav>
    </header>
  );
}
