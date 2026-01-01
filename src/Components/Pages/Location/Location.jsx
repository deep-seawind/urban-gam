import React from "react";
import { FiArrowUpRight, FiNavigation } from "react-icons/fi";
import {
  IoCompassOutline,
  IoLeafOutline,
  IoExpandOutline,
} from "react-icons/io5";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const LocationLuxury = () => {
  const connectivity = [
    { name: "Sarkhej Ring Road", time: "35 MINS", type: "City Connection" },
    {
      name: "Bavla Industrial Hub",
      time: "15 MINS",
      type: "Commercial Proximity",
    },
    { name: "Ahmedabad Highway", time: "02 MINS", type: "Primary Access" },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "Location" }]} />
      <section className="py-16 bg-[#FCFCFA] text-slate-900 overflow-hidden font-sans">
        <div className="container mx-auto px-6">
          {/* Section 1: The Narrative Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
            <div>
              <span className="text-[#b4a14c] font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">
                The Geography of Peace
              </span>
              <h2 className="text-5xl lg:text-7xl font-light">
                Bavla
                <span className="font-medium text-[#4d633c]"> Kanotar.</span>
              </h2>
            </div>
            <div className="pb-4">
              <p className="text-xl text-slate-500 leading-relaxed border-l border-slate-200 pl-8">
                Strategically placed at the intersection of progress and
                tranquility.
                <span className="text-slate-900 font-medium">
                  {" "}
                  Approximately 40km from Sarkhej
                </span>
                , where the horizon begins to breathe.
              </p>
            </div>
          </div>

          {/* Section 2: Floating Visual Map & Growth Note */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* Map Frame */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#b4a14c]/30 z-10" />
              <div className="relative h-90 lg:h-150 rounded-4xl overflow-hidden shadow-sm">
                <iframe
                  title="URBAN Gam Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117565.41961445774!2d72.302306!3d22.860167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9036506f2249%3A0xc6c4f8d682498d5e!2sBavla%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  className="w-full h-full opacity-80 transition-all duration-1000"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-20 border-[#FCFCFA] rounded-4xl" />
              </div>

              {/* Floating Directions Tab */}
              <button className="absolute bottom-12 right-12 bg-white px-8 py-5 rounded-full shadow-2xl flex items-center gap-4 hover:bg-[#4d633c] hover:text-white transition-all duration-500 group/btn">
                <span className="font-bold text-xs tracking-widest">
                  NAVIGATE TO SITE
                </span>
                <FiNavigation className="group-hover/btn:rotate-45 transition-transform" />
              </button>
            </div>

            {/* Growth Content */}
            <div className="lg:col-span-4 flex flex-col justify-center gap-12 pl-4">
              <div className="space-y-4 border border-zinc-200 p-5 rounded-4xl">
                <div className="w-12 h-12 rounded-full bg-[#4d633c] flex items-center justify-center text-white">
                  <IoCompassOutline size={24} />
                </div>
                <h4 className="text-3xl lg:text-5xl">Emerging Corridor</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The Bavla-Kanotar belt is the new frontier for luxury escapes.
                  As the city expands southward, this corridor is projected to
                  see significant infrastructure appreciation.
                </p>
              </div>

              <div className="space-y-4 border border-zinc-200 p-5 rounded-4xl">
                <div className="w-12 h-12 rounded-full bg-[#b4a14c] flex items-center justify-center text-white">
                  <IoLeafOutline size={24} />
                </div>
                <h4 className="text-3xl lg:text-5xl">Farmland Heritage</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Unlike concrete-heavy developments, our location is preserved
                  within open farmlands, ensuring your view remains green
                  forever.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: The Proximity Cards (Editorial Style) */}
          <div className="border-t border-slate-100 pt-20">
            <div className="grid md:grid-cols-3 gap-16">
              {connectivity.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <p className="text-[#b4a14c] font-bold text-[10px] tracking-[0.2em] mb-4">
                    {item.type}
                  </p>
                  <div className="flex justify-between items-end border-b border-slate-200 pb-6 group-hover:border-[#4d633c] transition-colors">
                    <h5 className="text-xl font-medium text-slate-800">
                      {item.name}
                    </h5>
                    <span className="text-5xl text-color">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Final Location Note (Ultra Luxury) */}
          <div className="mt-32 p-16 rounded-[4rem] bg-[#4d633c] text-white relative overflow-hidden text-center">
            {/* Soft decorative light */}
            <div className="absolute -top-1/2 -left-1/4 w-150 h-150 bg-white/5 rounded-full blur-[120px]" />

            <h3 className="text-3xl lg:text-5xl italic mb-6">
              "Close enough for convenience. Far enough for calm."
            </h3>
            <div className="w-20 h-px bg-[#b4a14c] mx-auto mb-8" />
            <button className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.4em] text-[#b4a14c] hover:text-white transition-colors">
              SCHEDULE A PRIVATE SITE VISIT <FiArrowUpRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationLuxury;
