import React from "react";
import { motion } from "framer-motion";
import {
  IoCloudOutline,
  IoFlowerOutline,
  IoInfiniteOutline,
  IoLeafOutline,
  IoMoonOutline, IoRestaurantOutline, IoSparklesOutline
} from "react-icons/io5";
import { FiTrendingUp, FiPieChart, FiActivity, FiShield } from 'react-icons/fi';
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const Wellness = () => {
  const treatments = [
    {
      title: "Ayurveda Retreats",
      desc: "Ancient wisdom tailored to your modern lifestyle.",
      icon: <IoLeafOutline />,
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
      color: "bg-[#e9ece3]",
    },
    {
      title: "Meditation & Breath",
      desc: "Guided sessions to quiet the mind and center the soul.",
      icon: <IoInfiniteOutline />,
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
      color: "bg-[#f2efe9]",
    },
    {
      title: "Naturopathy",
      desc: "Healing through the raw power of earth’s elements.",
      icon: <IoFlowerOutline />,
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
      color: "bg-[#eceae4]",
    },
  ];

  const amenities = [
    { title: "Boutique Suites", desc: "Thoughtfully designed for deep rest.", icon: <IoMoonOutline /> },
    { title: "Organic Kitchen", icon: <IoRestaurantOutline />, desc: "Farm-to-table dining experiences." },
    { title: "Personal Concierge", icon: <IoSparklesOutline />, desc: "Bespoke service at your fingertips." }
  ];

  const stats = [
    { label: "Appreciation Potential", val: "High", desc: "Located in the city's primary growth corridor.", icon: <FiTrendingUp /> },
    { label: "Yield Management", val: "Passive", desc: "Professional rental pool handles all operations.", icon: <FiPieChart /> },
    { label: "Asset Quality", val: "Premium", desc: "Resort-grade maintenance preserves long-term value.", icon: <FiShield /> },
  ];
  return (
    <>
      <Breadcrumb items={[{ label: "Wellness" }]} />
      <section className="py-16 bg-[#f9f9f6] px-6 overflow-hidden relative">
        {/* Organic Background Shape */}
        <div className="absolute -top-20 -right-20 w-150 h-150 bg-[#4d633c]/5 rounded-full blur-[100px]" />

        <div className="container mx-auto text-center">
       

          <h2 className="text-5xl lg:text-7xl text-slate-900 mb-8 font-light">
            The Art of{" "}
            <span className="italic text-[#4d633c] font-medium">
              Being Still.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed font-light">
            At the heart of URBAN ગામ lies a space dedicated to inner balance. A
            sanctuary where the rhythms of nature guide your healing journey.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-[#f9f9f6] px-6">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {treatments.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div
                className={`relative h-112.5 rounded-[3rem] overflow-hidden mb-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[#4d633c]/10`}
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all" />
                <div className="absolute top-8 left-8 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#4d633c] text-2xl shadow-lg">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-2xl text-slate-900 mb-2 px-4 group-hover:text-[#4d633c] transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm px-4 leading-relaxed italic">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white px-6">
        <div className="container mx-auto border-2 border-[#4d633c]/10 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-stretch">
          {/* Left Side: Value Prop */}
          <div className="lg:w-1/2 p-8 lg:p-20 bg-white flex flex-col justify-center">
            <h3 className="text-[#b4a14c] font-bold tracking-[0.3em] text-[10px] mb-6">
              Partner Excellence
            </h3>
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-8 leading-tight">
              Expertly Guided <br />{" "}
              <span className="text-[#4d633c]">Healing Experiences</span>
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">
              Operated by world-class wellness partners, our center ensures
              professional-grade Ayurveda and Naturopathy. This model not only
              guarantees high-quality care but also enhances the investment
              value by attracting longer, retreat-based stays.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
              <div>
                <p className="text-2xl text-slate-900 italic">Longer Stays</p>
                <p className="text-xs text-slate-400 tracking-widest mt-1">
                  Lifestyle Value
                </p>
              </div>
              <div>
                <p className="text-2xl text-slate-900 italic">Expert Care</p>
                <p className="text-xs text-slate-400 tracking-widest mt-1">
                  Certified Operators
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Imagery */}
          <div className="lg:w-1/2 relative bg-slate-100 min-h-100">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000"
              className="absolute inset-0 w-full h-full object-cover grayscale-30 contrast-110"
              alt="Wellness Partner"
            />
            <div className="absolute inset-0 bg-[#4d633c]/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-color text-white px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b4a14c]/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-[#b4a14c] font-bold tracking-[0.4em] text-xs mb-6">Financial Growth</h3>
            <h2 className="text-5xl lg:text-7xl leading-tight mb-8">
              A Legacy for <br /> <span className="italic text-[#b4a14c]">Generations.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Investing in URBAN ગામ isn’t just about owning a piece of land; it’s about a strategic allocation into a managed hospitality asset that matures with time.
            </p>
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="text-3xl text-[#b4a14c]"><FiActivity /></div>
              <p className="text-sm text-white/70 italic">"Real estate is the closest thing to a 'sure thing' when managed by experts."</p>
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((s, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-white/10 hover:border-[#b4a14c]/40 transition-all duration-500 group">
                <div className="flex justify-between items-start">
                  <div className="text-2xl text-[#b4a14c] mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <span className="text-[10px] tracking-[0.2em] font-bold text-[#b4a14c] ">{s.val}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-black">{s.label}</h4>
                <p className="text-black text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      <section className="py-16 bg-white px-6">
      <div className="container mx-auto">
        <div className="relative lg:rounded-[4rem] rounded-4xl overflow-hidden group">
          {/* Main Visual Background */}
          <div className="absolute inset-0 scale-105 group-hover:scale-100 transition-transform duration-[3s]">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600" 
              alt="Resort Stay" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/80" />
          </div>

          <div className="relative z-10 p-8 lg:p-10 text-center">
            <h3 className="text-[#b4a14c] font-bold tracking-[0.4em] text-xs mb-6">Hospitality</h3>
            <h2 className="text-3xl lg:text-6xl text-white mb-16 italic">The Art of the Stay</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {amenities.map((a, i) => (
                <div key={i} className="p-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl text-white hover:bg-white hover:text-slate-900 transition-all duration-500">
                  <div className="text-3xl mb-4 opacity-80">{a.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{a.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
             
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Wellness;
