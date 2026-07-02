"use client"
import { useState } from "react"

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  function handleSubmit() {
    if (!form.name || !form.email || !form.message) return
    // TODO: conectar con Resend, Formspree o EmailJS
    setSent(true)
  }

  return (
    <section id="contacto" style={{ padding: "5rem 1.5rem 6rem", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)", gap: "3rem", alignItems: "start" }}>
        <div>
          <p style={{ fontSize: 11, letterSpacing: ".1em", color: "#1D9E75", textTransform: "uppercase", marginBottom: 8 }}>
            Contacto
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500, margin: "0 0 1rem", color: "#f1f5f9" }}>
            ¿Tienes un proyecto en mente?
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75, margin: "0 0 2rem" }}>
            Cuéntame qué necesitas y te respondo en menos de 24 horas. Trabajo con pymes y autónomos,
            proyectos nuevos y rediseños.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="mailto:mmmazaira@gmail.com" style={{
              display: "flex", alignItems: "center", gap: 10,
              fontSize: 14, color: "#94a3b8", textDecoration: "none"
            }}>
              <span style={{ fontSize: 16 }}>✉️</span> mmmazaira@gmail.com
            </a>
            <a href="https://linkedin.com/in/marianela-marín-mazaira-48253a3a9" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#94a3b8", textDecoration: "none" }}>
              <span style={{ fontSize: 16 }}>💼</span> LinkedIn
            </a>
            <a href="https://github.com/MMMazaira" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#94a3b8", textDecoration: "none" }}>
              <span style={{ fontSize: 16 }}>🐙</span> GitHub
            </a>
          </div>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)",
          borderRadius: 12, padding: "1.75rem"
        }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <span style={{ fontSize: 32, display: "block", marginBottom: 12 }}>✅</span>
              <p style={{ fontSize: 15, fontWeight: 500, color: "#f1f5f9", margin: "0 0 6px" }}>¡Mensaje enviado!</p>
              <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Te respondo en menos de 24 horas.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Tu nombre", key: "name", type: "text", placeholder: "Ana García" },
                { label: "Email", key: "email", type: "email", placeholder: "ana@tuempresa.com" },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label style={{ display: "block", fontSize: 12, color: "#64748b", marginBottom: 5 }}>{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.05)",
                      border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: 8,
                      padding: "10px 14px", fontSize: 14, color: "#e2e8f0",
                      outline: "none"
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#64748b", marginBottom: 5 }}>Cuéntame qué necesitas</label>
                <textarea
                  placeholder="Tengo una empresa de... y necesito..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  style={{
                    width: "100%", background: "rgba(255,255,255,0.05)",
                    border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: 8,
                    padding: "10px 14px", fontSize: 14, color: "#e2e8f0",
                    outline: "none", resize: "vertical"
                  }}
                />
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  background: "#1D9E75", color: "#fff", border: "none",
                  borderRadius: 8, padding: "12px", fontSize: 14,
                  fontWeight: 500, cursor: "pointer", width: "100%"
                }}
              >
                Enviar mensaje →
              </button>
              <p style={{ fontSize: 12, color: "#475569", margin: 0, textAlign: "center" }}>
                O escríbeme directamente a mmmazaira@gmail.com
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
