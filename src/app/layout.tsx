import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Marianela Marín Mazaira — Desarrolladora web freelance",
  description: "Diseño y desarrollo páginas web, aplicaciones y chatbots con IA para pymes y autónomos. Barcelona, España.",
  keywords: ["desarrolladora web", "freelance", "Barcelona", "Next.js", "React", "chatbot IA"],
  openGraph: {
    title: "Marianela Marín Mazaira — Desarrolladora web freelance",
    description: "Páginas web y aplicaciones que trabajan para tu negocio.",
    locale: "es_ES",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
