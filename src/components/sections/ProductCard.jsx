import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Button from "../common/Button";

function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

export default function ProductCard({
  id,
  name,          
  desc,          
  badge,         
  imageLabel,    
  price,
  detailPath,
  unitPrice,
  unit,
  unitType,
  kgOptions = [],
  emoji,         // ✨ Fallback emoji prop
  imageUrl,      // 🟢 FIXED: Naya image URL prop liya
  available = true,
  discountPercentage = 0,
}) {
  const { addToCart, openCart } = useCart();
  const [selectedKg] = useState(kgOptions[0] ?? 1);
  const [addedFeedback, setAddedFeedback] = useState(false);
  
  // 🟢 FIXED: Agar image crash ho jaye ya na mile, to handle karne ke liye local state lagayi
  const [imageFailed, setImageFailed] = useState(false);

  // Status badge dynamic text set karne ke liye
  const currentBadge = available ? (badge || "Best Seller") : "Coming Soon";

  // Global price logic
  const hasDiscount = discountPercentage > 0;
  const isKgProduct = unitType === "kg";
  
  const multiplier = isKgProduct ? selectedKg : 1;
  const basePrice = unitPrice * multiplier;
  
  const finalPrice = hasDiscount 
    ? basePrice - (basePrice * discountPercentage) / 100 
    : basePrice;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!available) return;

    const quantity = isKgProduct ? selectedKg : 1;
    // 🟢 FIXED: Cart Context mein imageUrl bhi pass kar di taake cart list mein photo aaye
    addToCart({ id, name, emoji, imageUrl: imageFailed ? null : imageUrl, unitPrice, unit, unitType }, quantity);
    openCart();
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);
  };

  const handleCardClick = (e) => {
    if (!available) {
      e.preventDefault();
      alert(`Maazrat! ${name} abhi dastayab nahi hai. Yeh jald hi un-qarib lounch ki jaye gi.`);
    }
  };

  const cartControls = (
    <div className="product-card__cart-controls">
      <Button
        type="button"
        variant="primary"
        size="sm"
        onClick={handleAddToCart}
        disabled={!available}
        className={addedFeedback ? "product-card__add-btn--added" : ""}
      >
        {addedFeedback ? "✓ Added!" : "Add to Cart"}
      </Button>
    </div>
  );

  // 🟢 FIXED: Image loading fallback logic inject ki
  const imageBlock = (
    <div className="product-card__image">
      <span
        className={`product-card__badge${!available ? " product-card__badge--unavailable" : ""}`}
        style={{ zIndex: 10 }}
      >
        {currentBadge}
      </span>

      {/* Agar imageUrl moujood hai aur crash nahi hui, to asli tasveer dikhao */}
      {imageUrl && !imageFailed ? (
        <img
          src={imageUrl}
          alt={imageLabel || name}
          className="product-card__img"
          onError={() => setImageFailed(true)} // 👈 Agar image path galat ho ya load na ho, to yeh auto par fallback chala dega
         
        />
      ) : (
        /* Fallback: Agar image nahi mili ya fail ho gayi, to background icon/emoji chalega */
        <span className="product-card__emoji">
          {emoji || "✨"}
        </span>
      )}

      {imageFailed && <span className="product-card__image-label">{imageLabel || name}</span>}
    </div>
  );

  const bodyBlock = (
    <>
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__desc">{desc}</p>
      
      <div className="product-card__price-wrapper">
        {hasDiscount ? (
          <>
            <p className="product-card__price" style={{ margin: 0, fontWeight: "bold" }}>
              {isKgProduct ? `${formatPrice(finalPrice)} (${selectedKg} ${unit})` : `${formatPrice(finalPrice)} / ${unit}`}
            </p>
            <span className="product-card__old-price" style={{ textDecoration: "line-through", color: "#888", fontSize: "0.85rem" }}>
              {isKgProduct ? formatPrice(basePrice) : `${formatPrice(unitPrice)} / ${unit}`}
            </span>
            <span className="product-card__discount-badge" style={{ backgroundColor: "#e11d48", color: "#fff", fontSize: "0.75rem", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>
              {discountPercentage}% OFF
            </span>
          </>
        ) : (
          <p className="product-card__price" style={{ margin: 0 }}>
            {isKgProduct ? `${formatPrice(basePrice)} (${selectedKg} ${unit})` : `${formatPrice(unitPrice)} / ${unit}`}
          </p>
        )}
      </div>
    </>
  );

  const cardClass = `product-card${!available ? " product-card--unavailable" : ""}${detailPath ? " product-card--has-detail" : ""}`;

  if (detailPath) {
    return (
      <article className={cardClass}>
        <Link to={detailPath} className="product-card__detail-link" onClick={handleCardClick}>
          {imageBlock}
          <div className="product-card__body product-card__body--linked">
            {bodyBlock}
            <span className="product-card__view-detail">
              {available ? "View Details →" : "Coming Soon"}
            </span>
          </div>
        </Link>
        <div className="product-card__footer">{cartControls}</div>
      </article>
    );
  }

  return (
    <div className={cardClass}>
      {imageBlock}
      <div className="product-card__body">
        {bodyBlock}
        {cartControls}
      </div>
    </div>
  );
}