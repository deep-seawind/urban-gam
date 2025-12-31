import React from "react";
import {
  HiOutlineHome,
  HiOutlineCheckBadge,
  HiOutlineSquare3Stack3D,
  HiArrowLongRight,
  HiOutlineCubeTransparent,
  HiOutlineSun,
  HiOutlineShieldCheck,
  HiOutlineViewfinderCircle,
  HiOutlineSparkles,
} from "react-icons/hi2";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const HomesLayouts = () => {
  const homes = [
    {
      size: "250 sq yd",
      title: "Efficient Living",
      desc: "Smart layouts designed for low maintenance, ideal for short stays and premium rental income.",
      tags: ["High Yield", "Compact Luxury"],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    },
    {
      size: "500 sq yd",
      title: "Family Sanctuary",
      desc: "Spacious family homes designed with an emphasis on outdoor connection and ventilation.",
      tags: ["Family Preferred", "Indoor-Outdoor"],
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    },
    {
      size: "1000 sq yd",
      title: "Grand Estate",
      desc: "Premium residences offering absolute privacy, expansive open spaces, and luxury features.",
      tags: ["Estate Class", "Max Privacy"],
      image:
        "https://i.pinimg.com/1200x/8a/75/31/8a7531a0b7fdaf9ee5d1859c6791fd26.jpg",
    },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "Home Layouts" }]} />
      <section className="bg-white py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* --- Header Section --- */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-[#c09745]" />
                <span className="text-[#c09745] text-xs font-semibold tracking-[0.4em] ">
                  Collection
                </span>
              </div>
              <h2 className="text-5xl lg:text-7xl text-slate-950 font-light">
                Homes &{" "}
                <span className="text-color font-medium">
                  Layouts
                </span>
              </h2>
            </div>
            <p className="text-slate-500 lg:w-1/2 text-lg font-medium border-l border-slate-200 pl-8">
              Every home at Urban ગામ is fully constructed and designed for
              longevity, ensuring your legacy stays as solid as our foundations.
            </p>
          </div>

          {/* --- Interactive Homes Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
            {homes.map((home, idx) => (
              <div
                key={idx}
                className="snap-center group"
              >
                <div className="relative lg:h-100 h-80 rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-transform duration-700 group-hover:scale-[0.98]">
                  <img
                    src={home.image}
                    alt={home.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#304421] via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <span className="text-white/70 text-xs font-semibold tracking-widest  mb-2 block">
                      {home.size}
                    </span>
                    <h3 className="text-3xl font-semibold text-white mb-4">
                      {home.title}
                    </h3>
                    <div className="flex gap-2">
                      {home.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] text-white/80 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 px-6 leading-relaxed">
                  {home.desc}
                </p>
              </div>
            ))}
          </div>

          {/* --- SECTION 3: THE BLUEPRINT PHILOSOPHY (Split Layout) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-10 items-center lg:mb-30 mb-20">
            <div className="relative">
              <div className="lg:aspect-4/2 aspect-4/4 rounded-[4rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
                  alt="Design"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Glass Card */}
              <div className="absolute text-center -bottom-10 -right-12 p-5 px-8 bg-white/80 backdrop-blur-3xl rounded-[3rem] shadow-2xl border border-white max-w-xs hidden md:block">

              <div className="flex">
                <HiOutlineSparkles className="text-[#c09745] text-4xl mx-auto" />
                <p className="text-slate-900 font-semibold">
                  "Earthy materials meet modern precision."
                </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-semibold tracking-[0.4em]  text-[#c09745] mb-6">
                  Philosophy
                </h4>
                <h3 className="text-5xl lg:text-5xl font-medium text-slate-900 leading-tight">
                  Limited{" "}
                  <span className="font-serif italic">customization</span> to
                  protect <span className="font-semibold">brand value.</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Controlled Architecture", icon: <HiOutlineHome /> },
                  {
                    title: "Natural Ventilation",
                    icon: <HiOutlineCubeTransparent />,
                  },
                  {
                    title: "Material Palette",
                    icon: <HiOutlineSquare3Stack3D />,
                  },
                  { title: "Hand-crafted Feel", icon: <HiOutlineCheckBadge /> },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-15 h-15 rounded-2xl group-hover:bg-[#304421] text-3xl flex items-center justify-center group-hover:text-white shadow-sm bg-[#c09745] text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <span className="text-slate-800 font-semibold tracking-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- SECTION 4: THE INTERACTIVE MARQUEE (New UI Element) --- */}
          <div className="relative bg-color rounded-[4rem] p-12 lg:p-10 overflow-hidden group">
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000"
              style={{
                backgroundImage:
                  "radial-gradient(#c09745 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 text-center space-y-8">
              <h4 className="text-[#c09745] text-xs font-semibold tracking-[0.5em] ">
                Living The Legacy
              </h4>
              <p className="text-2xl lg:text-4xl text-white font-medium leading-snug max-w-4xl mx-auto">
                Whether it's a 250 yd retreat or a 1000 yd estate, every inch is
                designed to{" "}
                <span className="font-serif italic text-[#c09745]">
                  resonate
                </span>{" "}
                with nature.
              </p>
              <button className="inline-flex items-center gap-4 bg-[#c09745] text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-slate-950 transition-all duration-500 transform hover:scale-105">
                Enquire Now <HiArrowLongRight />
              </button>
            </div>

            {/* Animated Background Text */}
            <div className="absolute -bottom-10 left-0 w-full whitespace-nowrap opacity-[0.03] select-none">
              <span className="text-[12rem] font-semibold text-white">
                URBAN ગામ URBAN ગામ URBAN ગામ
              </span>
            </div>
          </div>

          {/* --- NEW SECTION: THE SENSORY EXPERIENCE (World Class UI) --- */}
          <div className="mt-20 relative">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left: The Visual Layer */}
              <div className="lg:w-7/12 relative group">
                {/* Decorative Label */}
                <div className="absolute -top-10 left-10 z-20 bg-white p-6 shadow-xl rounded-2xl border border-slate-100 transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 lg:block hidden">
                  <p className="text-[#c09745] font-serif italic text-xl">
                    The Sandstone Texture
                  </p>
                  <p className="text-[10px] font-semibold tracking-widest text-slate-400">
                    Ethically Sourced
                  </p>
                </div>

                <div className="relative rounded-[4rem] overflow-hidden aspect-video shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200"
                    alt="Atmosphere"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                  />
                  {/* Glass Overlay on Image */}
                  <div className="absolute bottom-8 right-8 p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] text-white max-w-xs transition-all duration-700 group-hover:bg-[#c09745]/20 lg:block hidden">
                    <HiOutlineSun className="text-3xl mb-4 text-[#c09745]" />
                    <p className="text-sm font-light leading-relaxed">
                      Every window is positioned to capture the{" "}
                      <span className="font-semibold">Golden Hour</span>, reducing
                      the need for artificial light.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: The Content Layer */}
              <div className="lg:w-5/12 space-y-10">
                <div className="relative">
                  <span className="text-[6rem] font-serif italic text-slate-50 absolute -top-16 -left-8 select-none -z-10 opacity-50">
                    Sensory
                  </span>
                  <h4 className="text-xs font-semibold tracking-[0.4em] text-[#c09745] mb-4">
                    Tactile Details
                  </h4>
                  <h3 className="text-5xl font-medium text-slate-900 leading-[1.1]">
                    Materials that
                    <span className="font-serif italic text-[#c09745] ps-3">
                      age
                    </span>{" "}
                    like fine wine.
                  </h3>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      title: "Lime Plaster Walls",
                      desc: "Naturally breathable and temperature regulating.",
                    },
                    {
                      title: "Reclaimed Wood",
                      desc: "Sourced responsibly to maintain ecological balance.",
                    },
                    {
                      title: "Hand-Hewn Stone",
                      desc: "Every stone tells a story of local craftsmanship.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="text-slate-300 group-hover:text-[#c09745] transition-colors duration-500 font-serif italic text-2xl">
                        0{i + 1}
                      </div>
                      <div className="pb-6 border-b border-slate-100 w-full group-hover:border-[#c09745]/30 transition-colors">
                        <h5 className="font-semibold text-slate-900 mb-1">
                          {item.title}
                        </h5>
                        <p className="text-slate-500 text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#c09745]/5 rounded-full blur-[100px] -z-10" />
          </div>

          {/* --- SECTION 5: FINAL VISIONARY CTA --- */}
          <div className="relative rounded-[5rem] bg-white p-12 lg:p-10 mt-20 text-center border border-slate-100 shadow-2xl overflow-hidden">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none">
              <span className="lg:text-[22rem] text-5xl font-serif font-semibold italic">
                Urban
              </span>
            </div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-medium text-slate-900 leading-none">
                Ready to claim <br />
                <span className="font-serif italic text-[#c09745]">
                  your piece of peace?
                </span>
              </h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="bg-color text-white px-12 py-4 rounded-full font-semibold text-xl hover:bg-[#c09745] transition-all duration-500 flex items-center justify-center gap-4 group">
                  Connect
                  <HiArrowLongRight className="group-hover:translate-x-2 transition-transform" />
                </button> 
              </div>
            </div>
          </div>    
        </div>
      </section>
    </>
  );
};

export default HomesLayouts;
