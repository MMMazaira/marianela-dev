export function Hero() {
  return (
    <section id="inicio" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      padding: "4rem 1.5rem", position: "relative", overflow: "hidden"
    }}>
      {/* Fondo decorativo */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(29,158,117,0.12) 0%, transparent 70%)"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 640 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(29,158,117,0.12)", border: "0.5px solid rgba(29,158,117,0.3)",
          borderRadius: 20, padding: "6px 14px", marginBottom: "1.5rem"
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1D9E75", display: "inline-block" }} />
          <span style={{ fontSize: 13, color: "#1D9E75" }}>Disponible para proyectos · Barcelona</span>
        </div>

        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 500,
          lineHeight: 1.15, margin: "0 0 1.25rem", color: "#f1f5f9"
        }}>
          Páginas web y aplicaciones<br />
          <span style={{ color: "#1D9E75" }}>que trabajan para tu negocio</span>
        </h1>

        <p style={{
          fontSize: 16, color: "#94a3b8", lineHeight: 1.7,
          margin: "0 auto 2rem", maxWidth: 480
        }}>
          Soy Marianela, desarrolladora web freelance. Diseño y desarrollo soluciones digitales
          a medida para pymes y autónomos. Sin plantillas. Sin tecnicismos. Con resultados.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contacto" style={{
            background: "#1D9E75", color: "#fff", textDecoration: "none",
            borderRadius: 8, padding: "12px 24px", fontSize: 15, fontWeight: 500
          }}>
            Hablamos →
          </a>
          <a href="#portfolio" style={{
            background: "rgba(255,255,255,0.06)", color: "#e2e8f0",
            textDecoration: "none", borderRadius: 8, padding: "12px 24px",
            fontSize: 15, border: "0.5px solid rgba(255,255,255,0.12)"
          }}>
            Ver proyectos
          </a>
        </div>

        <div style={{ marginTop: "3rem", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[["Next.js", "React", "TypeScript"], ["Node.js", "Tailwind", "OpenAI API"]].flat().map((tech) => (
            <span key={tech} style={{ fontSize: 13, color: "#64748b" }}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
