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
    id: "gold-ring",
    category: "rings",
    name: "Premium Gold Wedding Ring",
    desc: "Exquisite 22K gold ring crafted with high precision, perfect for retailers and retail orders alike.",
    price: "Rs. 45,000 / piece",
    unitPrice: 45000,
    originalPrice: 45000,
    unit: "piece",
    unitType: "unit",
    badge: "Best Seller",
    imageLabel: "Gold Ring",
    emoji: "💍",
    available: true,
    stockCount: 10,
    discountPercentage: 0,
    detailPath: "/product/gold-ring",
  },
  {
    id: "diamond-necklace",
    category: "necklaces",
    name: "Elegant Diamond Choker",
    desc: "Stunning custom diamond choker necklace set, available for bulk wholesale orders with competitive pricing.",
    price: "Rs. 120,000 / set",
    unitPrice: 120000,
    originalPrice: 120000,
    unit: "set",
    unitType: "unit",
    badge: "Premium",
    imageLabel: "Diamond Choker",
    emoji: "💎",
    available: true,
    stockCount: 5,
    discountPercentage: 10,
    detailPath: "/product/diamond-necklace",
  },
  {
    id: "silver-bangles",
    category: "bangles",
    name: "Traditional Silver Bangles",
    desc: "Pure sterling silver bangles with traditional engravings. Pure texture and fine finish.",
    price: "Rs. 15,000 / pair",
    unitPrice: 15000,
    originalPrice: 15000,
    unit: "pair",
    unitType: "unit",
    badge: "New Launch",
    imageLabel: "Silver Bangles",
    emoji: "👑",
    available: true,
    stockCount: 25,
    discountPercentage: 5,
    detailPath: "/product/silver-bangles",
  },
];

export function getSortedProducts(list = products) {
  return [...list].sort((a, b) => Number(b.available) - Number(a.available));
}

export const productFilters = [
  { id: "all", label: "All Items" },
  { id: "rings", label: "Rings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "bangles", label: "Bangles" },
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