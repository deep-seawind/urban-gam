import { FaCity } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import cityHero from "../../../../assets/hero/city-hero.jpg";

const CityHero = ({ hoveredSide, setHoveredSide, isMobile }) => {
  return (
    <div
      className="relative flex-1 overflow-hidden transition-all duration-500"
      onMouseEnter={() => !isMobile && setHoveredSide("city")}
      onMouseLeave={() => !isMobile && setHoveredSide(null)}
      onClick={() =>
        isMobile && setHoveredSide(hoveredSide === "city" ? null : "city")
      }
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-[1.2s] ease-out
          filter grayscale brightness-90
          ${
            hoveredSide === "city"
              ? "grayscale-0 brightness-100 scale-110 saturate-125 contrast-110"
              : "scale-100"
          }`}
        style={{ backgroundImage: `url(${cityHero})` }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-20">
        <div className="max-w-lg">
          <div
            className={`flex items-center gap-2 mb-4 transition-all duration-500 ${
              hoveredSide === "city"
                ? "translate-x-0"
                : "-translate-x-4 opacity-70"
            }`}
          >
            <FaCity className="text-white w-5 h-5" />
            <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase">
              Urban Living
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-semibold text-white mb-6">
            The{" "}
            <span
              className={`transition-all duration-500 ${
                hoveredSide === "city" ? "text-sky-400" : "text-white"
              }`}
            >
              City <span className="font-light opacity-80">| શહેર</span>
            </span>
          </h2>

          <p className="text-white/90 text-lg mb-8">
            Experience the pulse of modern life. Where innovation meets ambition.
          </p>

          <button className="flex items-center gap-4 text-white">
            <span className="font-semibold text-sm tracking-widest uppercase">
              Explore City
            </span>
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
              <FiArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityHero;
