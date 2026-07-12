"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Portfolio", "Services", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <a className="signature" href="#home" aria-label="AJ Beard home">AJ Beard</a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s Work Together</a>
      </nav>
    </header>
  );
}
