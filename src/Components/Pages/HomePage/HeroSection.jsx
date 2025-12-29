import { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";

import cityHero from "../../../assets/hero/city-hero.jpg";
import villageHero from "../../../assets/hero/village-hero.jpg";
import Logo from "../../../assets/logo/logo.jpg";

const HeroSection = () => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col lg:flex-row overflow-hidden"
    >
     {/* City Section */}
      <div
        className="relative flex-1 overflow-hidden group transition-all duration-500"
        onMouseEnter={() => setHoveredSide("city")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background Image - Normal by default, enhanced on hover */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1.2s] ease-out
            ${hoveredSide === "city" ? "scale-110 saturate-125 contrast-110" : "scale-100 saturate-100 contrast-100 opacity-90"}`}
          style={{ backgroundImage: `url(${cityHero})` }}
        />
        
        {/* Soft Overlays */}
        <div className={`absolute inset-0 bg-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-sky-500/10 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-20">
          <div className="max-w-md">
            <div className={`flex items-center gap-2 mb-4 transition-all duration-500 ${hoveredSide === "city" ? "translate-x-0" : "-translate-x-4 opacity-70"}`}>
              <FaCity className="text-white w-5 h-5" />
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Urban Living</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The <span className={`transition-all duration-500 ${hoveredSide === "city" ? "text-sky-400" : "text-white"}`}>City</span>
            </h2>

            <p className={`text-white/90 text-base lg:text-lg mb-8 transition-all duration-500 ${hoveredSide === "city" ? "opacity-100" : "opacity-0 translate-y-4"}`}>
              Experience the pulse of modern life. Where innovation meets ambition and dreams become reality.
            </p>

            <button className="flex items-center gap-4 text-white group/btn">
              <span className="font-semibold text-sm tracking-widest uppercase">Explore City</span>
              <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-black group-hover/btn:scale-110">
                <FiArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="relative flex items-center justify-center">
          {/* Animated Rings */}
          <div className="absolute w-40 h-40 lg:w-100 lg:h-100 border border-white/60 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute w-32 h-32 lg:w-88 lg:h-88 border border-white/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" /> 
          <div className="w-20 h-20 lg:w-60 lg:h-60 rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl flex items-center justify-center border border-white/40">
            <img
              src={Logo}
              alt="Logo"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-400/40 to-amber-300/40 blur-xl -z-10" />
        </div>
      </div>

        {/* Village Section */}
      <div
        className="relative flex-1 overflow-hidden group transition-all duration-500"
        onMouseEnter={() => setHoveredSide("village")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1.2s] ease-out
            ${hoveredSide === "village" ? "scale-110 saturate-125 contrast-110" : "scale-100 saturate-100 contrast-100 opacity-90"}`}
          style={{ backgroundImage: `url(${villageHero})` }}
        />

        {/* Soft Overlays */}
        <div className={`absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-20 lg:items-end lg:text-right">
          <div className="max-w-md">
            <div className={`flex items-center gap-2 mb-4 lg:justify-end transition-all duration-500 ${hoveredSide === "village" ? "translate-x-0" : "translate-x-4 opacity-70"}`}>
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase order-2">Rural Living</span>
              <GiTreeBranch className="text-white w-5 h-5 order-1" />
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The <span className={`transition-all duration-500 ${hoveredSide === "village" ? "text-amber-400" : "text-white"}`}>Village</span>
            </h2>

            <p className={`text-white/90 text-base lg:text-lg mb-8 transition-all duration-500 ${hoveredSide === "village" ? "opacity-100" : "opacity-0 translate-y-4"}`}>
              Embrace the tranquility of nature. Where time flows gently and peace finds its home.
            </p>

            <button className="flex items-center gap-4 text-white group/btn lg:flex-row-reverse">
              <span className="font-semibold text-sm tracking-widest uppercase">Discover Village</span>
              <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-black group-hover/btn:scale-110">
                <FiArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
