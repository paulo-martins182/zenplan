import React from "react";
import HeroSection from "./(nonsections)/HeroSection";
import FeaturesSection from "./(nonsections)/FeaturesSection";
import DiscoverSection from "./(nonsections)/DiscoverSection";
import FooterSection from "./(nonsections)/FooterSection";

function Landing() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <FooterSection />
    </div>
  );
}

export default Landing;
