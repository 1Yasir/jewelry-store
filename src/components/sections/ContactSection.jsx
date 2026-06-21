import { contactInfo } from "../../data/siteData";
import SectionTitle from "../common/SectionTitle";

// 🟢 LIVE MAP LINK: Sultan Town Raiwind Road Lahore ka embed map URL laga diya hai
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.023223126442!2d74.2407639!3d31.4134706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918f67bc025979f%3A0x7d6a540b689a7f34!2sSultan%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718956200000!5m2!1sen!2s";

export default function ContactSection() {
  // 🟢 Fallback Address: Agar siteData mein abhi change nahi kiya, to direct yeh show hoga
  const displayAddress = contactInfo.address || "House 15-A, Street 1, Sultan Town, Raiwind Road, Lahore";

  return (
    <section id="contact" className="section inquiry">
      <div className="container inquiry__grid">
        <div>
          <SectionTitle
            label="Get in Touch"
            title="Contact Us"
            desc="Reach out for wholesale inquiries, custom orders, or any questions about our jewelry products."
          />

          <div className="inquiry__info-list">
            <div className="inquiry__info-item">
              <div className="inquiry__info-icon">📞</div>
              <div>
                <div className="inquiry__info-label">Phone / WhatsApp</div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inquiry__info-value inquiry__info-link"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="inquiry__info-item">
              <div className="inquiry__info-icon">📍</div>
              <div>
                <div className="inquiry__info-label">Store Address</div>
                {/* 🟢 Updated Address Text */}
                <div className="inquiry__info-value">{displayAddress}</div>
              </div>
            </div>

            <div className="inquiry__info-item">
              <div className="inquiry__info-icon">⏰</div>
              <div>
                <div className="inquiry__info-label">Business Hours</div>
                <div className="inquiry__info-value">{contactInfo.businessHours}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="inquiry__map">
          <iframe
            title="Store Location"
            src={MAP_EMBED_URL}
            className="inquiry__map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            style={{ border: 0, width: "100%", height: "100%", minHeight: "350px", borderRadius: "12px" }}
          />
        </div>
      </div>
    </section>
  );
}