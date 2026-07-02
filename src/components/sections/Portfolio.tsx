const projects = [
  {
    emoji: "🧹",
    tag: "Corporativa",
    tagColor: "#1D9E75",
    title: "M-G WhiteServices",
    description: "Web corporativa para empresa de limpieza profesional en Austin, Texas. Diseño limpio y orientado a conversión.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    url: "https://github.com/MMMazaira/mg-white-redesign",
    bg: "rgba(29,158,117,0.08)",
  },
  {
    emoji: "🔐",
    tag: "App web",
    tagColor: "#7F77DD",
    title: "AbyssAI",
    description: "Escape room interactivo con inteligencia artificial integrada. Narrativa dinámica generada por IA en tiempo real.",
    stack: ["React", "OpenAI API", "Node.js"],
    url: "https://github.com/MMMazaira",
    bg: "rgba(127,119,221,0.08)",
  },
  {
    emoji: "📊",
    tag: "Dashboard B2B",
    tagColor: "#1D9E75",
    title: "ServiceFlow",
    description: "Panel de analítica para pymes de servicios. KPIs, gráficos de tendencia e insights generados con IA.",
    stack: ["Next.js", "Recharts", "OpenAI API"],
    url: "https://github.com/MMMazaira/serviceflow-dashboard",
    bg: "rgba(29,158,117,0.08)",
  },
  {
    emoji: "🤖",
    tag: "Chatbot IA",
    tagColor: "#38BDF8",
    title: "SupportBot",
    description: "Asistente de soporte 24/7 embebible para pymes. Panel de configuración + widget listo para cualquier web.",
    stack: ["Next.js", "OpenAI API", "TypeScript"],
    url: "https://github.com/MMMazaira",
    bg: "rgba(56,189,248,0.08)",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "5rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
      <p style={{ fontSize: 11, letterSpacing: ".1em", color: "#1D9E75", textTransform: "uppercase", marginBottom: 8 }}>
        Portfolio
      </p>
      <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500, margin: "0 0 0.75rem", color: "#f1f5f9" }}>
        Proyectos recientes
      </h2>
      <p style={{ fontSize: 15, color: "#64748b", margin: "0 0 3rem", maxWidth: 480 }}>
        Proyectos reales, con código real. Cada uno resuelve un problema concreto de negocio.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {projects.map((p) => (
          <div key={p.title} style={{
            background: p.bg,
            border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: 12, overflow: "hidden",
            display: "flex", flexDirection: "column"
          }}>
            <div style={{
              height: 80, display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 32,
              borderBottom: "0.5px solid rgba(255,255,255,0.06)"
            }}>
              {p.emoji}
            </div>
            <div style={{ padding: "1rem 1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <span style={{
                display: "inline-block", fontSize: 11, padding: "2px 10px",
                borderRadius: 20, background: `${p.tagColor}22`,
                color: p.tagColor, marginBottom: 8, fontWeight: 500
              }}>{p.tag}</span>
              <p style={{ fontSize: 15, fontWeight: 500, margin: "0 0 6px", color: "#f1f5f9" }}>{p.title}</p>
              <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 1rem", lineHeight: 1.6, flex: 1 }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: "1rem" }}>
                {p.stack.map((t) => (
                  <span key={t} style={{
                    fontSize: 11, padding: "2px 8px", borderRadius: 12,
                    border: "0.5px solid rgba(255,255,255,0.1)", color: "#64748b"
                  }}>{t}</span>
                ))}
              </div>
              <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
                fontSize: 13, color: "#1D9E75", textDecoration: "none", fontWeight: 500
              }}>
                Ver en GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
