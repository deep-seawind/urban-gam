import React from "react";
import {
  FiCompass,
  FiShield,
  FiTrendingUp,
  FiAnchor,
  FiRepeat,
} from "react-icons/fi";
import Logo from "../../../assets/logo/YUG-logo.png";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const AboutUs = () => {
  const pillars = [
    {
      title: "The URBAN ગામ Synthesis",
      desc: "URBAN represents the precision of modern engineering and luxury; ગામ represents the soul, simplicity, and community of rural life.",
      icon: <FiCompass />,
      step: "01",
    },
    {
      title: "Disciplined Quality",
      desc: "Our commitment isn't just to build, but to maintain. We apply rigorous operational standards to ensure long-term asset preservation.",
      icon: <FiShield />,
      step: "02",
    },
    {
      title: "A Repeatable Legacy",
      desc: "We are creating a scalable blueprint for managed living—bringing the URBAN ગામ philosophy to the most promising growth corridors.",
      icon: <FiRepeat />,
      step: "03",
    },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "About Us" }]} />

      <section className="relative bg-[#FCFCFA] py-14 lg:py-20 overflow-hidden text-slate-900">
        {/* Editorial Watermark */}
        <div className="absolute -top-10 left-30 text-[18vw] font-bold text-slate-100/80 select-none pointer-events-none leading-none">
          About Us
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* --- Section 1: Brand Philosophy --- */}
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 mb-20">
            <div className="col-span-3 ">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-[#c09745]" />
                <span className="text-[#c09745] text-xs font-bold tracking-[0.4em] ">
                  Our Philosophy
                </span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-light mb-10">
                Where <span className="  text-color">Progress</span> <br />
                Meets the <span className="text-color">Soil.</span>
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed  ">
                URBAN ગામ is more than a name; it is a synthesis. We believe
                that true luxury is the ability to enjoy 5-star URBAN precision
                without losing the grounding peace of the village (ગામ).
              </p>
            </div>

            <div className="col-span-2 flex flex-col justify-end pb-4 mt-10 lg:mt-0">
              <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4d633c]/5 rounded-full -mr-16 -mt-16" />
                <h4 className="text-lg font-bold mb-4">The Long-Term Vision</h4>
                <p className="text-slate-500 text-lg leading-relaxed ">
                  "Our vision is to build a repeatable brand of managed luxury
                  retreats. We don't just sell plots; we curate a lifestyle that
                  remains disciplined, beautiful, and valuable for decades to
                  come."
                </p>
                <p className="mt-6 text-[10px] font-black tracking-widest text-[#c09745]">
                  — Founder's Note
                </p>
              </div>
            </div>
          </div>

          {/* --- Section 2: Core Pillars (The Brand Logic) --- */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="group p-12 bg-white rounded-[4rem] border border-slate-50 hover:border-[#c09745]/20 hover:shadow-2xl hover:shadow-[#c09745]/5 transition-all duration-700"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4d633c] flex items-center justify-center text-white text-xl mb-10 group-hover:bg-[#4d633c] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl   mb-6">{item.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed  mb-8">
                  {item.desc}
                </p>
                <span className="text-5xl  text-slate-100 group-hover:text-[#c09745]/30 transition-colors">
                  {item.step}
                </span>
              </div>
            ))}
          </div>

          {/* --- Section 3: Commitment & Quality (Visual) --- */}
          <div className="relative lg:rounded-[5rem] rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 bg-[#4d633c]">
              <div className="p-12 lg:p-16 flex flex-col justify-center text-white">
                <h3 className="text-[#b4a14c] font-bold tracking-[0.4em]  text-[10px] mb-8">
                  Building Trust
                </h3>
                <h2 className="text-4xl lg:text-5xl  mb-10 leading-tight">
                  Unwavering  <span className=" ">Discipline.</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <FiAnchor className="text-[#b4a14c] text-2xl shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Quality Assurance
                      </h4>
                      <p className="text-white/60 text-lg leading-relaxed ">
                        Every brick and landscape contour is vetted by project
                        architects to meet 5-star hospitality benchmarks.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <FiTrendingUp className="text-[#b4a14c] text-2xl shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Operational Integrity
                      </h4>
                      <p className="text-white/60 text-lg leading-relaxed ">
                        Our managed model ensures that the community doesn't
                        just look good at launch, but thrives through
                        professional operator roles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative min-h-125 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Commitment to Quality"
                  className="absolute inset-0 w-full h-full object-cover grayscale   hover:grayscale-0 hover:scale-110 transition-all duration-[3s]"
                />
              </div>
            </div>
          </div>

          {/* --- Section 4: Brand Promise Branding --- */}
          <div className="mt-28 text-center max-w-5xl mx-auto">
            <img
              src={Logo}
              alt="URBAN Gam"
              className="w-40 mx-auto mb-12 rounded-lg shadow-2xl"
            />
            <p className="text-2xl lg:text-3xl   text-slate-800 leading-relaxed">
              "We don’t just build homes; we build the silence, the security,
              and the serenity that the modern city has forgotten."
            </p>
            <div className="w-12 h-px bg-[#c09745] mx-auto mt-10" />
          </div>

          {/* 5. FOUNDER VISION (EDITORIAL STYLE) */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mt-20">
            <div className="relative">
              {/* Organic Mask Image */}
              <div className="h-100 rounded-[4rem] overflow-hidden shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                  alt="Architecture"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-[#4d633c]/20 mix-blend-overlay" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[3rem] shadow-2xl max-w-70 hidden md:block border border-slate-50">
                <p className="text-sm  text-slate-600">
                  "Every footprint we leave on the land must be as beautiful as
                  the soil itself."
                </p>
                <div className="mt-4 h-px w-12 bg-[#b4a14c]" />
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-[#b4a14c] font-bold tracking-[0.4em] uppercase text-[10px] mb-6">
                  Our Commitment
                </h3>
                <h2 className="text-4xl lg:text-5xl  text-slate-900 leading-tight">
                  Long-term Vision,
                  <span className=" font-light"> Zero Compromise.</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-2 h-2 rounded-full bg-[#b4a14c] mt-3" />
                  <p className="text-slate-500 leading-relaxed font-light text-lg">
                    <span className="text-slate-900 font-bold ">
                      Commitment to Quality:
                    </span>   We utilize a professional operator model, ensuring that our
                    resorts function with the precision of a 5-star hotel.
                  </p>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-2 h-2 rounded-full bg-[#b4a14c] mt-3" />
                  <p className="text-slate-500 leading-relaxed font-light text-lg">
                    <span className="text-slate-900 font-bold ">
                      Discipline:
                    </span>  Our phased development isn't just a timeline; it's a promise
                    of controlled growth and maintained exclusivity.
                  </p>
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
