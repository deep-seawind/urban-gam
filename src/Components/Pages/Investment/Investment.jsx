import React from 'react';
import { FiTrendingUp, FiPieChart, FiShield, FiLayers, FiArrowRight } from 'react-icons/fi';
import { IoBarChartOutline, IoBusinessOutline, IoStatsChartOutline } from "react-icons/io5";
import Breadcrumb from '../../../Common/Breadcrumb/Breadcrumb';

const Investment = () => {
  const drivers = [
    { 
      title: "Controlled Inventory", 
      desc: "Limited plot releases to maintain scarcity and drive premium resale value.",
      icon: <FiShield />,
      stat: "High Demand"
    },
    { 
      title: "Professional Management", 
      desc: "Managed by third-party experts to ensure resort-grade upkeep and guest satisfaction.",
      icon: <IoBusinessOutline />,
      stat: "5-Star Standard"
    },
    { 
      title: "Rental Income Potential", 
      desc: "Optional participation in the rental pool for passive yields during vacant periods.",
      icon: <FiPieChart />,
      stat: "Passive Yield"
    }
  ];

  return (

    <>
    <Breadcrumb items={[{ label: "Investment Opportunities" }]} />

     <section className="py-16 bg-[#FCFCFA] text-slate-900 overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        
        {/* Header: The Investment Thesis */}
        <div className="  mb-24">
          <span className="text-[#b4a14c] font-bold tracking-[0.5em] text-[10px] mb-6 block">Asset Strategy</span>
          <h2 className="text-5xl lg:text-7xl font-light mb-8">
            Lifestyle Today. 
            <span className=" text-color"> Appreciation Tomorrow.</span>
          </h2>
          <p className="text-xl text-slate-500">
            Urban ગામ is an institutional-grade land asset. We combine the emotional value of a second home with the financial rigor of a managed hospitality project.
          </p>
        </div>

        {/* Section 1: Growth Drivers Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:mb-32 mb-20">
          {drivers.map((item, idx) => (
            <div key={idx} className="group p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-[#4d633c] flex items-center justify-center text-2xl text-white mb-8 group-hover:bg-[#4d633c]/20 group-hover:text-[#4d633c] transition-all duration-500">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold text-[#b4a14c] uppercase tracking-widest">{item.stat}</span>
              <h4 className="text-2xl  mt-2 mb-4">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section 2: Phase-Wise Development Logic */}
        <div className="bg-[#4d633c] rounded-4xl lg:rounded-[4rem] p-8 lg:p-20 text-white relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <IoBarChartOutline size={400} className="absolute -right-20 -top-20" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-[#b4a14c] font-bold tracking-[0.3em] uppercase text-xs mb-6">Execution Roadmap</h3>
              <h2 className="text-4xl lg:text-5xl mb-8">Phased Development <br /> <span className="">Logic.</span></h2>
              <p className="text-white/70 leading-relaxed mb-10">
                Unlike traditional plots, our value is tied to infrastructure milestones. Each phase increases the project's utility and, subsequently, its market valuation.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full border border-[#b4a14c] flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">1</div>
                  <p className="text-sm"><span className="font-bold text-[#b4a14c]">Land & Utility:</span> Securing base infrastructure and boundary definitions.</p>
                </div>
                <div className="flex gap-4 opacity-50">
                  <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">2</div>
                  <p className="text-sm"><span className="font-bold">Hospitality Launch:</span> Operational wellness center and common amenities.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
               <IoStatsChartOutline className="text-[#b4a14c] text-5xl mb-6" />
               <h4 className="text-xl font-bold mb-4">Brand-Led Value</h4>
               <p className="text-sm text-white/60 leading-relaxed ">
                 "A brand is a premium on the price of land. By positioning Urban ગામ as a luxury resort destination, we create a value floor that independent plots cannot match."
               </p>
            </div>
          </div>
        </div>

        {/* Section 3: Rental Income Overview (The Yield) */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative h-125 rounded-[3.5rem] overflow-hidden order-2 lg:order-1 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover" 
                alt="Rental Experience" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#4d633c]/80 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 glassmorphism bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                 <p className="text-white  text-lg">"Turn your weekend home into a generating asset."</p>
              </div>
           </div>

           <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-[#b4a14c] font-bold tracking-[0.3em] uppercase text-xs">The Yield Model</h3>
              <h2 className="text-4xl lg:text-5xl text-slate-900 leading-tight">
                Passive Income  <span className="text-color">Active Growth.</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                Our rental pool allows owners to earn revenue through professional guest management. We manage the bookings, the cleaning, and the maintenance—you collect the returns.
              </p>
              
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-slate-800 font-medium">
                   <FiLayers className="text-[#b4a14c]" /> Transparent Revenue Sharing
                 </li>
                 <li className="flex items-center gap-3 text-slate-800 font-medium">
                   <FiLayers className="text-[#b4a14c]" /> Monthly Performance Reports
                 </li>
                 <li className="flex items-center gap-3 text-slate-800 font-medium">
                   <FiLayers className="text-[#b4a14c]" /> Integrated Owner Portal
                 </li>
              </ul>

              {/* <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-[#4d633c] transition-all group">
                Download Investment Prospectus <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button> */}
           </div>
        </div>

      </div>
    </section>
    </>
   
  );
};

export default Investment;