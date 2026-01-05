import React, { useState } from "react";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaChartLine,
  FaShieldAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import HomeBanner from "../../../assets/images/main-home-banner.jpg";
import { Link } from "react-router-dom";

const URBANGaamLanding = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFB] text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 lg:pt-32 overflow-hidden bg-[#0a0a0a]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-green-950/80 via-green-950/20 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10"></div>
          <img
            src={HomeBanner}
            className="w-full h-full object-cover scale-105 animate-[slow-zoom_25s_ease-out_infinite] blur-xs"
            alt="URBAN Gaam Living"
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Content */}
            <div className=" ">
              <h1 className="text-6xl lg:text-8xl font-light text-white leading-none mb-6 tracking-tighter">
                URBAN ગામ <br />
                Modern. Mindful. Natural.
              </h1>

              <p className="text-5xl font-bold text-white mb-6">
                શહેરની સમજ • ગામની શાંતિ
              </p>

              <p className="text-lg lg:text-xl text-gray-50 mb-12 max-w-xl leading-relaxed font-light border-l-2 border-[#5e6c36] pl-6">
                City intelligence meets village serenity. A curated living
                enclave designed for balance, long-term value, and thoughtful
                living.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link to={"/enquire-form"}  state={{ interest: "Buying a Home" }}>
                  <button className="group relative px-10 py-5 bg-white hover:bg-[#5e6c36] hover:text-white font-bold rounded-full overflow-hidden transition-all duration-500 shadow-[0_20px_40px_rgba(94,108,54,0.3)] hover:-translate-y-1 cursor-pointer">
                    <span className="relative">Explore Homes</span>
                  </button>
                </Link>

                {/* Plan an Event */}
                <Link to={"/enquire-form"}  state={{ interest: "Event / Wedding" }}>
                  <button className="px-10 py-5 bg-white hover:bg-[#5e6c36] hover:text-white cursor-pointer border border-white/20 rounded-full transition-all duration-500 font-bold backdrop-blur-sm">
                    Plan an Event
                  </button>
                </Link>

                {/* Stay With Us */}
                <Link to={"/enquire-form"}  state={{ interest: "Short Stay" }}>
                  <button className="px-10 py-5 bg-white hover:bg-[#5e6c36] hover:text-white cursor-pointer border border-white/20 rounded-full transition-all duration-500 font-bold backdrop-blur-sm">
                    Stay With Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Concept Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Left: Concept Explanation */}
            <div className="lg:w-1/2">
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
                What is
                <span className=" text-[#5e6c36]"> URBAN ગામ?</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-500 font-light leading-relaxed">
                <p>
                  URBAN ગામ is a carefully planned living environment where{" "}
                  <span className="text-gray-900 font-normal">
                    modern design meets rooted experiences
                  </span>
                  .
                </p>
                <p className="text-base lg:text-lg">
                  Here, you don’t just own a home — you become part of a calm,
                  professionally managed ecosystem that balances{" "}
                  <span className="italic">
                    privacy, nature, and predictability.
                  </span>
                </p>
              </div>
            </div>

            {/* Right: The 3 Pillars */}
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-1 gap-1 border-t border-gray-100">
                {[
                  {
                    title: "Rooted Living",
                    desc: "Connecting back to traditional values and natural surroundings.",
                    icon: "01",
                  },
                  {
                    title: "URBAN Design",
                    desc: "Sophisticated, contemporary architecture for modern comfort.",
                    icon: "02",
                  },
                  {
                    title: "Managed Ownership",
                    desc: "A predictable, professionally maintained residential ecosystem.",
                    icon: "03",
                  },
                ].map((pillar, index) => (
                  <div
                    key={index}
                    className="group py-10 flex items-start gap-8 border-b border-gray-100 transition-colors hover:bg-[#f7f8f4] px-4 -mx-4 rounded-xl"
                  >
                    <span className="text-[#5e6c36]  italic text-2xl opacity-40 group-hover:opacity-100 transition-opacity">
                      {pillar.icon}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-500 ">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section
        id="concept"
        className="py-24 lg:py-16 bg-[#FDFDFB] relative overflow-hidden"
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

      {/* Properties Section */}
      <section id="properties" className="py-24 lg:py-12 bg-[#FDFDFB]">
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
                    className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />

                  {/* Price Overlay */}
                  {/* <div className="absolute bottom-8 left-8 text-white">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-1 font-bold">Starting From</p>
              <p className="text-2xl font-light">₹{plot.price}</p>
            </div> */}

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

                  <Link to={"/enquire-form"} state={{ interest: "Buying a Home" }}>
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

      {/* Amenities Section */}
      <section
        id="amenities"
        className="py-24 lg:py-20 bg-[#FDFDFB] overflow-hidden"
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-5xl">
              <h2 className="text-5xl lg:text-6xl   text-gray-900  ]">
                Experiences Beyond Living
              </h2>
            </div>
            <div className="lg:w-1/3">
              <p className="text-gray-700   mb-6">
                Every amenity is an extension of your home, designed to foster
                connection, wellness, and a sense of belonging.
              </p>
              <div className="h-px w-full bg-linear-to-r from-[#5e6c36] to-transparent"></div>
            </div>
          </div>

          {/* Refined Bento Grid using Map */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              {
                title: "Wellness Center",
                kicker: "Mind & Body",
                desc: "A sanctuary featuring a Himalayan salt sauna and panoramic yoga studio.",
                image:
                  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
                layout: "md:col-span-4 row-span-2 h-[680px]", // Large Vertical
                badge: null,
              },
              {
                title: "Azure Swimming Complex",
                kicker: "Aquatics",
                desc: "Olympic-grade temperature-controlled pool with private cabanas.",
                image:
                  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80",
                layout: "md:col-span-8 h-[350px]",
                badge: "Olympic Grade",
              },
              {
                title: "The Grand Pavilion",
                kicker: "Gatherings",
                desc: "Elegant open-air spaces for weddings, theater, and community galas.",
                image:
                  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
                layout: "md:col-span-4 h-[300px]",
                badge: null,
              },
              {
                title: "Signature Club",
                kicker: "Social",
                desc: "Fine dining and lounge spaces curated for the discerning resident.",
                image:
                  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80",
                layout: "md:col-span-4 h-[300px]",
                badge: "Members Only",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.layout} group relative overflow-hidden rounded-[3rem] cursor-pointer   shadow-sm`}
              >
                {/* Image with slower, smoother zoom */}
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                  alt={item.title}
                />

                {/* Unified Overlay Strategy */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Badge (Optional) */}
                {item.badge && (
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                      <span className="text-white text-[9px] font-bold uppercase tracking-widest">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content - Aligned to your 01 style */}
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl font-light text-white mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* Reveal Description on Hover */}
                  <div className="max-h-0 group-hover:max-h-28 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                    <p className="text-white font-light leading-relaxed">
                      {item.desc}
                    </p>

                    <Link to={"/enquire-form"}>
                    <div className="mt-4 mb-20 p-2 px-5 rounded-full gap-2 bg-white table  text-[#5e6c36] text-lg font-bold">
                      Enquire Now
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="relative bg-[#30411c1c] border border-gray-100 rounded-[4rem] p-12 lg:p-16 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.04)] group">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Begin Your Journey to <br />
                <span className=" text-[#5e6c36]">Sophisticated Living</span>
              </h2>
              <p className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                Schedule a private tour or consult with our community advisors
                to explore custom home opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to={""}
                  className="px-12 py-5 bg-[#5e6c36] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#5e6c36]/90 transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-3 active:scale-95"
                >
                  Enquire Now
                </Link>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-300/30">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="flex items-center justify-center gap-3 text-gray-600 group/link cursor-pointer">
                    <FaPhone className="text-[#5e6c36] transition-transform group-hover/link:scale-125" />
                    <span className="font-bold tracking-tight text-sm group-hover/link:text-[#5e6c36]">
                      +91 98765 43210
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-600 group/link cursor-pointer">
                    <FaEnvelope className="text-[#5e6c36] transition-transform group-hover/link:scale-125" />
                    <span className="font-bold tracking-tight text-sm group-hover/link:text-[#5e6c36]">
                      info@urbangam.com
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                    {[FaInstagram, FaLinkedin, FaTwitter].map((Icon, i) => (
                      <Icon
                        key={i}
                        className="text-xl text-gray-400 hover:text-[#5e6c36] transition-all hover:-translate-y-1 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default URBANGaamLanding;
