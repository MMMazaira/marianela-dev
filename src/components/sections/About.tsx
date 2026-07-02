const stack = ["React", "Next.js", "TypeScript", "Node.js", "Express", "Tailwind CSS", "OpenAI API", "n8n"]

export function About() {
  return (
    <section id="sobre-mi" style={{ padding: "5rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)",
        gap: "3rem", alignItems: "start"
      }}>
        <div>
          <p style={{ fontSize: 11, letterSpacing: ".1em", color: "#1D9E75", textTransform: "uppercase", marginBottom: 8 }}>
            Sobre mí
          </p>
          <div style={{
            width: 72, height: 72, borderRadius: "50%",
            background: "rgba(29,158,117,0.15)", border: "0.5px solid rgba(29,158,117,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, fontWeight: 500, color: "#1D9E75", marginBottom: "1rem"
          }}>
            MM
          </div>
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.75rem)", fontWeight: 500, margin: "0 0 4px", color: "#f1f5f9" }}>
            Marianela Marín Mazaira
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", margin: "0 0 1.25rem" }}>
            Fullstack developer · Barcelona, España
          </p>
          <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.75, margin: "0 0 1.5rem" }}>
            Desarrollo webs y aplicaciones para autónomos y pymes que quieren una
            presencia digital que refleje su negocio real — no una plantilla con su logo encima.
          </p>
          <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.75, margin: "0 0 1.5rem" }}>
            Trabajo con clientes en España y EE.UU., entrego proyectos bilingües
            y tengo experiencia tanto en el lado técnico como en el diseño y la estrategia digital.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://github.com/MMMazaira" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/marianela-marín-mazaira-48253a3a9" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: "#64748b", textDecoration: "none" }}>
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div>
          <p style={{ fontSize: 13, color: "#64748b", marginBottom: "1rem" }}>Stack tecnológico</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem" }}>
            {stack.map((t) => (
              <span key={t} style={{
                fontSize: 13, padding: "5px 12px", borderRadius: 20,
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.1)", color: "#94a3b8"
              }}>{t}</span>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Proyectos entregados", value: "4+" },
              { label: "Mercados", value: "ES + US" },
              { label: "Años de experiencia", value: "3+" },
              { label: "Disponibilidad", value: "Inmediata" },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: 10, padding: "1rem"
              }}>
                <p style={{ fontSize: 20, fontWeight: 500, margin: "0 0 4px", color: "#f1f5f9" }}>{stat.value}</p>
                <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
