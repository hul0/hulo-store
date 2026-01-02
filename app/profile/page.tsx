"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      {/* Navigation - Keeping consistent design */}
      <nav className="navigation">
        <div className="logo">
          <Link href="/">
            HULO<span>.</span>STORE
          </Link>
          <div className="beta-badge">BETA</div>
        </div>

        <div className="nav-links">
          <Link href="/?category=web-app" className="nav-link">
            WEB APPS
          </Link>
          <Link href="/?category=mobile-app" className="nav-link">
            MOBILE
          </Link>
          <Link href="/?category=component" className="nav-link">
            COMPONENTS
          </Link>
        </div>

        <div className="nav-actions">
          {/* Actions kept for visual consistency */}
          <div className="nav-icon">
            <Link href="/">✕</Link>
          </div>
        </div>
      </nav>

      {/* Profile Content */}
      <main
        className="hero-section"
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="avatar-stack" style={{ marginBottom: "2rem" }}>
          <img
            src="/placeholder-user.jpg"
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "4px solid #000",
            }}
          />
        </div>

        <h1
          className="hero-headline"
          style={{ fontSize: "3rem", lineHeight: "1" }}
        >
          GUEST <span className="hero-headline-highlight">USER</span>
        </h1>

        <p
          className="hero-subtext"
          style={{ maxWidth: "500px", margin: "1rem auto" }}
        >
          Welcome to HULO.STORE. You are browsing as a guest. <br />
          We operate as a static store with direct WhatsApp checkout. No account
          required.
        </p>

        <div className="cta-buttons">
          <Link href="/" className="btn-primary hover-lift">
            CONTINUE SHOPPING
          </Link>
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            border: "2px dashed #000",
            borderRadius: "12px",
            maxWidth: "600px",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            How it works
          </h3>
          <ul
            style={{
              textAlign: "left",
              listStyle: "none",
              padding: 0,
              
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>1. Browse:</strong> Find the code or script you need.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>2. Click Buy:</strong> Hit the "Buy Now" button.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>3. WhatsApp:</strong> Send the pre-filled message.
            </li>
            <li>
              <strong>4. Delivery:</strong> Receive download link instantly
              after payment.
            </li>
          </ul>
        </div>
      </main>

      
    </>
  );
}
