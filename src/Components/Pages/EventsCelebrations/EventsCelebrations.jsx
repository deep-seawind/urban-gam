import React from "react";
import {
  FiCalendar,
  FiUsers,
  FiMapPin,
  FiCamera,
  FiArrowRight,
} from "react-icons/fi";
import {
  IoDiamondOutline,
  IoWineOutline,
  IoBriefcaseOutline,
  IoHeartOutline,
} from "react-icons/io5";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const EventsCelebrations = () => {
  const eventTypes = [
    {
      title: "Destination Weddings",
      icon: <IoHeartOutline />,
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      desc: "Exchange vows where the horizon meets heritage.",
    },
    {
      title: "Corporate Retreats",
      icon: <IoBriefcaseOutline />,
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      desc: "Innovation thrives in silence and open spaces.",
    },
    {
      title: "Private Celebrations",
      icon: <IoWineOutline />,
      img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      desc: "Birthdays and anniversaries under the starlit sky.",
    },
  ];

  const features = [
    {
      name: "Grand Event Lawn",
      detail: "Spacious 20,000+ sq.ft area",
      icon: <FiMapPin />,
    },
    {
      name: "Poolside Deck",
      detail: "Perfect for sundowners & mixers",
      icon: <IoWineOutline />,
    },
    {
      name: "Luxury Stay Capacity",
      detail: "40+ guests in boutique suites",
      icon: <FiUsers />,
    },
    {
      name: "Vendor Support",
      detail: "Plug-and-play event infrastructure",
      icon: <FiCalendar />,
    },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "Managed Living & Rentals" }]} />

      <section className="bg-[#fdfdfb] py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-4xl">
              <h3 className="text-[#b4a14c] font-bold tracking-[0.4em] uppercase text-xs mb-4">
                The Destination
              </h3>
              <h2 className="text-5xl lg:text-7xl text-slate-900 font-light">
                Crafting{" "}
                <span className="text-[#4d633c] font-medium">
                  Unforgettable
                </span>{" "}
                Stories.
              </h2>
            </div>
            <p className="text-slate-500 max-w-lg pb-2 border-l-2 border-[#b4a14c] pl-6 my-auto">
              From intimate gatherings to grand celebrations, we provide the
              canvas for your most cherished moments.
            </p>
          </div>

          {/* Interactive Event Type Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {eventTypes.map((type, idx) => (
              <div
                key={idx}
                className="group relative h-100 rounded-[3rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-700 hover:-translate-y-4"
              >
                <img
                  src={type.img}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={type.title}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="w-12 h-12 rounded-2xl bg-[#b4a14c] flex items-center justify-center text-2xl mb-4 group-hover:rotate-360 transition-transform duration-700">
                    {type.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{type.title}</h4>
                  <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {type.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Grid with World-Class Aesthetics */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-24">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-4xl bg-white border border-slate-100 flex flex-col items-center text-center group hover:bg-[#4d633c] transition-all duration-500 shadow-sm hover:shadow-[#4d633c]/20"
              >
                <div className="text-3xl text-[#4d633c] mb-4 group-hover:text-[#b4a14c] transition-colors">
                  {f.icon}
                </div>
                <h5 className="font-bold text-slate-900 group-hover:text-white mb-1 transition-colors">
                  {f.name}
                </h5>
                <p className="text-xs text-slate-400 group-hover:text-white/60 transition-colors uppercase tracking-widest">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Action / CTA Section */}
          <div className="relative rounded-4xl lg:rounded-[4rem] bg-color overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2">

              <div className="p-12 lg:p-20 ">
                 <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl lg:text-5xl text-white mb-8">
                Ready to host your <br />
                <span className="">Masterpiece?</span>
              </h2>
              <p className="text-white/60 mb-10 leading-relaxed">
                Our event concierge is ready to assist you in planning every
                detail of your visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-5 bg-[#b4a14c] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#4d633c] transition-all group">
                  Plan Your Event{" "}
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-10 py-5 border border-white/20 text-white rounded-2xl font-bold hover:bg-white hover:text-slate-900 transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
              </div>

              <div className="">
                 <img
                src="https://i.pinimg.com/1200x/76/84/95/768495900637d1560a82f74ac0ecff78.jpg"
                className="w-full h-120 object-cover"
                alt="Event Enquiry"
              />
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2  pointer-events-none">
             
            </div>

           
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsCelebrations;
