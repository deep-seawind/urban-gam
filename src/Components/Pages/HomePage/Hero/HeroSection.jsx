import { useEffect, useState } from "react";
import CityHero from "./CityHero";
import VillageHero from "./VillageHero";
import CenterLogo from "./CenterLogo";

const HeroSection = () => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative h-screen flex flex-col lg:flex-row overflow-hidden">
      <CityHero
        hoveredSide={hoveredSide}
        setHoveredSide={setHoveredSide}
        isMobile={isMobile}
      />

      <CenterLogo />

      <VillageHero
        hoveredSide={hoveredSide}
        setHoveredSide={setHoveredSide}
        isMobile={isMobile}
      />
    </section>
  );
};

export default HeroSection;
