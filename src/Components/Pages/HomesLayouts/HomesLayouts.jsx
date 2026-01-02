import React from "react";
import {
  HiOutlineHome,
  HiOutlineCubeTransparent,
  HiOutlineSquare3Stack3D,
  HiOutlineCheckBadge,
  HiArrowLongRight,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import {
  IoExpandOutline,
  IoColorPaletteOutline,
  IoLeafOutline,
} from "react-icons/io5";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const HomesLayouts = () => {
  const homes = [
    {
      size: "250 SQ YD",
      title: "The Retreat",
      type: "Compact Luxury",
      profile: "Ideal for weekend solo escapes & high-yield rentals.",
      features: ["Low Maintenance", "Studio Concept", "Zen Garden"],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      color: "bg-[#fdfaf5]",
    },
    {
      size: "500 SQ YD",
      title: "The Sanctuary",
      type: "Family Estate",
      profile: "Designed for multi-generational bonding and open-air living.",
      features: ["Indoor-Outdoor Flow", "3 Bedrooms", "Private Deck"],
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      color: "bg-[#f5f7f2]",
    },
    {
      size: "1000 SQ YD",
      title: "The Manor",
      type: "Grand Legacy",
      profile:
        "The pinnacle of privacy, featuring sprawling lawns and bespoke vistas.",
      features: ["Maximum Seclusion", "Guest Wing", "Private Orchard"],
      image:
        "https://i.pinimg.com/1200x/8a/75/31/8a7531a0b7fdaf9ee5d1859c6791fd26.jpg",
      color: "bg-[#f8f9fa]",
    },
  ];

  return (
    <div className="bg-[#FCFCFA] min-h-screen text-slate-900">
      <Breadcrumb items={[{ label: "Architectural Layouts" }]} />

      {/* --- SECTION 1: EDITORIAL HEADER --- */}
      <section className="pt-24 pb-12 px-6 lg:px-12 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="col-span-3">
            <span className="text-[#b4a14c] font-bold tracking-[0.5em] text-[15px] mb-6 block">
              Structured Excellence
            </span>
            <h1 className="text-5xl lg:text-7xl font-light">
              Bespoke
              <span className="text-color"> Standardization.</span>
            </h1>
          </div>
          <div className="col-span-2 border-l border-slate-200 pl-8 pb-4">
            <p className="text-lg text-slate-500  leading-relaxed">
              We offer three distinct scales of living. Each layout is a result
              of
              <span className="text-slate-900 font-medium"> 
                disciplined architecture
              </span>
              —designed to protect the brand's aesthetic integrity while
              offering personal sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE ESTATES GALLERY (ADVANCED CARDS) --- */}
      <section className="py-24 px-6 lg:px-0 container mx-auto">
        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {homes.map((home, idx) => (
            <div key={idx} className="group flex flex-col h-full">
              {/* 1. Image Container with Badge */}
              <div className="relative mb-10">
                <div className="relative rounded-[3.5rem] overflow-hidden aspect-4/3 shadow-2xl">
                  <img
                    src={home.image}
                    alt={home.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />

                  {/* Plot Size Floating Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md w-24 h-24 rounded-full flex flex-col items-center justify-center border border-white/20 shadow-xl group-hover:bg-[#4d633c] group-hover:text-white transition-all duration-500 transform">
                    <span className="text-[8px] font-black uppercase tracking-tighter opacity-60">
                      Plot Size
                    </span>
                    <span className="text-sm   font-bold">
                      {home.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Content Container */}
              <div className="flex flex-col grow px-4">
                <div className="mb-6">
                  <span className="text-[#b4a14c] font-bold text-[10px] tracking-[0.3em] uppercase block mb-2">
                    {home.type}
                  </span>

                   <Link
                    to={"/layouts-details"}>
                  <h3 className="text-5xl text-slate-900 leading-tight group-hover:text-[#4d633c] transition-colors">
                    {home.title}
                  </h3>
                  </Link>
                </div>

                {/* Persona Card */}
                <div className="bg-white border border-slate-100 p-6 rounded-4xl shadow-sm mb-6 relative overflow-hidden group-hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#4d633c]/20" />
                  <p className="text-[#4d633c] text-lg mb-4 leading-snug">
                    "The {home.profile}"
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {home.features.slice(0, 2).map((feat, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-bold tracking-widest text-slate-400 border border-slate-100 px-3 py-1.5 rounded-full uppercase"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-500 leading-relaxed  mb-8 line-clamp-3">
                  Thoughtfully engineered to maximize built-up efficiency while
                  framing uninterrupted green vistas through strategic window
                  placement.
                </p>

                {/* Action Link */}
                <div className="mt-auto">
                  <Link
                    to={"/layouts-details"}
                    className="inline-flex items-center gap-4 font-bold text-xs tracking-[0.2em] bg-[#b4a14c] text-white p-4 rounded-full group-hover:bg-white transition-all group-hover:text-[#b4a14c] border  border-[#b4a14c]"
                  >
                    EXPLORE LAYOUT <HiArrowLongRight className="text-lg" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: DESIGN PHILOSOPHY (MODERN BENTO) --- */}
      <section className="py-16 bg-zinc-100 rounded-[5rem] lg:shadow-2xl container  mb-20 lg:mx-auto overflow-hidden">
        <div className="mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6">
              The Blueprint <span className="text-color">Logic.</span>
            </h2>
            <p className="text-slate-500 text-lg mx-auto">
              To maintain "URBAN ગામ" as a premium brand, we follow a strict
              design code that balances individual ownership with collective
              beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Limited Customization",
                desc: "Standardized exteriors to protect your resale value and community aesthetic.",
                icon: <HiOutlineShieldCheck />,
              },
              {
                title: "Natural Ventilation",
                desc: "Every layout is cross-ventilated, reducing the need for mechanical cooling.",
                icon: <HiOutlineCubeTransparent />,
              },
              {
                title: "Earth Palette",
                desc: "Materials chosen to age gracefully and blend into the Gujarati soil.",
                icon: <IoColorPaletteOutline />,
              },
              {
                title: "Low Maintenance",
                desc: "Surfaces and landscapes designed for minimal upkeep and maximum longevity.",
                icon: <IoLeafOutline />,
              },
            ].map((box, i) => (
              <div
                key={i}
                className="p-10 rounded-[3rem] bg-[#FCFCFA] border border-slate-50 hover:shadow-2xl shadow-lg transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl group-hover:bg-white shadow-sm flex items-center justify-center text-2xl group-hover:text-[#4d633c] mb-8 bg-[#4d633c] text-white transition-all duration-500">
                  {box.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{box.title}</h4>
                <p className="text-slate-500 leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: SENSORY CTA --- */}
      <section className="relative py-8 lg:py-10 overflow-hidden group">
        {/* 1. Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Estate"
            className="w-full h-full object-cover object-center scale-110 transition-transform duration-[10s] group-hover:scale-100"
          />
          {/* Darkening & Tint Overlay */}
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-linear-to-t from-[#2d411e] via-[#2d411e]/50 to-transparent" />
        </div>
 

        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          {/* Minimalist Badge */}
          <div className="flex justify-center mb-8">
            <span className="px-6 py-2 rounded-full border border-white/20 backdrop-blur-md text-[#b4a14c] text-[10px] font-bold tracking-[0.5em] uppercase">
              Inquire Today
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl text-white leading-[1.1] mb-12 drop-shadow-2xl">
            Ready to claim your 
            <span className=" font-light text-white/90">  piece of peace?
            </span>
          </h2>

          {/* Buttons with Glassmorphism and Solid Contrast */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="bg-[#b4a14c] text-white px-14 py-6 rounded-full font-bold text-xs tracking-[0.2em] shadow-2xl hover:bg-white hover:text-slate-950 transition-all duration-500 transform hover:scale-105 active:scale-95">
              SCHEDULE SITE VISIT
            </button>

              {/* <button className="group/btn flex items-center gap-4 text-white font-bold text-xs tracking-[0.2em] transition-all">
                <span className="border-b-2 border-white/30 pb-1 group-hover/btn:border-[#b4a14c] transition-colors">
                  DOWNLOAD PORTFOLIO
                </span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-950 transition-all">
                  <HiArrowLongRight className="text-lg" />
                </div>
              </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomesLayouts;
