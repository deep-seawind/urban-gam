import React from "react";
import {
  FiHexagon,
  FiPlus,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiShield,
} from "react-icons/fi";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const ManagedEcosystem = () => {
  const roles = [
    {
      title: "Owner's Role",
      icon: <FiUsers />,
      points: ["Title Ownership", "Private Stay Usage", "Asset Appreciation"],
      color: "border-[#b4a14c]/20",
    },
    {
      title: "Operator's Role",
      icon: <FiHexagon />,
      points: ["Daily Maintenance", "Guest Management", "Marketing & Events"],
      color: "border-[#4d633c]/20",
    },
  ];

  const faqs = [
    {
      q: "Is the rental pool mandatory?",
      a: "No, owners can choose 100% private use or participate in the rental pool at their discretion.",
    },
    {
      q: "How is maintenance quality ensured?",
      a: "A professional operator conducts weekly audits and preventative maintenance checks.",
    },
    {
      q: "Where can I track my revenue?",
      a: "Owners get access to a dedicated digital dashboard with live occupancy and yield reports.",
    },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "Managed Living & Rentals" }]} />

      {/* --- SECTION 1: HEADER & ROLES --- */}
      <section className="py-16 bg-[#fdfdfb] px-6 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#4d633c]/2 -skew-x-12 transform origin-top" />

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="lg:w-2/3">
              <h3 className="text-[#b4a14c] font-bold tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-4">
                <span className="w-10 h-px bg-[#b4a14c]"></span> The Structure
              </h3>
              <h2 className="text-5xl lg:text-7xl text-slate-900 font-light">
                A Hands-off <br />
                <span className="text-color">Investment Ecosystem.</span>
              </h2>
            </div>
            <p className="lg:w-1/3 text-slate-500 text-lg border-l border-[#b4a14c] pl-6 py-2">
              Ensuring your secondary home is treated as a premium resort suite,
              maintained to 5-star standards while you are away.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Concept Card */}
            <div className="lg:col-span-1 p-12 bg-slate-900 rounded-[3.5rem] text-white relative overflow-hidden group shadow-2xl shadow-slate-200">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#b4a14c]/10 rounded-full blur-3xl group-hover:bg-[#b4a14c]/20 transition-all duration-700" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-10 text-lg">
                    <FiShield className="text-[#b4a14c]" />
                  </div>
                  <h4 className="text-3xl font-bold mb-6">
                    What is
                    <span className="text-[#b4a14c]">  Managed Living?
                    </span>
                  </h4>
                  <p className="text-white/50 leading-relaxed text-lg">
                    Our professional operator model bridges the gap between
                    passive investment and luxury hospitality.
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">
                    Certified Standard
                  </span>
                  <div className="h-px grow bg-white/20" />
                </div>
              </div>
            </div>

            {/* Role Cards */}
            {roles.map((role, idx) => (
              <div
                key={idx}
                className={`p-12 bg-white border ${role.color} rounded-[3.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group relative`}
              >
                <div className="absolute top-8 right-8 text-slate-100 group-hover:text-[#4d633c]/10 transition-colors duration-700">
                  <span className="text-7xl font-bold">
                    {idx + 1}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-3xl group-hover:bg-[#4d633c]/5 flex items-center justify-center text-3xl group-hover:text-[#4d633c] mb-10 bg-[#4d633c] text-white transition-all duration-500 shadow-inner">
                  {role.icon}
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-8">
                  {role.title}
                </h4>
                <ul className="space-y-5">
                  {role.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-slate-600 text-lg group/item"
                    >
                      <FiCheckCircle className="text-[#b4a14c] opacity-40 group-hover/item:opacity-100 transition-opacity" />
                      <span className="group-hover:text-slate-900 transition-colors">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SMART RENTAL (DASHBOARD STYLE) --- */}
      <section className="py-10 bg-white px-6 lg:px-0">
        <div className="container mx-auto rounded-4xl lg:rounded-[5rem] overflow-hidden relative shadow-3xl min-h-100  flex items-center">
          {/* --- 1. THE BACKGROUND IMAGE LAYER --- */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=2000"
              alt="Modern Villa Architecture"
              className="w-full h-full object-cover"
            />
            {/* 2. THE BRAND OVERLAY (Gradient for Legibility) */}
            <div className="absolute inset-0 bg-linear-to-b from-[#2c3822] via-[#324624] to-[#2c3822]/90 backdrop-blur-[2px]" />
          </div>

          {/* --- 3. DECORATIVE ELEMENTS --- */}
          <div
            className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none z-1"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* --- 4. THE CONTENT LAYER --- */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center p-12 lg:p-10 w-full">
            <div className="space-y-8">
       
              <h2 className="text-4xl lg:text-5xl text-white leading-tight">
                Smart Rental{" "}
                <span className=" text-[#b4a14c]">Optimization.</span>
              </h2>
              <p className="text-white/80 text-lg">
                Leverage professional hospitality marketing and dynamic pricing
                to transform your asset into a high-yielding revenue stream.
              </p>

              <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm group hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex justify-between items-center mb-4">
                  <h5 className="text-white font-semibold tracking-widest">
                    Revenue Sharing
                  </h5>
                  <FiArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-white/80 leading-relaxed">
                  Total transparency. View every booking, maintenance cost, and
                  yield through our real-time owner portal.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Vertical Progress/Steps */}
              <div className="space-y-8 relative">
                <div className="absolute left-7.75 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#b4a14c]/30 to-transparent" />

                {[
                  {
                    step: "01",
                    label: "Check-in",
                    sub: "Guest books via resort platform",
                  },
                  {
                    step: "02",
                    label: "Maintenance",
                    sub: "Post-stay professional cleaning",
                  },
                  {
                    step: "03",
                    label: "Settlement",
                    sub: "Yields credited to owner portal",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-10 group relative z-10"
                  >
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#b4a14c] font-serif italic text-2xl group-hover:bg-[#b4a14c] group-hover:text-white transition-all duration-500 shadow-2xl">
                      {s.step}
                    </div>
                    <div className="py-4 border-b border-white/5 grow group-hover:border-[#b4a14c]/30 transition-colors">
                      <h4 className="text-white font-bold text-lg mb-1">
                        {s.label}
                      </h4>
                      <p className="text-white font-medium">
                        {s.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FAQ (EDITORIAL STYLE) --- */}
      <section className="py-16 bg-[#fdfdfb] lg:px-0 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Narrative */}
            <div className="lg:w-1/3">
              <div className="sticky top-10">
                <h3 className="text-[#b4a14c] font-bold tracking-[0.4em] uppercase text-[15px] mb-6">
                  Support
                </h3>
                <h2 className="text-4xl lg:text-5xl text-slate-900 mb-8">
                  Transparency 
                  <span className="text-color"> & Trust.
                  </span>
                </h2>
                <div className="w-16 h-1 bg-[#b4a14c] mb-8" />
                <p className="text-slate-500 text-lg leading-relaxed">
                  We believe clear communication is the bedrock of partnership.
                  Here is how we manage the details.
                </p>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="lg:w-2/3 space-y-6">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-4xl border border-slate-100 overflow-hidden shadow-sm transition-all duration-500 open:shadow-xl open:border-[#4d633c]/20"
                >
                  <summary className="list-none p-8 flex justify-between items-center cursor-pointer select-none">
                    <span className="text-lg font-bold text-slate-800 pr-6">
                      {f.q}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-open:bg-[#b4a14c] group-open:text-white transition-all">
                      <FiPlus className="group-open:rotate-45 transition-transform" />
                    </div>
                  </summary>
                  <div className="p-8 text-slate-500 pt-0 leading-relaxed text-lg animate-fadeIn">
                    <div className="border-t border-slate-50">{f.a}</div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManagedEcosystem;
