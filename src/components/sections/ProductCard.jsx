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
  emoji,        
  imageUrl,      
  images = [],   
  featuredImageIndex = 0, 
  available = true,
  discountPercentage = 0,
}) {
  const { addToCart, openCart } = useCart();
  const [selectedKg] = useState(kgOptions[0] ?? 1);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  // 🟢 SMART IMAGE LOGIC: Agar images array mojood hai to featured index uthao, nahi to single imageUrl par jao
  const displayImage = images && images.length > 0 
    ? images[featuredImageIndex] 
    : imageUrl;

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
    addToCart({ id, name, emoji, imageUrl: imageFailed ? null : displayImage, unitPrice, unit, unitType }, quantity);
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

 const imageBlock = (
    <div className="product-card__image">
      {/* 🎯 FIXED: Badge sirf tabhi dikhega jab discount 0 se zyada ho aur product available ho */}
      {available && discountPercentage > 0 && (
        <span
          className="product-card__badge"
          style={{ zIndex: 10 }}
        >
          {discountPercentage}% OFF
        </span>
      )}

      {/* ⚠️ Agar product available na ho, to aap chahein to "Coming Soon" ka badge dikha sakte hain */}
      {!available && (
        <span className="product-card__badge product-card__badge--unavailable" style={{ zIndex: 10 }}>
          Coming Soon
        </span>
      )}

      {displayImage && !imageFailed ? (
        <img
          src={displayImage}
          alt={imageLabel || name}
          className="product-card__img"
          onError={() => setImageFailed(true)} 
          loading="lazy"
          width= "300"
          height =  "300"
        />
      ) : (
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
      
      <div className="product-card__price-wrapper">
        {hasDiscount ? (
          <>
            <p className="product-card__price" style={{ margin: 0, fontWeight: "bold" }}>
              {isKgProduct ? `${formatPrice(finalPrice)} (${selectedKg} ${unit})` : `${formatPrice(finalPrice)}`}
            </p>
            <span className="product-card__old-price" style={{ textDecoration: "line-through", color: "#888", fontSize: "0.85rem" }}>
              {isKgProduct ? formatPrice(basePrice) : `${formatPrice(unitPrice)}`}
            </span>
          </>
        ) : (
          <p className="product-card__price" style={{ margin: 0 }}>
            {isKgProduct ? `${formatPrice(basePrice)} (${selectedKg} ${unit})` : `${formatPrice(unitPrice)}`}
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
        {/* <div className="product-card__footer">{cartControls}</div> */}
      </article>
    );
  }

  return (
    <div className={cardClass}>
      {/* {imageBlock} */}
      <div className="product-card__body">
        {bodyBlock}
        <div className="product-card__footer">{cartControls}</div>
      </div>
    </div>
  );
}