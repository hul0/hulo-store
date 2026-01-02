"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/lib/products";

export default function ShopPage() {
  // --- State for Filters ---
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [navSearchOpen, setNavSearchOpen] = useState(false);

  // --- Derived Data ---
  const allCategories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    []
  );
  const allTechStacks = useMemo(() => {
    const stacks = new Set<string>();
    products.forEach((p) => p.techStack.forEach((t) => stacks.add(t)));
    return Array.from(stacks).sort();
  }, []);

  // --- Filtering Logic ---
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(product.category);
        const matchesTech =
          selectedTechStacks.length === 0 ||
          product.techStack.some((stack) => selectedTechStacks.includes(stack));
        const matchesPrice =
          product.price >= priceRange.min && product.price <= priceRange.max;

        return matchesSearch && matchesCategory && matchesTech && matchesPrice;
      })
      .sort((a, b) => {
        if (sortOption === "price-asc") return a.price - b.price;
        if (sortOption === "price-desc") return b.price - a.price;
        return Number(b.id) - Number(a.id);
      });
  }, [
    searchQuery,
    selectedCategories,
    selectedTechStacks,
    priceRange,
    sortOption,
  ]);

  // --- Handlers ---
  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleTechStack = (stack: string) => {
    setSelectedTechStacks((prev) =>
      prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedTechStacks([]);
    setPriceRange({ min: 0, max: 1000 });
    setSortOption("newest");
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
            DISCORD FOR EARLY ACCESS • INSTANT DELIVERY ON ALL APPS • NEW DROP:
            SAAS KITS VOL. 2 • SECURE CODEBASE • JOIN THE DISCORD FOR EARLY
            ACCESS • INSTANT DELIVERY ON ALL APPS • NEW DROP: SAAS KITS VOL. 2 •
            SECURE CODEBASE • JOIN THE DISCORD FOR EARLY ACCESS •
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
          <Link href="/" className="nav-link">
            HOME
          </Link>
          <Link href="/shop" className="nav-link active">
            SHOP ALL
          </Link>
          <Link
            href="/shop?category=web-app"
            onClick={() => setSelectedCategories(["Web App"])}
            className="nav-link"
          >
            WEB APPS
          </Link>
        </div>

        <div className="nav-actions">
          <div
            className="nav-icon"
            onClick={() => setNavSearchOpen(!navSearchOpen)}
          >
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
          <Link href="/cart" className="nav-icon relative">
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

      {/* Top Nav Search Overlay */}
      {navSearchOpen && (
        <div className="search-overlay" onClick={() => setNavSearchOpen(false)}>
          <div
            className="search-container"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              placeholder="Quick Search..."
              className="search-input"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setNavSearchOpen(false);
              }}
            />
            <button
              className="search-close"
              onClick={() => setNavSearchOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Shop Content */}
      <section className="trending-section" style={{ minHeight: "100vh" }}>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          {/* Search Widget */}
          <div>
            <div className="trending-header">
              <h3>SEARCH</h3>
            </div>
            <input
              type="text"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="btn-secondary w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#ccff00] focus:bg-[#ccff00]"
            />
          </div>
          {/* Header Area */}
          <div className="trending-header">
            <h3>SHOP ALL</h3>
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>
              {filteredProducts.length} PRODUCTS
            </span>
          </div>
          {/* Wrapping Div for filter items */}
          <div className=" flex flex-col md:flex-col gap-8">
            {/* Mobile Filter Toggle */}
            <button
              className="hidden btn-primary hover-lifts w-full"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              {mobileFiltersOpen ? "CLOSE FILTERS" : "SHOW FILTERS"}
            </button>

            {/* Sidebar Filters */}
            <aside
              className={`flex-shrink-0 space-y-8 ${
                mobileFiltersOpen ? "block" : "hidden block"
              }`}
              style={{ borderRight: "2px solid transparent" }} // Placeholder for visual separation if needed
            >
              <div className="flex flex-col sm:flex sm:flex-row  w-full h-full gap-8 p-3 m-3 flex-wrap">
                {/* Sort Widget */}
                <div>
                  <h4 className="font-black text-2xl mb-4 uppercase">
                    Sort By
                  </h4>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full btn-secondary border-2 border-black bg-white p-3 font-mono text-sm focus:outline-none cursor-pointer hover:bg-gray-50"
                  >
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-black text-2xl mb-4 uppercase">Price</h4>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          min: Number(e.target.value),
                        })
                      }
                      className="w-full btn-secondary border-2 border-black p-2 font-mono text-center text-sm"
                    />
                    <span className="font-bold">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          max: Number(e.target.value),
                        })
                      }
                      className="w-full btn-secondary border-2 border-black p-2 font-mono text-center text-sm"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-black text-2xl mb-4 uppercase">
                    Categories
                  </h4>
                  <div className="flex flex-col gap-2">
                    {allCategories.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-3 cursor-pointer group select-none"
                      >
                        <div
                          className={`w-5 h-5 border-3 border-black flex items-center justify-center transition-all ${
                            selectedCategories.includes(cat)
                              ? "bg-black"
                              : "bg-white group-hover:bg-[#ccff00]"
                          }`}
                        >
                          {selectedCategories.includes(cat) && (
                            <div className="w-2.5 h-2.5 bg-white" />
                          )}
                        </div>
                        <span className="font-bold text-xl uppercase group-hover:translate-x-1 transition-transform">
                          {cat}
                        </span>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="hidden"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tech Stacks */}
                <div>
                  <h4 className="font-black text-2xl mb-4 uppercase">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 ">
                    {allTechStacks.map((stack) => (
                      <button
                        key={stack}
                        onClick={() => toggleTechStack(stack)}
                        className={`text-xl btn-tech hover-lift font-bold border-2 border-black uppercase transition-all
                      ${
                        selectedTechStacks.includes(stack)
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-[#ccff00]"
                      }
                                `}
                      >
                        {stack}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Reset */}
              <button
                onClick={clearFilters}
                className="w-full btn-primary hover-lift text-sm"
                style={{ marginTop: "1rem" }}
              >
                RESET FILTERS
              </button>
            </aside>
          </div>
          {/* Product Grid Area */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    className="product-card btn-tech hover-lift hover:bg-[#ccff00] block"
                  >
                    <div className="product-image relative">
                      {product.isNew && (
                        <span className="product-badge new">NEW</span>
                      )}
                      {product.isSale && (
                        <span className="product-badge sale">SALE</span>
                      )}
                      <img
                        src={product.mainImage || "/placeholder.svg"}
                        alt={product.name}
                      />
                      {/* Tech Stack Overlay on Card (Optional visual flair consistent with brand) */}
                      <div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-1 flex-wrap">
                          {product.techStack.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="bg-black text-white text-[10px] px-1 font-bold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <h4>{product.name}</h4>
                    <p>
                      {product.originalPrice && (
                        <span className="price-old">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      ${product.price.toFixed(2)}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="border-2 border-dashed border-black p-12 text-center bg-gray-50">
                <h2 className="text-2xl font-black uppercase mb-4 opacity-50">
                  NO RESULTS FOUND
                </h2>
                <button
                  onClick={clearFilters}
                  className="btn-primary hover-lift"
                >
                  CLEAR FILTERS
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

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
