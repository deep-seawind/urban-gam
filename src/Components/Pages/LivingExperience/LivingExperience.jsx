import React from "react";
import { motion } from "framer-motion"; // Recommended for "World Best" UI (npm i framer-motion)
import { FiWind, FiSun, FiCoffee, FiMaximize2, } from "react-icons/fi";
import { IoLeafOutline, IoShieldCheckmarkOutline, IoGitNetworkOutline } from "react-icons/io5";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const LivingExperience = () => {
  const features = [
    {
      icon: <FiSun className="text-2xl" />,
      title: "Mornings",
      desc: "Open to natural light and crisp, fresh air.",
      delay: 0.1,
    },
    {
      icon: <FiCoffee className="text-2xl" />,
      title: "Days",
      desc: "Move at your own pace, intentional and unhurried.",
      delay: 0.2,
    },
    {
      icon: <FiWind className="text-2xl" />,
      title: "Evenings",
      desc: "Silence, space, and deep reflection.",
      delay: 0.3,
    },
  ];

  const values = [
    { title: "Privacy", icon: <IoShieldCheckmarkOutline />, desc: "Secluded spaces designed for personal sanctity." },
    { title: "Nature", icon: <IoLeafOutline />, desc: "Lush landscapes that seamlessly enter your home." },
    { title: "Connection", icon: <IoGitNetworkOutline />, desc: "A community built on meaningful human bonds." }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "The Living Experience" }]} />
      <section className="relative py-16 px-4 lg:px-0 overflow-hidden bg-[#fdfdfb]">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#4d633c]/5 to-transparent pointer-events-none" />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 items-center">
            {/* Left Side: Storytelling */}
            <div className="space-y-8 col-span-3">
              <div>
                <h3 className="text-[#b4a14c] font-bold tracking-[0.3em] uppercase text-sm mb-4">
                  The Living Experience
                </h3>
                <h2 className="text-5xl lg:text-8xl text-slate-900">
                  Calm, Intentional, <br />
                  <span className="text-color">
                    Unhurried.
                  </span>
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-[#4d633c] pl-6">
                URBAN ગામ allows you to disconnect from noise — without
                disconnecting from convenience. It is a sanctuary designed for
                the modern soul.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 ">
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className="group gap-6 p-6 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-[#4d633c]/5  hover:border-slate-400 border border-zinc-200"
                  >
                    <div className="mt-1 p-3 table rounded-xl group-hover:bg-slate-50 group-hover:text-[#4d633c] bg-[#4d633c] text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-1 pt-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Interactive Visuals */}
            <div className="relative lg:col-span-2 col-span-1 mt-10 lg:mt-0">
              <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl transform   transition-transform duration-700">
                {/* Replace with your actual image path */}
                <img
                  src="https://i.pinimg.com/1200x/f5/17/d3/f517d313baaadff9eed68f6bfc7805f4.jpg"
                  alt="URBAN Living"
                  className="w-full h-150 object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                />

                {/* Floating "Balance" Badge */}
                <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-white/80 rounded-2xl border border-white/20">
                  <p className="text-[#4d633c] font-bold text-xs uppercase tracking-widest mb-4">
                    Core Philosophy
                  </p>
                  <div className="flex justify-between gap-4 text-center">
                    <div className="flex-1">
                      <p className="text-slate-900 font-bold text-sm">
                        Privacy
                      </p>
                      <div className="h-0.5 w-full bg-[#b4a14c] mt-2 opacity-30" />
                      <p className="text-slate-900 font-bold text-sm mt-2">
                        Connection
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-900 font-bold text-sm">Nature</p>
                      <div className="h-0.5 w-full bg-[#b4a14c] mt-2 opacity-30" />
                      <p className="text-slate-900 font-bold text-sm mt-2">
                        Comfort
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#b4a14c]/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#344428]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-0 border border-white/10 rounded-[3rem] overflow-hidden">
          {values.map((v, i) => (
            <div key={i} className="p-10 border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors group bg-white/10">
              <div className="text-[#b4a14c] text-5xl mb-8 group-hover:scale-110 transition-transform bg-white table p-2 rounded-full">
                {v.icon}
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">{v.title}</h3>
              <p className="text-white/60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

   <section className="py-24 bg-white px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-6xl">
            <h3 className="text-[#b4a14c] font-bold tracking-[0.3em] uppercase text-xs mb-4">Aesthetics</h3>
            <h2 className="text-4xl lg:text-5xl text-slate-900 leading-tight">
              Where Architecture 
              <span className="italic font-light"> Breathes with Nature</span>
            </h2>
          </div> 
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-auto md:h-200">
         

          {/* Garden Detail */}
          <div className="relative overflow-hidden group rounded-3xl min-h-75">
            <img 
              src="https://i.pinimg.com/736x/60/f8/b5/60f8b5c0671a83c117aa14e4457d3a3a.jpg" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
              alt="Nature Integration" 
            />
          </div>
            {/* Main Vista - Large Image */}
          <div className="relative lg:col-span-2 overflow-hidden group rounded-3xl min-h-75">
            <img 
              src="https://i.pinimg.com/736x/55/3b/df/553bdf8e0cdeed1042fb4d5c695910f9.jpg" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
              alt="Nature Integration" 
            />
          </div>
          {/* Interior Focus */}
          <div className="col-span-1 relative overflow-hidden group rounded-3xl min-h-75">
            <img 
              src="https://i.pinimg.com/736x/b4/ad/e6/b4ade6014f68178b4da5fc3f93c3fcea.jpg" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
              alt="Luxury Interior" 
            />
          </div>

             {/* Main Vista - Large Image */}
          <div className="relative lg:col-span-2 overflow-hidden group rounded-3xl min-h-75">
            <img 
              src="https://i.pinimg.com/1200x/0d/f4/eb/0df4eb22625b0dff3be9235756c405c8.jpg" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
              alt="Nature Integration" 
            />
          </div>
          {/* Garden Detail */}
          <div className="relative overflow-hidden group rounded-3xl min-h-75">
            <img 
              src="https://i.pinimg.com/1200x/43/98/b1/4398b107fbb9bb33b7a1f68d1302fe09.jpg" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
              alt="Nature Integration" 
            />
          </div>
         
          {/* Interior Focus */}
          <div className="col-span-1 relative overflow-hidden group rounded-3xl min-h-75">
            <img 
              src="https://i.pinimg.com/736x/f7/aa/3d/f7aa3d2055d5c5c1c5150099c28f5a37.jpg" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
              alt="Luxury Interior" 
            />
          </div>

          
        </div>
      </div>
    </section>

    
    </>
  );
};

export default LivingExperience;
