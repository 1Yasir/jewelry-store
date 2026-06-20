import { features } from "../../data/siteData";
import SectionTitle from "../common/SectionTitle";
import FeatureCard from "./FeatureCard";

export default function AboutSection() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        {/* ✨ Direct clean English text for Jewelry business */}
        <SectionTitle
          label="About Us"
          title="Why Choose Our Wholesale Store?"
          desc="With pure craftsmanship and elegant designs, we deliver high-quality certified items directly to businesses, retailers, and showrooms."
        />

        <div className="features-grid">
          {/* ✨ Translation t() hata kar direct siteData.js se title aur desc utha liya */}
          {features.map(({ key, icon, title, desc }) => (
            <FeatureCard
              key={key}
              icon={icon}
              title={title}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}