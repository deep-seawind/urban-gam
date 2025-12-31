import React from "react";
import { FiCompass, FiLayers, FiRepeat, FiAward } from "react-icons/fi";
import Logo from "../../../assets/logo/logo.jpg";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb items={[{ label: "About Urban ગામ" }]} />

      <section className="relative bg-[#F9F9F9] py-24 lg:py-20 overflow-hidden">
        {/* Editorial Watermark - Large, Elegant Serif */}
        <div className="absolute top-[-5%] left-1/6 text-[22vw] pt-18 text-center font-serif font-semibold text-slate-200/70 select-none pointer-events-none leading-none opacity-50">
          About
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* --- Header Section --- */}
          <div className="flex flex-col lg:flex-row gap-20 lg:items-end mb-32">
            <div className="lg:w-8/10">
              <div className="flex items-center gap-6 mb-10 overflow-hidden">
                <span className="w-16 h-0.5 bg-[#c09745] transform origin-left transition-transform duration-1000 group-hover:scale-x-110" />
                <span className="text-[#c09745] text-[10px] md:text-sm font-semibold">
                  About Urban ગામ
                </span>
              </div>

              <h2 className="text-5xl lg:text-5xl text-slate-900 leading-[1.05] tracking-tight mb-8">
                Life does not have to
                <span className="font-serif italic text-[#c09745] relative inline-block ps-3">
                  choose
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 25 0, 50 5 T 100 5"
                      fill="none"
                      stroke="#c09745"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                  </svg>
                </span>{" "}
                between <br />
                <span className="font-semibold text-color">
                  progress and peace.
                </span>
              </h2>
            </div>

            <div className="lg:w-4/8 relative">
              <div className="absolute -left-10 top-0 bottom-0 w-px bg-linear-to-b from-[#c09745] to-transparent hidden lg:block" />
              <p className="text-slate-600 text-xl leading-relaxed">
                Urban ગામ is built on a simple belief — that modern progress and
                peaceful living can coexist. Inspired by rooted living and
                guided by urban thinking, we create environments where
                thoughtful planning and nature-led experiences come together in
                harmony.
              </p>
            </div>
          </div>

          {/* --- Core Pillars: The "Gallery" Layout --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-40">
            {/* Card 1 */}
            <div className="group relative p-12 bg-white rounded-[4rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(192,151,69,0.12)] transition-all duration-700 hover:-translate-y-4">
              <div className="w-16 h-16 rounded-3xl bg-[#fdfaf5] flex items-center justify-center mb-10 border border-[#c09745]/10 group-hover:bg-[#c09745] group-hover:text-white group-hover:rotate-360 transition-all duration-1000">
                <FiCompass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 tracking-tight">
                Thoughtful Planning
              </h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                Every space is designed with intention — balancing
                functionality, aesthetics, and long-term livability.
              </p>
              <div className="absolute bottom-10 right-12 text-6xl font-serif text-slate-50 group-hover:text-[#c09745]/5 transition-colors duration-500">
                01
              </div>
            </div>

            {/* Card 2 - Elevated Offset */}
            <div className="group relative p-12 bg-color rounded-[4rem] lg:-translate-y-12 shadow-2xl transition-all duration-700 hover:-translate-y-16">
              <div className="w-16 h-16 rounded-3xl bg-[#c09745] text-white flex items-center justify-center mb-10 shadow-lg shadow-[#c09745]/20">
                <FiLayers className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-white tracking-tight">
                Disciplined Development
              </h3>
              <p className="text-slate-200 leading-relaxed text-lg">
                From architecture to operations, every decision is guided by a
                long-term vision that ensures trust, quality, and lasting value.
              </p>
              <div className="absolute bottom-10 right-12 text-6xl font-serif text-white/5">
                02
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-12 bg-white rounded-[4rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(192,151,69,0.12)] transition-all duration-700 hover:-translate-y-4">
              <div className="w-16 h-16 rounded-3xl bg-[#fdfaf5] flex items-center justify-center mb-10 border border-[#c09745]/10 group-hover:bg-[#c09745] group-hover:text-white transition-all duration-700">
                <FiRepeat className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 tracking-tight">
                Responsible Growth
              </h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                Urban ગામ is not a one-time project — it is a lifestyle brand
                designed to grow responsibly across locations while staying true
                to its soul.
              </p>
              <div className="absolute bottom-10 right-12 text-6xl font-serif text-slate-50 group-hover:text-[#c09745]/5 transition-colors duration-500">
                03
              </div>
            </div>
          </div>

          {/* --- The Brand Promise Section --- */}
          <div className="relative rounded-[5rem] overflow-hidden bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] group">
            <div className="flex flex-col lg:flex-row min-h-80">
              {/* Image Section with Overlay */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src={Logo}
                  alt="Urban Gam Identity"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-[#c09745]/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="lg:w-full p-12 lg:p-18 flex flex-col justify-center relative bg-white w-full">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                  <FiAward className="text-[20rem] text-[#c09745]" />
                </div>

                <h4 className="text-xs font-semibold md:text-[13px] tracking-[0.5em] text-[#c09745] mb-10 flex items-center gap-4">
                  <span className="w-8 h-px bg-[#c09745]" /> Our Promise
                </h4>

                <p className="text-3xl lg:text-4xl font-serif italic text-slate-900 leading-tight mb-10 relative z-10">
                  "Urban ગામ is a commitment to balance — where progress
                  respects nature, and development preserves peace."
                </p>

                <p className="text-slate-500 text-xl leading-relaxed ">
                  Built on trust, guided by vision, and inspired by rooted
                  living, Urban ગામ creates spaces that foster belonging,
                  appreciation, and a meaningful way of life.
                </p>

                {/* Subtle Decorative Quote Mark */}
                <span className="absolute top-20 left-16 text-9xl font-serif text-slate-50 pointer-events-none">
                  “
                </span>
              </div>
            </div>
          </div>

          {/* --- NEW SECTION: THE ARCHITECTURAL LEGACY (WORLD-CLASS UI) --- */}
          <div className="mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Cinematic Stats */}
              <div className=" order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "Acres of Greenery", val: "40+", suffix: "ha" },
                    { label: "Happy Families", val: "250", suffix: "+" },
                    { label: "Design Awards", val: "12", suffix: "" },
                    { label: "Years of Trust", val: "15", suffix: "yrs" }
                  ].map((stat, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="text-5xl font-light text-slate-900 mb-2 flex items-baseline">
                        <span className="group-hover:text-[#c09745] transition-colors duration-500">{stat.val}</span>
                        <span className="text-xl text-[#c09745] ml-1">{stat.suffix}</span>
                      </div>
                      <div className="h-px w-8 bg-[#c09745] mb-4 group-hover:w-full transition-all duration-700" />
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 p-8 bg-[#fdfaf5] border-l-4 border-[#c09745] rounded-r-3xl">
                  <p className="text-slate-600 italic font-serif text-lg">
                    "Our architecture is a response to the land, a dialogue between the sky and the soil of Surat."
                  </p>
                </div>
              </div>

              {/* Right: Floating Aesthetic Composition */}
              <div className=" order-2 lg:order-1 ">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-[4rem] overflow-hidden aspect-4/2 shadow-2xl z-10 group">
                    <img 
                      src="https://i.pinimg.com/1200x/42/3a/63/423a63d412493d69d57b5dbde8cc8849.jpg" 
                      alt="Modern Architecture" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#c09745] rounded-[3rem] z-0 hidden md:block animate-pulse opacity-20" />
                    
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
