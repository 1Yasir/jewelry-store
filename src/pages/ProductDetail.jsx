import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore"; 
import { db } from "../firebase"; 
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import CartFab from "../components/cart/CartFab";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Button from "../components/common/Button";
import { contactInfo, products } from "../data/siteData";
import { useCart } from "../context/CartContext";

// 🟢 Feature cards data array
const storeFeatures = [
  {
    id: "free-shipping",
    icon: "🚚", // Aap chahein to Lucide icons ya SVG bhi use kar sakte hain
    title: "FREE SHIPPING",
    desc: "On orders above Rs. 1500"
  },
  {
    id: "premium-quality",
    icon: "✨",
    title: "PREMIUM QUALITY",
    desc: "Finest materials & durable finish"
  },
  {
    id: "easy-returns",
    icon: "🔄",
    title: "EASY RETURNS",
    desc: "7 days easy return & exchange"
  },
  {
    id: "customer-support",
    icon: "🎧",
    title: "CUSTOMER SUPPORT",
    desc: "We're here to help you anytime"
  }
];

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const { addToCart, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  // Multi-images array config fallback
  const productImages = product?.images && product.images.length > 0 
    ? product.images 
    : product?.imageUrl ? [product.imageUrl] : [];

  // Features data fallback
  const productFeatures = product?.features && product.features.length > 0
    ? product.features
    : [
        "Premium Gold Finish",
        "Lightweight & Comfortable",
        "Trendy Minimalist Design",
        "Suitable for Casual & Formal Wear",
        "Perfect Gift Choice"
      ];

  const [activeImage, setActiveImage] = useState("");
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center center", transform: "scale(1)" });

  useEffect(() => {
    if (productImages.length > 0) {
      setActiveImage(productImages[0]);
    }
  }, [productId, product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    const q = query(collection(db, "feedbacks"), where("approved", "==", true));
    
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedReviews = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          rating: doc.data().rating,
          comment: doc.data().review, 
        }));
        setReviews(fetchedReviews);
        setLoadingReviews(false);
      },
      (err) => {
        console.error("Error loading reviews for product detail:", err);
        setLoadingReviews(false);
      }
    );

    return unsubscribe;
  }, []);

  if (!product) {
    return <Navigate to="/" replace />;
  }
const whatsappNumber = contactInfo.whatsapp.replace(/\D/g, "");

// ✨ Premium Product Message Format (English)
const detailProductMessage = `Hello HSM Jewellers! ✨\n\nI am checking out this item on your website:\n📦 *Product:* ${product.name}\n🔢 *Quantity:* ${quantity} ${product.unit || "pair"}\n\nKindly guide me with more details regarding this. Thank you! 🙏`;

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(detailProductMessage)}`;
  const discountedPrice = product.discountPercentage > 0
    ? product.originalPrice * (1 - product.discountPercentage / 100)
    : product.originalPrice;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    const maxQuantity = product.stockCount > 0 ? product.stockCount : 999;
    const newQuantity = Math.max(1, Math.min(value, maxQuantity));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (product.stockCount === 0) return;
    addToCart(product, quantity);
    openCart();
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(1.8)", 
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transformOrigin: "center center", transform: "scale(1)" });
  };

  const isOutOfStock = product.stockCount === 0;

  return (
    <div className="poultry product-detail-page">
      <NavBar />

      <header className="product-detail__hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: product.name, to: `/product/${productId}` },
            ]}
          />
        </div>
        <div className="container product-detail__hero-inner">
          <span className="product-detail__badge">{product.badge}</span>
          
          <div className="product-detail__hero-grid">
            
            {/* ================= LEFT SIDE: CONTENT DETAILS ================= */}
            <div>
              {/* <p className="product-detail__label">DogarVision Specialty</p> */}
              <h1 className="product-detail__title">{product.name}</h1>
              <p className="product-detail__desc">{product.desc}</p>
              
              {/* 🟢 Clean Classes applied for Features Box */}
              <div className="product-detail__features-box">
                <h4 className="product-detail__features-title">
                  ⭐ Features
                </h4>
                <ul className="product-detail__features-list">
                  {productFeatures.map((feature, i) => (
                    <li key={i} className="product-detail__features-item">
                      <span className="product-detail__features-bullet">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Section with Discount */}
              <div className="product-detail__price-section">
                {product.discountPercentage > 0 && (
                  <>
                    <span className="product-detail__original-price">Rs. {product.originalPrice} / {product.unit}</span>
                    <span className="product-detail__discount-badge">{product.discountPercentage}% OFF</span>
                  </>
                )}
                <p className="product-detail__price">
                  Rs. {discountedPrice.toFixed(0)} / {product.unit}
                </p>
              </div>

              {/* Stock Management */}
              <div className="product-detail__stock-section">
                {isOutOfStock ? (
                  <span className="product-detail__stock-badge product-detail__stock-badge--out">
                    Out of Stock
                  </span>
                ) : (
                  <span className="product-detail__stock-badge product-detail__stock-badge--in">
                    In Stock ({product.stockCount} remaining)
                  </span>
                )}
              </div>
              

              {/* Quantity Controller */}
              <div className="product-detail__quantity-section">
                <label className="product-detail__quantity-label">Quantity:</label>
                <div className="product-detail__quantity-controls">
                  <button
                    type="button"
                    className="product-detail__quantity-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={isOutOfStock}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="product-detail__quantity-input"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    max={product.stockCount > 0 ? product.stockCount : 999}
                    disabled={isOutOfStock}
                  />
                  <button
                    type="button"
                    className="product-detail__quantity-btn"
                    onClick={() => setQuantity(Math.min(product.stockCount > 0 ? product.stockCount : 999, quantity + 1))}
                    disabled={isOutOfStock}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="product-detail__actions">
                <Button
                  type="button"
                  variant="primary"
                  onClick={handleAddToCart}
                  disabled={isOutOfStock}
                >
                  {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                </Button>
                {/* <Button href={whatsappUrl} variant="accent">
                  Order via WhatsApp
                </Button>
                <Link to="/" className="btn btn--outline">
                  Back to Home
                </Link> */}
              </div>
            </div>

            {/* ================= RIGHT SIDE: PREMIUM GALLERY & ZOOM ENGINE ================= */}
            <div className="product-detail__gallery-wrapper">
              <div 
                className="product-detail__visual-viewport"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ ...zoomStyle }}
              >
                {activeImage ? (
                  <img src={activeImage} alt={product.name} />
                ) : (
                  <div className="product-detail__emoji-fallback">
                    {product.emoji || "✨"}
                  </div>
                )}
              </div>

              {productImages.length > 1 && (
                <div className="product-detail__thumbnails-tray">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={activeImage === img ? "active-thumb" : ""}
                    >
                      <img src={img} alt={`Angle ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* // Features Banner" (Free Shipping, Premium Quality, Easy Returns, Customer Support) */}
<section className="store-features-banner">
      <div className="store-features-container">
        {storeFeatures.map((feature) => (
          <div key={feature.id} className="store-feature-card">
            <div className="store-feature-card__icon-wrapper">
              <span className="store-feature-card__icon">{feature.icon}</span>
            </div>
            <div className="store-feature-card__content">
              <h4 className="store-feature-card__title">{feature.title}</h4>
              <p className="store-feature-card__desc">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
      {/* Customer Reviews Section */}
      <section className="section product-detail__reviews">
        <div className="container">
          <h2 className="product-detail__section-title">
            Customer Reviews
          </h2>
          <div className="product-detail__reviews-list">
            {loadingReviews ? (
              <p className="feedback__status">Loading database reviews...</p>
            ) : reviews.length === 0 ? (
              <p className="feedback__status" style={{ gridColumn: "1 / -1", width: "100%" }}>No reviews yet. Be the first to share your experience on home page!</p>
            ) : (
              reviews.map((review) => (
                <article key={review.id} className="product-detail__review-card">
                  <div className="product-detail__review-header">
                    <h3 className="product-detail__review-name">{review.name}</h3>
                    <div className="product-detail__review-rating">
                      {Array(review.rating).fill("⭐").join("")}
                    </div>
                  </div>
                  <p className="product-detail__review-comment">{review.comment}</p>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="product-detail__cta">
        <div className="container product-detail__cta-inner">
          <h2 className="product-detail__cta-title">Ready to order?</h2>
          <p className="product-detail__cta-desc">
            Message us on WhatsApp for pricing, bulk orders, and fast delivery.
          </p>
          <div className="product-detail__actions product-detail__actions--center">
            <Button href={whatsappUrl} variant="accent">
              Order via WhatsApp
            </Button>
            <Link to="/" className="btn btn--outline">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CartFab />
    </div>
  );
}