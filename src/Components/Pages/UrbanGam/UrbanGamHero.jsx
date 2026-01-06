import React from 'react'
import HomeBanner from "../../../assets/images/main-home-banner.jpg";
import { Link } from 'react-router-dom';

const UrbanGamHero = () => {
  return (
    <>
  {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 lg:pt-32 overflow-hidden bg-[#0a0a0a]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-green-950/80 via-green-950/20 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10"></div>

          <img
            src={HomeBanner}
            alt="URBAN Gaam Living"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center scale-105 animate-[slow-zoom_25s_ease-out_infinite] blur-xs"
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full max-w-3xl text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-white leading-tight lg:leading-none mb-6 tracking-tighter">
                URBAN ગામ <br />
                Modern. Mindful. Natural.
              </h1>

              <p className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6">
                શહેરની સમજ • ગામની શાંતિ
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-gray-50 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light border-l-2 border-[#5e6c36] pl-4 sm:pl-6">
                City intelligence meets village serenity. A curated living
                enclave designed for balance, long-term value, and thoughtful
                living.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                <Link to="/enquire-form" state={{ interest: "Buying a Home" }}>
                  <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-white hover:bg-[#5e6c36] hover:text-white font-bold rounded-full overflow-hidden transition-all duration-500 shadow-[0_20px_40px_rgba(94,108,54,0.3)] hover:-translate-y-1 cursor-pointer">
                    Explore Homes
                  </button>
                </Link>

                <Link
                  to="/enquire-form"
                  state={{ interest: "Event / Wedding" }}
                >
                  <button className="px-8 sm:px-10 py-4 sm:py-5 bg-white hover:bg-[#5e6c36] hover:text-white cursor-pointer border border-white/20 rounded-full transition-all duration-500 font-bold backdrop-blur-sm">
                    Plan an Event
                  </button>
                </Link>

                <Link to="/enquire-form" state={{ interest: "Short Stay" }}>
                  <button className="px-8 sm:px-10 py-4 sm:py-5 bg-white hover:bg-[#5e6c36] hover:text-white cursor-pointer border border-white/20 rounded-full transition-all duration-500 font-bold backdrop-blur-sm">
                    Stay With Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UrbanGamHero