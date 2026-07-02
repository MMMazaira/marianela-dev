export function Footer() {
  return (
    <footer style={{
      borderTop: "0.5px solid rgba(255,255,255,0.07)",
      padding: "1.5rem 2rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 12, maxWidth: 900, margin: "0 auto"
    }}>
      <p style={{ fontSize: 13, color: "#475569", margin: 0 }}>
        © 2026 Marianela Marín Mazaira · Barcelona, España
      </p>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "GitHub", href: "https://github.com/MMMazaira" },
          { label: "LinkedIn", href: "https://linkedin.com/in/marianela-marín-mazaira-48253a3a9" },
          { label: "Email", href: "mailto:mmmazaira@gmail.com" },
        ].map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 13, color: "#475569", textDecoration: "none" }}>
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
