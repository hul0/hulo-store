"use client"

import type React from "react"

import { useState, useMemo, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { products } from "@/lib/products"

// Wrap the main content in Suspense for useSearchParams
function HomeContent() {
  const searchParams = useSearchParams()
  const categoryFilter = searchParams.get("category")
  
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchOpen(false)
  }

  // Filter products based on Category (URL) and Search (Local State)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = categoryFilter 
        ? product.category.toLowerCase().replace(" ", "-") === categoryFilter.toLowerCase()
        : true
      
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [categoryFilter, searchQuery])

  // Get trending products (fallback to first 4 if no filter)
  const displayProducts = filteredProducts.length > 0 ? filteredProducts.slice(0, 4) : []

  return (
    <>
      {/* Top Marquee Bar */}
      <div className="marquee-bar">
        <div className="marquee-container">
          <div className="marquee-content">
            INSTANT DELIVERY ON ALL APPS • NEW DROP: SAAS KITS VOL. 2 • SECURE CODEBASE • JOIN THE DISCORD FOR EARLY
            ACCESS • INSTANT DELIVERY ON ALL APPS • NEW DROP: SAAS KITS VOL. 2 • SECURE CODEBASE • JOIN THE DISCORD FOR
            EARLY ACCESS •
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            GZ<span>.</span>CODE
          </Link>
          <div className="beta-badge">BETA</div>
        </div>

        {/* Links - Pointing to Shop Page for Better UX on Filtering */}
        <div className="nav-links">
          <Link href="/shop" className="nav-link">
            LATEST DROPS
          </Link>
          <Link href="/shop?category=web-app" className="nav-link">
            WEB APPS
          </Link>
          <Link href="/shop?category=mobile-app" className="nav-link">
            MOBILE
          </Link>
          <Link href="/shop?category=component" className="nav-link">
            COMPONENTS
          </Link>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <div className="nav-icon" onClick={() => setSearchOpen(!searchOpen)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <Link href="/profile" className="nav-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
          <Link href="/cart" className="nav-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge">0</span>
          </Link>
        </div>
      </nav>

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-container" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search for apps, scripts..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </form>
            <button className="search-close" onClick={() => setSearchOpen(false)}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Hero Section */}
      <main className="hero-section">
        {/* Left Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="season-badge">SEASON 01 // DEV COLLECTION</div>

          {/* Headline */}
          <h1 className="hero-headline">
            SHIP CODE
            <br />
            NO <span className="hero-headline-highlight">ERRORS.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtext">
            Premium codebases designed for the next generation of founders. Clean architecture, modern stacks, and zero
            compromises on performance.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Link href="/shop" className="btn-primary hover-lift">
              BROWSE CODE
            </Link>
            <Link href="/shop?category=component" className="btn-secondary hover-lift">
              VIEW COMPONENTS
            </Link>
          </div>

          {/* Social Proof */}
          <div className="social-proof">
            <div className="avatar-stack">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="User" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="User" />
              <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop" alt="User" />
            </div>
            <div>
              <div className="social-proof-title">2k+ Devs</div>
              <div className="social-proof-subtitle">Shipping with GZ.CODE</div>
            </div>
          </div>
        </div>

        {/* Right Visuals (Collage Style) */}
        <div className="hero-visuals">
          {/* Abstract Background Shape */}
          <svg
            className="abstract-shape"
            width="600"
            height="600"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#5D3FD3"
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.6C59,41.7,47.1,49,35.3,55.1C23.5,61.2,11.8,66.1,-0.6,67.1C-12.9,68.1,-25.8,65.2,-37.9,59.2C-50,53.2,-61.3,44.1,-70.5,32.6C-79.7,21.1,-86.8,7.2,-85.1,-6.1C-83.3,-19.4,-72.7,-32.1,-61.6,-41.8C-50.5,-51.5,-38.9,-58.2,-27.1,-66.9C-15.3,-75.6,-3.3,-86.3,10.2,-83.8C23.7,-81.3,30.5,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
            ></path>
          </svg>

          {/* Main Image */}
          <div className="main-image-container">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Code Editor Screen"
            />
            <div className="price-tag">$49.00</div>
          </div>

          {/* Secondary Image (Floating) */}
          <div className="secondary-image">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Dashboard Analytics"
            />
          </div>

          {/* Sticker Graphic */}
          <div className="sticker-graphic">
            <img
              src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Sticker"
            />
            <div className="hot-badge">PRO</div>
          </div>

          {/* Decorative Star */}
          <svg
            className="decorative-star"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="#ccff00"
            stroke="#000"
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
      </main>

      {/* Trending Strip */}
      <section className="trending-section" id="trending">
        <div className="container">
          <div className="trending-header">
            <h3>Trending Scripts</h3>
            <Link href="/shop">See All</Link>
          </div>

          <div className="product-grid">
            {displayProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="product-card hover-lift">
                <div className="product-image">
                  {product.isNew && <span className="product-badge new">NEW</span>}
                  {product.isSale && <span className="product-badge sale">SALE</span>}
                  <img src={product.mainImage || "/placeholder.svg"} alt={product.name} />
                </div>
                <h4>{product.name}</h4>
                <p>
                  {product.originalPrice && <span className="price-old">${product.originalPrice.toFixed(2)}</span>} $
                  {product.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer Strip */}
      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="footer-logo">
            GZ.CODE
          </Link>
          <div className="footer-copyright">© 2026 Gen Z Code. All rights reserved. Ship Fast.</div>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<div style={{minHeight: "100vh", background: "black", color: "white"}}>Loading...</div>}>
      <HomeContent />
    </Suspense>
  )
}