import { contactInfo } from "../../data/siteData";
import SectionTitle from "../common/SectionTitle";

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Sehjowal+Chak+No.+11,+Tehsil+Pattoki,+District+Kasur&t=&z=13&ie=UTF8&iwloc=&output=embed";

export default function ContactSection() {
  return (
    <section id="contact" className="section inquiry">
      <div className="container inquiry__grid">
        <div>
          {/* ✨ t() ko hata kar direct clean English text daal diya */}
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
                <div className="inquiry__info-value">{contactInfo.address}</div>
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
          />
        </div>
      </div>
    </section>
  );
}