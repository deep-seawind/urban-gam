import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const UrbanGamProperties = () => {
  return (
    <>
      <section id="properties" className="py-10 lg:py-12 bg-[#FDFDFB]">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header with balanced white space */}
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Homes at
                <span className=" text-[#5e6c36]"> URBAN ગામ</span>
              </h2>
            </div>
            <p className="text-gray-800 text-lg max-w-lg border-l border-gray-200 pl-8 hidden lg:block">
              Homes designed with simplicity, durability, and comfort at their
              core.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                id: "01",
                size: "250 ",
                title: "The Studio Estate",
                desc: "Efficient, rental-friendly living designed for the modern minimalist.",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
                align: "left",
              },
              {
                id: "02",
                size: "500 ",
                title: "The Family Manor",
                desc: "Spacious multi-generational homes balanced with shared and private volumes.",
                image:
                  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80",
                align: "right",
              },
              {
                id: "03",
                size: "1000 ",
                title: "The Sovereign Villa",
                desc: "The pinnacle of private, premium living with expansive garden footprints.",
                image:
                  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80",
                align: "left",
              },
            ].map((plot, index) => (
              <div key={index} className="group flex flex-col">
                {/* Image Container with Custom Reveal */}
                <div className="relative h-60 overflow-hidden rounded-t-[3rem] rounded-b mb-8">
                  <img
                    src={plot.image}
                    alt={`${plot.size} Sq Yards`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width="800"
                    height="500"
                    className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 will-change-transform"
                  />

                  {/* Hover Badge */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <FaArrowRight className="-rotate-45" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-2">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-4xl font-light text-gray-900 group-hover:text-[#5e6c36] transition-colors duration-500">
                        {plot.size}{" "}
                        <span className="text-base tracking-widest text-gray-500">
                          Sq Yds
                        </span>
                      </h3>
                    </div>
                  </div>

                  {/* Spec Grid instead of a List */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5e6c36]"></div>
                      <span className="text-base text-gray-500 font-medium">
                        Private Grove
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5e6c36]"></div>
                      <span className="text-base text-gray-500 font-medium">
                        Smart Integration
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5e6c36]"></div>
                      <span className="text-base text-gray-500 font-medium">
                        Architectural Concierge
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5e6c36]"></div>
                      <span className="text-base text-gray-500 font-medium">
                        Vastu Compliant
                      </span>
                    </div>
                  </div>

                  <Link
                    to={"/enquire-form"}
                    state={{ interest: "Buying a Home" }}
                  >
                    <button className="relative cursor-pointer w-full py-5 group-hover:bg-[#5e6c36] border border-gray-200 group-hover:border-[#5e6c36] rounded-xl transition-all duration-500 overflow-hidden">
                      <span className="relative z-10 font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                        Enquire Now
                      </span>
                      <div className="absolute inset-0 bg-[#5e6c36] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UrbanGamProperties;
