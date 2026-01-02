"use client"

import Link from "next/link"

export default function CartPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="navigation">
        <div className="logo">
          <Link href="/">
            GZ<span>.</span>CODE
          </Link>
          <div className="beta-badge">BETA</div>
        </div>

        <div className="nav-links">
           <Link href="/" className="nav-link">
            HOME
          </Link>
        </div>

        <div className="nav-actions">
           <Link href="/" className="nav-icon">✕</Link>
        </div>
      </nav>

      {/* Cart Content */}
      <main className="cart-section">
        <div className="cart-container" style={{ textAlign: "center", padding: "4rem 0" }}>
          <h1 className="cart-title">DIRECT CHECKOUT</h1>

          <div className="cart-empty">
            <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
              To ensure the fastest delivery and support, we use a <strong>Direct WhatsApp Checkout</strong> system. 
              <br/><br/>
              Please click "Buy Now" on any product page to purchase it directly. The cart feature is currently disabled for this streamlined process.
            </p>
            
            <Link href="/" className="btn-primary hover-lift">
              BROWSE PRODUCTS
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="footer-logo">
            GZ.CODE
          </Link>
          <div className="footer-copyright">© 2026 Gen Z Code. All rights reserved. Ship Fast.</div>
        </div>
      </footer>
    </>
  )
}