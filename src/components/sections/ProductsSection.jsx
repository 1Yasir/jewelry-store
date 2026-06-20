import { useMemo, useState } from "react";
import { products, productFilters, getSortedProducts } from "../../data/siteData";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    const list =
      activeFilter === "all"
        ? products
        : products.filter((p) => p.category === activeFilter);
    return getSortedProducts(list);
  }, [activeFilter]);

  return (
    <section id="products" className="section">
      <div className="container">
        {/* ✨ t() ko hata kar simple jewelry static text daal diya */}
        <SectionTitle
          label="Our Collection"
          title="Premium Wholesale Jewelry"
          desc="Browse our premium rings, necklaces, and bangles. Available for wholesale and custom retail orders with competitive pricing."
        />

        <div className="products__filters">
          {/* ✨ t() translation ko hata kar direct filter.label se naam uthaya jo siteData.js mein diya hai */}
          {productFilters.map(({ id, label }) => (
            <button
              key={id}
              className={`filter-btn ${activeFilter === id ? "filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}