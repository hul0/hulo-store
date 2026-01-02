import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"

export const metadata: Metadata = {
  title: "HULO.STORE - Too Cool For School",
  description:
    "Streetwear designed for the next generation of creators. Sustainable fabrics, oversized fits, and zero compromises on the drip.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
         {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="footer-logo">
            HULO.STORE
          </Link>
          <div className="footer-copyright">
            © 2026 Gen Z Code. All rights reserved. Ship Fast.
          </div>
          <div className="footer-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </div>
        </div>
      </footer>
        </body>
    </html>
  )
}
