"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About",    href: "#about"   },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"  },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about", "projects", "skills", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position:       "fixed",
        top:            0, left: 0, right: 0,
        zIndex:         100,
        padding:        "0 32px",
        height:         "72px",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        transition:     "background 0.3s ease, border-color 0.3s ease",
        background:     scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom:   scrolled ? "1px solid #1f1f1f" : "1px solid transparent",
      }}>
        {/* Logo */}
        <a href="#" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "16px", color: "var(--text-primary)", letterSpacing: "-0.01em", display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ color: "var(--accent)" }}>P.</span>
          dhananjana
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, color: active === link.href.slice(1) ? "var(--accent)" : "var(--text-secondary)", letterSpacing: "0.02em", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = active === link.href.slice(1) ? "var(--accent)" : "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}

          <a href="https://github.com/pamod100" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 18px", background: "var(--accent)", color: "#080808", borderRadius: "8px", fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.02em", transition: "all 0.2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--text-primary)" }}
          className="hamburger"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="3" y1="7"  x2="19" y2="7"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="15" x2="14" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(8,8,8,0.97)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "40px" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-heading)", fontSize: "36px", fontWeight: 700, color: "var(--text-primary)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}