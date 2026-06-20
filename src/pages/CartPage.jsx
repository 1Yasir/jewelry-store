import { useEffect } from "react";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import WhatsAppFloat from "../components/common/WhatsAppFloat";
import CartContent from "../components/cart/CartContent";
import SectionTitle from "../components/common/SectionTitle";
import Breadcrumbs from "../components/common/Breadcrumbs";

export default function CartPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="poultry cart-page">
      <NavBar />

      <main className="cart-page__main">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Your Cart", to: "/cart" },
            ]}
          />

          <SectionTitle
            label="Order Process"
            title="Review Your Cart"
            desc="Please double check your wholesale products and quantities before submitting your details to database."
          />

          <div className="cart-page__panel">
            <CartContent />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}