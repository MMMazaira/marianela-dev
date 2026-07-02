const services = [
  {
    icon: "🖥️",
    title: "Diseño y desarrollo web",
    description: "Páginas a medida, rápidas y adaptadas a móvil. Con tu identidad, no con una plantilla.",
  },
  {
    icon: "⚙️",
    title: "Aplicaciones web",
    description: "Herramientas digitales para automatizar procesos y gestionar tu negocio online.",
  },
  {
    icon: "🔧",
    title: "Mantenimiento web",
    description: "Actualizaciones, mejoras y soporte continuo para que todo funcione siempre.",
  },
  {
    icon: "🛒",
    title: "Tiendas online",
    description: "E-commerce optimizado y fácil de gestionar, listo para vender desde el primer día.",
  },
  {
    icon: "🤖",
    title: "Chatbots con IA",
    description: "Asistentes inteligentes que atienden a tus clientes 24/7, integrados en tu web.",
    highlight: true,
  },
]

export function Services() {
  return (
    <section id="servicios" style={{ padding: "5rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
      <p style={{ fontSize: 11, letterSpacing: ".1em", color: "#1D9E75", textTransform: "uppercase", marginBottom: 8 }}>
        Servicios
      </p>
      <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500, margin: "0 0 0.75rem", color: "#f1f5f9" }}>
        ¿Qué puedo hacer por tu negocio?
      </h2>
      <p style={{ fontSize: 15, color: "#64748b", margin: "0 0 3rem", maxWidth: 480 }}>
        Trabajo con pymes y autónomos que necesitan una presencia digital real, no una tarjeta de visita online.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {services.map((s) => (
          <div key={s.title} style={{
            background: s.highlight ? "rgba(29,158,117,0.08)" : "rgba(255,255,255,0.03)",
            border: s.highlight ? "0.5px solid rgba(29,158,117,0.35)" : "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: "1.5rem", position: "relative"
          }}>
            {s.highlight && (
              <span style={{
                position: "absolute", top: -10, left: 16,
                background: "#1D9E75", color: "#fff",
                fontSize: 11, padding: "2px 10px", borderRadius: 20, fontWeight: 500
              }}>Nuevo</span>
            )}
            <span style={{ fontSize: 24, display: "block", marginBottom: 12 }}>{s.icon}</span>
            <p style={{ fontSize: 15, fontWeight: 500, margin: "0 0 6px", color: "#f1f5f9" }}>{s.title}</p>
            <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.6 }}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
