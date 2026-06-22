// 🎯 src/data/constants.js
import rawProducts from "./products.json"; 
import { imageMaps } from "./imagesData"; 

// 🎨 PREMIUM COLOR PALETTE (Luxury Theme)
export const colors = {
  primary: "#C28B1E",       // ✨ Premium Dark Gold
  primaryDark: "#3D271D",   // Rich Dark Espresso Chocolate
  primaryLight: "#F4EFE6",  // Light Sand / Beige
  accent: "#AC1A44",        // 🛑 Deep Crimson / Magenta
  bg: "#FBF7F0",            // 📜 Luxury Soft Ivory Cream
  white: "#FFFFFF",
  text: "#3D271D",
  textMuted: "#664638",     
  border: "#E2E8F0",
  shadow: "rgba(0, 0, 0, 0.03)",
};

// 🔄 JSON data mein images ko attach karna dynamically
export const products = rawProducts.map(p => {
  const map = imageMaps[p.imageKey] || imageMaps.necklace; // Fallback agar image na mile
  return {
    ...p,
    imageUrl: map.main,
    images: map.angles
  };
});

export const navLinks = [
  { key: "home", href: "/#home", label: "HOME" },
  { key: "about", href: "/#about", label: "ABOUT US" },
  { key: "products", href: "/#products", label: "PRODUCTS" },
  { key: "cart", href: "/cart", isCart: true, label: "CART" },
  { key: "contact", href: "/#contact", label: "CONTACT" },
];

export const features = [
  { key: "premium", icon: "✨", title: "Premium Quality", desc: "100% authentic materials and certified wholesale products." },
  { key: "wholesale", icon: "💼", title: "Wholesale Rates", desc: "Best competitive prices directly for businesses and shops." },
  { key: "delivery", icon: "🚚", title: "Safe Shipping", desc: "Secure and insured delivery across all major commercial areas." },
];

export function getSortedProducts(list = products) {
  return [...list].sort((a, b) => Number(b.available) - Number(a.available));
}

export const productFilters = [
  { id: "all", label: "All Items" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
];

export const contactInfo = {
  phone: "+03324840967",
  whatsapp: "+03324840967",
  address: "Sultan town raiwind road Lahore street 1 house 15-A",
  email: "Hadia.shahid777@gmail.com",
  businessHours: "Monday to Saturday — 11 AM to 9 PM Available",
};

export const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];