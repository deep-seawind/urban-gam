import React from "react";
import { FaChartLine, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";

const UrbanGamWhy = () => {
  return (
    <>
      {/* Concept Section */}
      <section
        id="concept"
        className="py-10 lg:py-16 bg-[#FDFDFB] relative overflow-hidden"
      >
        <div className="container mx-auto px-6 lg:px-12 relative">
          {/* Section Header */}
          <div className="mb-12 relative">
            <div className="relative z-10 max-w-6xl">
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight">
                Why
                <span className="text-[#5e6c36]"> URBAN ગામ</span>
              </h2>

              <p className="text-xl text-gray-700 mb-4">
                Designed for Balance. Built for the Future. URBAN ગામ is created
                for those who value peace today and value tomorrow.
              </p>

              <p className="text-lg text-gray-500 max-w-3xl"></p>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                icon: <FaMapMarkerAlt />,
                title: "Location Advantage",
                description:
                  "Strategically located near Ahmedabad, yet surrounded by open farmland — offering effortless city access while preserving natural calm.",
                accent: "#5e6c36",
              },
              {
                number: "02",
                icon: <FaShieldAlt />,
                title: "Managed Living Model",
                description:
                  "Fully constructed homes with controlled architecture, resort-style community management, and optional rental income opportunities.",
                accent: "#5e6c36",
              },
              {
                number: "03",
                icon: <FaChartLine />,
                title: "Appreciation + Income Logic",
                description:
                  "A phased development approach designed to drive long-term appreciation while enabling income through curated stays and events.",
                accent: "#5e6c36",
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white p-12 rounded-[2.5rem] border border-gray-100 transition-all duration-700 group-hover:shadow-[0_40px_100px_-20px_rgba(94,108,54,0.15)] group-hover:-translate-y-4 h-full flex flex-col overflow-hidden">
                  {/* Card Number */}
                  <span className="text-5xl text-[#5e6c36]/5 absolute top-8 right-10 group-hover:text-[#5e6c36]/10 transition-colors">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-10 bg-[#5e6c36] text-white transition-all duration-500 group-hover:bg-[#5e6c36]/10 group-hover:text-[#5e6c36] group-hover:rotate-6 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-light text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UrbanGamWhy;
