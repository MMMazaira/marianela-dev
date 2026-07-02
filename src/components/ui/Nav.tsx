"use client"
import { useState, useEffect } from "react"

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1rem 2rem",
      background: scrolled ? "rgba(11,17,32,0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.07)" : "none",
      transition: "all 0.3s",
      display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      <a href="#inicio" style={{ fontSize: 15, fontWeight: 500, color: "#f1f5f9", textDecoration: "none" }}>
        Marianela <span style={{ color: "#1D9E75" }}>·</span> dev
      </a>
      <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
        {links.map((l) => (
          <a key={l.href} href={l.href} style={{
            fontSize: 14, color: "#64748b", textDecoration: "none",
            transition: "color 0.2s"
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
          >
            {l.label}
          </a>
        ))}
       
      </div>
    </nav>
  )
}
