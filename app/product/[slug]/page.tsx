"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/lib/products";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [product, setProduct] = useState<(typeof products)[0] | null>(null);

  // Fetch product based on slug
  useEffect(() => {
    if (params.slug) {
      const foundProduct = products.find((p) => p.slug === params.slug);
      if (foundProduct) {
        setProduct(foundProduct);
        setActiveImage(foundProduct.mainImage);
      } else {
        // Handle 404 or redirect in a real app
        console.error("Product not found");
      }
    }
  }, [params.slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading Product...</p>
      </div>
    );
  }

  const handleBuyNow = () => {
    const phoneNumber = "911234567890"; // Dummy number as requested
    const message = `Hi, I want to buy: ${product.name} - ${product.id}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Top Marquee Bar */}
      <div className="marquee-bar">
        <div className="marquee-container">
          <div className="marquee-content">
            INSTANT DELIVERY ON ALL APPS • NEW DROP: SAAS KITS VOL. 2 • SECURE
            CODEBASE • JOIN THE DISCORD FOR EARLY ACCESS • INSTANT DELIVERY ON
            ALL APPS • NEW DROP: SAAS KITS VOL. 2 • SECURE CODEBASE • JOIN THE
            DISCORD FOR EARLY ACCESS •
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <div className="logo">
          <Link href="/">
            HULO<span>.</span>STORE
          </Link>
          <div className="beta-badge">BETA</div>
        </div>

        <div className="nav-links">
          <Link href="/#trending" className="nav-link">
            LATEST DROPS
          </Link>
          <Link href="/#trending" className="nav-link">
            WEB APPS
          </Link>
          <Link href="/#trending" className="nav-link">
            MOBILE
          </Link>
          <Link href="/#trending" className="nav-link">
            COMPONENTS
          </Link>
        </div>

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
          <div
            className="search-container"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              placeholder="Search for products..."
              className="search-input"
              autoFocus
            />
            <button
              className="search-close"
              onClick={() => setSearchOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Product Detail Section */}
      <main className="product-detail-section">
        <div className="product-detail-container">
          {/* Product Image & Gallery */}
          <div
            className="product-detail-image-container"
            style={{ flex: "1.2" }}
          >
            <div className="product-detail-image">
              <img src={activeImage || "/placeholder.svg"} alt={product.name} />
            </div>

            {/* Simple Gallery Strip - Reusing styling concepts */}
            {product.gallery.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "1rem",
                  overflowX: "auto",
                  paddingBottom: "5px",
                }}
              >
                {[product.mainImage, ...product.gallery].map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "12px",
                      border:
                        activeImage === img
                          ? "2px solid #000"
                          : "1px solid #ddd",
                      overflow: "hidden",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt="Thumbnail"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-detail-info">
            <div className="product-badge new">
              {product.category.toUpperCase()}
            </div>
            <h1 className="product-detail-title">{product.name}</h1>
            <div className="product-detail-price">
              ${product.price.toFixed(2)}
            </div>

            <p className="product-detail-description">{product.description}</p>

            {/* Tech Stack Info - Styled like Size Selection */}
            <div className="size-selection">
              <label className="size-label">TECH STACK</label>
              <div
                className="size-options"
                style={{ flexWrap: "wrap", gap: "8px" }}
              >
                {product.techStack.map((tech) => (
                  <button
                    key={tech}
                    className="size-button"
                    style={{
                      width: "auto",
                      padding: "0 12px",
                      cursor: "default",
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Extra Details */}
            <div
              className="product-extras"
              style={{
                marginTop: "1rem",
                marginBottom: "1.5rem",
                fontSize: "0.9rem",
                color: "#666",
              }}
            >
              {product.liveLink && (
                <div style={{ marginBottom: "0.5rem" }}>
                  <strong>Live Demo: </strong>
                  <a
                    href={product.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-black"
                  >
                    View Live Preview
                  </a>
                </div>
              )}
              <div>
                <strong>Delivery: </strong> {product.deliveryTime}
              </div>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="btn-primary hover-lift"
              style={{ textAlign: "center", display: "block", width: "100%" }}
            >
              BUY NOW (WHATSAPP)
            </button>
          </div>
        </div>
      </main>

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
    </>
  );
}
