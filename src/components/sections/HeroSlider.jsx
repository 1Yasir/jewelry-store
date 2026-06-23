import { useCallback, useEffect, useMemo, useState } from "react";
import { products } from "../../data/siteData"; 
import { useCart } from "../../context/CartContext";
import Button from "../common/Button";

const INTERVAL_MS = 4000;

export default function HeroSlider() {
  const { addToCart, openCart } = useCart();

  // 🟢 Dynamic Filter: Sirf wahi products ayenge jahan showInSlider true hai aur stock/available hain
  const slides = useMemo(() => {
    return products
      .filter((p) => p.showInSlider && p.available)
      .map((product) => {
        // 🎯 Fix: Check karo agar images array aur featuredImageIndex mojood hai, to wahi photo slider par lagao
        const sliderImage = product.images && product.images.length > 0
          ? product.images[product.featuredImageIndex ?? 0]
          : product.imageUrl;

        return {
          id: product.id,
          badge: product.badge || "✨ Premium",
          title: product.name ? product.name.split(" ").slice(0, 2).join(" ") : "Featured", 
          highlight: product.name ? product.name.split(" ").slice(2).join(" ") : "Product", 
          // 🛑 CRASH FIX HERE: Optional check for description
          subtitle: product.desc ? (product.desc.substring(0, 120) + "...") : "Premium quality product built for your elegant lifestyle.",
          theme: "hero-slider__slide--dynamic",
          imageUrl: sliderImage, 
          product: product
        };
      });
  }, []);

  const slideCount = slides.length;
  const extendedSlides = slideCount > 1 ? [...slides, slides[0]] : slides;

  const [trackIndex, setTrackIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(
    () => typeof document !== "undefined" && !document.hidden
  );

  const activeIndex = slideCount > 0 ? trackIndex % slideCount : 0;

  useEffect(() => {
    setTrackIndex(0);
    setEnableTransition(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setEnableTransition(true));
    });
  }, [slideCount]);

  useEffect(() => {
    const handleVisibility = () => {
      const visible = !document.hidden;
      setIsTabVisible(visible);

      if (!visible) {
        setIsPaused(true);
        return;
      }

      if (slideCount > 0) {
        setTrackIndex((prev) => prev % slideCount);
      }
      setEnableTransition(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          setIsPaused(false);
        });
      });
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [slideCount]);

  useEffect(() => {
    if (isPaused || !isTabVisible || slideCount <= 1) return;

    const timer = setInterval(() => {
      setEnableTransition(true);
      setTrackIndex((prev) => prev + 1);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, isTabVisible, slideCount]);

  const handleTransitionEnd = useCallback(
    (event) => {
      if (
        event.target !== event.currentTarget ||
        event.propertyName !== "transform" ||
        slideCount <= 1
      ) {
        return;
      }

      if (trackIndex === slideCount) {
        setEnableTransition(false);
        setTrackIndex(0);
      }
    },
    [trackIndex, slideCount]
  );

  useEffect(() => {
    if (!enableTransition && trackIndex === 0) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [enableTransition, trackIndex]);

  const goToSlide = (index) => {
    setEnableTransition(true);
    setTrackIndex(index);
  };

  const handleOrderAction = (currentSlide) => {
    const product = currentSlide.product;
    if (product && product.available && product.stockCount > 0) {
      addToCart(product, 1);
      openCart();
    }
  };

  if (slideCount === 0) {
    return null; 
  }

  const translateValue = -(trackIndex * 100);

  return (
    <section
      id="home"
      className="hero-slider"
      aria-label="Featured banners"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-slider__viewport">
        <div
          className={`hero-slider__track ${!enableTransition ? "hero-slider__track--instant" : ""}`}
          style={{ transform: `translateX(${translateValue}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => {
            const productDiscount = slide.product?.discountPercentage ?? 0;
            const hasDiscount = productDiscount > 0;

            return (
              <article
                key={`${slide.id}-${index}`}
                className={`hero-slider__slide ${slide.theme}`}
                aria-hidden={index !== trackIndex}
              >
                <div className="container hero-slider__content">
                  <div className="hero-slider__text">
                    <div className="hero-slider__badge">
                      <span className="hero-slider__badge-dot" />
                      {slide.badge}
                    </div>
                    <h1 className="hero-slider__title">
                      {slide.title} <span>{slide.highlight}</span>
                    </h1>
                    <p className="hero-slider__subtitle">{slide.subtitle}</p>
                    
                    <div className="hero-slider__actions">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => handleOrderAction(slide)}
                      >
                        Order Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="hero-slider__visual" aria-hidden="true">
                    {hasDiscount && (
                      <span className="hero-slider__discount-tag">
                        🔥 {productDiscount}% OFF
                      </span>
                    )}
                    <img 
                      src={slide.imageUrl} 
                      alt={slide.title} 
                      className="hero-slider__product-img" 
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {slideCount > 1 && (
        <div className="hero-slider__dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-slider__dot ${index === activeIndex ? "hero-slider__dot--active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}