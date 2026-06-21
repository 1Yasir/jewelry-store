import { Link, useLocation } from "react-router-dom"; 
import { contactInfo, footerLinks } from "../../data/siteData";

export default function Footer() {
  const location = useLocation();

  // Smooth scroll handle for footer links
  const handleFooterLinkClick = (e, href) => {
    const sectionId = href.replace("/#", "");
    
    if (location.pathname === "/") {
      e.preventDefault(); // Browser refresh rokay ga
      window.history.pushState(null, null, href); // URL update kare ga bina refresh ke
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            {/* 💎 UPDATED: Poultry emoji aur brand name badal kar HSM Jewellers kar diya */}
            <div className="footer__brand">
              {/* <span>💎</span>  */}
              HSM Jewellers
            </div>
            {/* ✨ UPDATED: Jewelry ke mutabiq luxury description add ki */}
            <p className="footer__desc">
              Crafting elegance and timeless beauty. Discover our premium collection of finely crafted rings, earrings, and luxury jewelry tailored for your special moments.
            </p>
          </div>

          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link 
                    to={href} 
                    className="footer__link"
                    onClick={(e) => handleFooterLinkClick(e, href)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Contact Us</h4>
            <div className="footer__contact-item">
              <span>📞</span>
              <a href={`tel:${contactInfo.phone}`} className="footer__contact-link">
                {contactInfo.phone}
              </a>
            </div>
            <div className="footer__contact-item">
              <span>💬</span>
              <a href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`} target="_blank" rel="noreferrer" className="footer__contact-link">
                WhatsApp: {contactInfo.whatsapp}
              </a>
            </div>
            <div className="footer__contact-item">
              <span>📍</span>
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>

        {/* 🌟 UPDATED: Bottom text ko jewelry taglines ke sath replace kiya */}
        <div className="footer__bottom">
          <span>© 2026 HSM Jewellers. All rights reserved.</span>
          <span>Elegant · Timeless · Trusted</span>
        </div>
      </div>
    </footer>
  );
}