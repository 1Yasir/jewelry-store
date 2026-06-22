// 🟢 FIXED: Apne naye product ki images import kiye
import hoopsMain from "../assets/products/golden-halo-hoops-1.jpeg";
import hoopsAngle2 from "../assets/products/golden-halo-hoops-2.jpeg";
import hoopsAngle3 from "../assets/products/golden-halo-hoops-3.jpeg";
import hoopsAngle4 from "../assets/products/golden-halo-hoops-4.jpeg";
import hoopsAngle5 from "../assets/products/golden-halo-hoops-5.jpeg";
import necklaceMain from "../assets/products/rose-gold-textured-hoop-earrings-1.jpeg";
import necklaceAngle2 from "../assets/products/rose-gold-textured-hoop-earrings-2.jpeg";
import necklaceAngle3 from "../assets/products/rose-gold-textured-hoop-earrings-3.jpeg";
import necklaceAngle4 from "../assets/products/rose-gold-textured-hoop-earrings-4.jpeg";
import necklaceAngle5 from "../assets/products/rose-gold-textured-hoop-earrings-5.jpeg";


export const colors = {
  primary: "#D4AF37",       // ✨ Jewelry ke liye Metallic Gold color
  primaryDark: "#AA7C11",   // Dark Gold
  primaryLight: "#F3E5AB",  // Soft Cream Gold
  accent: "#1E293B",        // Royal Slate (Dark Contrast)
  bg: "#FAFAFA",
  white: "#FFFFFF",
  text: "#0F172A",
  textMuted: "#475569",
  border: "#E2E8F0",
  shadow: "rgba(0, 0, 0, 0.05)",
};

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

export const products = [
  {
    id: "golden-halo-hoop-earrings",
    category: "earrings",
    name: "Golden Halo Hoop Earrings",
    desc: "Elegant and timeless, these Golden Halo Hoop Earrings are designed to add a touch of sophistication to every outfit. Their sleek circular design and radiant gold finish make them perfect for daily wear as well as special occasions. Lightweight, stylish, and easy to pair with any look, these hoops are a must-have addition to your jewelry collection.",
    price: "Rs. 500 / pair", 
    unitPrice: 500,
    originalPrice: 500,
    unit: "pair",
    unitType: "unit",
    badge: "New Launch",
    imageLabel: "Halo Hoops",
    features: [
      "Premium Gold Finish",
      "Lightweight & Comfortable",
      "Trendy Minimalist Design",
      "Suitable for Casual & Formal Wear",
      "Perfect Gift Choice"
    ],
    imageUrl: hoopsMain, 
    emoji: "✨", 
    images: [hoopsMain, hoopsAngle2, hoopsAngle3, hoopsAngle4, hoopsAngle5], 
    available: true,
    stockCount: 15,
    discountPercentage: 10,
    detailPath: "/product/golden-halo-hoop-earrings",
    showInSlider: true, 
    featuredImageIndex: 2, // Card par teesri image (hoopsAngle3) show hogi
  },
  {
    id: "celestial-layered-pendant-necklace",
    category: "necklaces", 
    name: "Celestial Layered Pendant Necklace",
    desc: "Elevate your style with our beautifully crafted Celestial Layered Necklace. Featuring delicate layered chains adorned with a charming star, crescent moon, and elegant turquoise-inspired pendant, this necklace blends timeless beauty with modern sophistication. Perfect for everyday wear or special occasions, it adds a graceful touch to any outfit.",
    price: "Rs. 899 / piece", 
    unitPrice: 899,
    originalPrice: 1099,
    unit: "piece",
    unitType: "unit",
    badge: "10% OFF",
    imageLabel: "Celestial Necklace",
    features: [
      "Trendy layered design",
      "Star & moon charm details",
      "Elegant turquoise-style centerpiece",
      "Lightweight and comfortable",
      "Perfect for daily wear & gifting",
      "Premium gold-tone finish"
    ],
    imageUrl: necklaceMain, 
    emoji: "✨", 
    images: [necklaceMain, necklaceAngle2, necklaceAngle3, necklaceAngle4, necklaceAngle5], 
    available: true,
    stockCount: 10, 
    discountPercentage: 10,
    detailPath: "/product/celestial-layered-pendant-necklace",
    showInSlider: true, 
    featuredImageIndex: 0, // Card par pehli photo show hogi
  },
   {
    id: "celestial-layered-pendant-necklace",
    category: "necklaces", 
    name: "Celestial Layered Pendant Necklace",
    desc: "Elevate your style with our beautifully crafted Celestial Layered Necklace. Featuring delicate layered chains adorned with a charming star, crescent moon, and elegant turquoise-inspired pendant, this necklace blends timeless beauty with modern sophistication. Perfect for everyday wear or special occasions, it adds a graceful touch to any outfit.",
    price: "Rs. 899 / piece", 
    unitPrice: 899,
    originalPrice: 1099,
    unit: "piece",
    unitType: "unit",
    badge: "10% OFF",
    imageLabel: "Celestial Necklace",
    features: [
      "Trendy layered design",
      "Star & moon charm details",
      "Elegant turquoise-style centerpiece",
      "Lightweight and comfortable",
      "Perfect for daily wear & gifting",
      "Premium gold-tone finish"
    ],
    imageUrl: necklaceMain, 
    emoji: "✨", 
    images: [necklaceMain, necklaceAngle2, necklaceAngle3, necklaceAngle4, necklaceAngle5], 
    available: true,
    stockCount: 10, 
    discountPercentage: 10,
    detailPath: "/product/celestial-layered-pendant-necklace",
    showInSlider: true, 
    featuredImageIndex: 0, // Card par pehli photo show hogi
  },
   {
    id: "celestial-layered-pendant-necklace",
    category: "necklaces", 
    name: "Celestial Layered Pendant Necklace",
    desc: "Elevate your style with our beautifully crafted Celestial Layered Necklace. Featuring delicate layered chains adorned with a charming star, crescent moon, and elegant turquoise-inspired pendant, this necklace blends timeless beauty with modern sophistication. Perfect for everyday wear or special occasions, it adds a graceful touch to any outfit.",
    price: "Rs. 899 / piece", 
    unitPrice: 899,
    originalPrice: 1099,
    unit: "piece",
    unitType: "unit",
    badge: "10% OFF",
    imageLabel: "Celestial Necklace",
    features: [
      "Trendy layered design",
      "Star & moon charm details",
      "Elegant turquoise-style centerpiece",
      "Lightweight and comfortable",
      "Perfect for daily wear & gifting",
      "Premium gold-tone finish"
    ],
    imageUrl: necklaceMain, 
    emoji: "✨", 
    images: [necklaceMain, necklaceAngle2, necklaceAngle3, necklaceAngle4, necklaceAngle5], 
    available: true,
    stockCount: 123, 
    discountPercentage: 0,
    detailPath: "/product/celestial-layered-pendant-necklace",
    showInSlider: false, 
    featuredImageIndex: 2, // Card par pehli photo show hogi
  }
];

export function getSortedProducts(list = products) {
  return [...list].sort((a, b) => Number(b.available) - Number(a.available));
}

export const productFilters = [
  { id: "all", label: "All Items" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" }, // 🟢 Added category filter for necklaces
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