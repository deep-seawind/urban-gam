import React, { useState } from "react";
import {
  HiOutlineArrowsPointingOut,
  HiOutlineUserGroup,
  HiOutlineHomeModern,
  HiOutlineSun,
  HiOutlineSquare2Stack,
  HiOutlineMap,
} from "react-icons/hi2";
import { FiArrowLeft, FiDownload, FiCheckCircle } from "react-icons/fi";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const LayoutDetails = ({ plotSize = "500 sq yd" }) => {
  const [activeFloor, setActiveFloor] = useState("ground");
  const [activePlot, setActivePlot] = useState("250 sq yd");

 

  // Content Mapping based on Plot Size
  const data = {
    "250 sq yd": {
      title: "The Weekend Retreat",
      profile:
        "Young professionals and couples looking for a low-maintenance sanctuary or a high-yield rental asset.",
      builtUp: "1,800 - 2,200 sq ft",
      highlights: [
        "Compact Efficiency",
        "Studio Living Option",
        "Private Courtyard",
      ],
      logic:
        "Designed for the 'Lock-and-Leave' lifestyle. Minimal corridors, maximum light.",
    },
    "500 sq yd": {
      title: "The Family Sanctuary",
      profile:
        "Multi-generational families seeking a balance of private suites and expansive communal gathering spaces.",
      builtUp: "3,500 - 4,200 sq ft",
      highlights: ["Double Height Living", "Outdoor Deck", "Service Quarters"],
      logic:
        "Centralized around a 'Brahmasthan' or open court to ensure natural cross-ventilation.",
    },
    "1000 sq yd": {
      title: "The Grand Estate",
      profile:
        "High-net-worth individuals prioritizing absolute seclusion, expansive landscape, and a legacy home.",
      builtUp: "6,000+ sq ft",
      highlights: ["Private Orchard", "Lap Pool Provision", "Guest Pavilion"],
      logic:
        "A boundary-less feel where the architecture dissolves into the surrounding forest.",
    },
  };
  
   const currentData = data[activePlot];
  const current = data[plotSize] || data["500 sq yd"];

  return (
    <>
      <Breadcrumb items={[  { label: currentData?.title }]} />

      <div className="bg-[#FCFCFA] min-h-screen pb-20 text-slate-900">
        {/* 1. MINIMAL NAVIGATION */}
        <nav className="p-8 flex justify-between items-center container mx-auto">
          <button className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 hover:text-[#c09745] transition-colors ">
            <FiArrowLeft /> Back to Layouts
          </button>
          <div className="text-center">
            <span className="block text-[10px] font-black tracking-[0.4em] text-[#c09745] ">
              URBAN ગામ Standard
            </span>
            <span className="text-sm   text-slate-500">{plotSize} Series</span>
          </div>
          <button className="px-6 py-2 border border-slate-200 rounded-full text-[10px] font-bold tracking-widest hover:bg-slate-900 hover:text-white transition-all">
            ENQUIRE
          </button>
        </nav>

        {/* 2. HERO SECTION (TECHNICAL SPLIT) */}
        <header className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-20 py-16 items-center">
          <div className="space-y-8 col-span-3">
            <h1 className="text-5xl lg:text-7xl font-light ">
              {current.title.split(" ")[0]}
              <span className="text-color">
                 
                {current.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              {current.logic}
            </p>
            <div className="flex gap-12 pt-4">
              <div>
                <span className="text-[12px] font-bold text-[#c09745]  tracking-widest block mb-2">
                  Built-up Area
                </span>
                <span className="text-2xl ">{current.builtUp}</span>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <span className="text-[12px] font-bold text-[#c09745]  tracking-widest block mb-2">
                  Plot Scale
                </span>
                <span className="text-2xl ">{plotSize}</span>
              </div>
            </div>
          </div>

          <div className="relative col-span-2">
            <div className="aspect-4/3 rounded-[4rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover"
                alt="Interior Detail"
              />
            </div> 
          </div>
        </header>

        {/* 3. INTERACTIVE PLAN VIEWER */}
        <section className="container mx-auto px-6 lg:px-12 py-16">
          <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-sm border border-slate-100">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
              <div>
                <h2 className="text-4xl  mb-4">Sample Layout</h2>
                <p className="text-slate-400 text-sm">
                  Illustrative architectural draft. Subject to structural
                  optimization.
                </p>
              </div>
              <div className="flex bg-[#FCFCFA] p-2 rounded-2xl border border-slate-100">
                <button
                  onClick={() => setActiveFloor("ground")}
                  className={`px-8 py-3 rounded-xl text-[10px] font-bold tracking-widest transition-all ${
                    activeFloor === "ground"
                      ? "bg-[#4d633c] text-white shadow-lg"
                      : "text-slate-400"
                  }`}
                >
                  GROUND FLOOR
                </button>
                <button
                  onClick={() => setActiveFloor("first")}
                  className={`px-8 py-3 rounded-xl text-[10px] font-bold tracking-widest transition-all ${
                    activeFloor === "first"
                      ? "bg-[#4d633c] text-white shadow-lg"
                      : "text-slate-400"
                  }`}
                >
                  FIRST FLOOR
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-8 bg-[#f8f9fa] rounded-[3rem] p-12 aspect-4/2 flex items-center justify-center border-2 border-dashed border-slate-200 group">
                <div className="text-center">
                  <HiOutlineMap className="text-6xl text-slate-200 mb-4 mx-auto group-hover:text-[#c09745] transition-colors" />
                  <p className="text-slate-300  ">
                    Blueprints are exclusive to registered members.
                  </p>
                  <button className="mt-6 flex items-center gap-2 mx-auto text-[10px] font-bold text-[#c09745] tracking-[0.2em] ">
                    <FiDownload /> Request High-Res PDF
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-12">
                <div>
                  <h4 className="flex items-center gap-2 text-[#c09745] text-[10px] font-bold tracking-widest  mb-6">
                    <HiOutlineUserGroup className="text-lg" /> Ideal Buyer
                    Profile
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {current.profile}
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[#c09745] text-[10px] font-bold tracking-widest ">
                    Key Built-up Options
                  </h4>
                  {current.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-slate-800 font-medium"
                    >
                      <FiCheckCircle className="text-[#4d633c]" /> {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DESIGN RULES (THE "DISCIPLINE") */}
        <section className="container mx-auto px-6 lg:px-0 text-center py-10">
          <div className="inline-block p-4 rounded-full bg-[#4d633c]/5 mb-8">
            <HiOutlineHomeModern className="text-3xl text-[#4d633c]" />
          </div>
          <h2 className="text-4xl  mb-8">Architectural Guardianship</h2>
          <p className="text-slate-500 leading-relaxed mb-12">
            To preserve the "ગામ" aesthetic and protect your long-term
            investment, we enforce{" "}
            <span className="text-slate-900 font-bold underline decoration-[#c09745]">
              Limited Customization
            </span>
            . Owners can customize interiors entirely, but external facades and
            landscape boundaries are managed by URBAN ગામ to ensure community
            harmony.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Facade", icon: <HiOutlineSquare2Stack /> },
              { label: "Landscaping", icon: <HiOutlineSun /> },
              { label: "Ventilation", icon: <HiOutlineArrowsPointingOut /> },
              { label: "Materials", icon: <HiOutlineHomeModern /> },
            ].map((rule, i) => (
              <div key={i} className="group  ">
                <div className="text-[#c09745] text-xl mb-2 flex justify-center">
                  {rule.icon}
                </div>
                <span className="text-sm font-bold   text-slate-400 group-hover:text-slate-900 transition-colors">
                  {rule.label} Controlled
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default LayoutDetails;
