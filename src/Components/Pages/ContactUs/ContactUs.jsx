import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineArrowUpRight,
  HiOutlineArrowLongRight,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CityImage from "../../../assets/contact/city.jpg";
import VillageImage from "../../../assets/contact/village.jpg";
import SiteVisitModal from "./SiteVisitModal";

const ContactUs = () => {
  const [activeSide, setActiveSide] = useState(null);

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/URBANgam.india",
      label: "Facebook",
    },
    { icon: FaXTwitter, href: "https://x.com/URBANgamindia", label: "X" },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/URBANgam.india/",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/URBAN-gam/",
      label: "LinkedIn",
    },
    {
      icon: FaPinterestP,
      href: "https://in.pinterest.com/URBANgamindia/",
      label: "Pinterest",
    },
  ];

  const [openSiteVisit, setOpenSiteVisit] = useState(false);

  return (
    <>
      <Breadcrumb items={[{ label: "Contact Us" }]} />

      <section className="relative min-h-screen bg-[#F8F7F3] overflow-hidden selection:bg-[#c09745] selection:text-white">
        {/* --- BACKGROUND LAYER: ARCHITECTURAL DEPTH --- */}

        {/* ===== SPLIT BACKGROUND ===== */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div
            className={`relative bg-cover bg-center opacity-20
           
            `}
            style={{
              backgroundImage: `url(${CityImage})`,
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-yellow-600/90 via-amber-500/40 to-transparent" />
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`relative bg-cover bg-center opacity-20
              
                `}
            style={{
              backgroundImage: `url(${VillageImage})`,
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-green-900/90 via-green-900/50 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-0 pt-20 pb-20">
          {/* --- SECTION 1: THE STATEMENT HEADER --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-end">
            <div className=" not-only-of-type:">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl text-black font-light"
              >
                Let's <span className="text-color">Talkreality</span>
              </motion.h1>
            </div>
            <div className="pb-4 lg:pl-10">
              <p className="text-black text-lg leading-relaxed border-l-4 border-[#c09745] pl-4">
                We don't just build structures; we curate legacies. Reach out to
                discuss your next landmark project.
              </p>
            </div>
          </div>

          {/* --- SECTION 2: THE SPLIT EXPERIENCE --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* LEFT: MINIMALIST INFO GRID */}
            <div
              className=" "
              onMouseEnter={() => setActiveSide("left")}
              onMouseLeave={() => setActiveSide(null)}
            >
              {/* LEFT: THE CONCIERGE CARDS */}
              <div className="lg:col-span-5 space-y-8">
                <div className="sticky top-12  grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {[
                    {
                      label: "Digital Enquiries",
                      val: "info@URBANgam.com",
                      icon: <HiOutlineEnvelope />,
                    },
                    {
                      label: "Direct Line",
                      val: "+91 90000 12345",
                      icon: <HiOutlinePhone />,
                    },
                    {
                      label: "The Pavilion",
                      val: "Heritage Drive, Surat, IN",
                      icon: <HiOutlineMapPin />,
                    },
                    {
                      label: "Schedule Site Visit",
                      val: "Book an Appointment",
                      icon: <HiOutlineCalendarDays />,
                      action: () => setOpenSiteVisit(true),
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      onClick={item.action}
                      whileHover={{ y: -5 }}
                      className="cursor-pointer bg-white p-6 px-10 rounded-[3rem] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.03)] border border-white group transition-all"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#c09745] flex items-center justify-center text-white text-2xl">
                          {item.icon}
                        </div>
                        <HiOutlineArrowLongRight className="text-slate-300 group-hover:text-[#c09745] group-hover:translate-x-2 transition-all text-4xl" />
                      </div>
                      <p className=" font-bold text-slate-500 mb-2">
                        {item.label}
                      </p>
                      <h4 className="text-xl text-slate-900 leading-snug mb-0">
                        {item.val}
                      </h4>
                    </motion.div>
                  ))}
                </div>

                {/* --- SECTION 3: THE INTERACTIVE FOOTER --- */}
                <div className=" bg-white p-10  rounded-[3rem]  gap-10">
                  <h4 className="text-slate-900 font-bold mb-2 text-xl text-center">
                    Follow Us
                  </h4>
                  <div className="flex items-center justify-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        className="w-12 h-12 rounded-2xl bg-[#c09745] flex items-center justify-center text-white hover:bg-white hover:text-[#c09745] hover:border-[#c09745] hover:-translate-y-2 transition-all duration-500"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: THE FORM (BEYOND THE BOX) */}
            <div
              className=""
              onMouseEnter={() => setActiveSide("right")}
              onMouseLeave={() => setActiveSide(null)}
            >
              <div className="bg-white rounded-[4rem] p-10 lg:p-18 shadow-[0_60px_100px_-40px_rgba(0,0,0,0.08)]">
                <form className="space-y-16">
                  {/* Floating Input Group */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                    <div className="relative group">
                      <input
                        type="text"
                        className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#c09745] transition-all  placeholder-transparent"
                        id="name"
                        placeholder="Name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-4 text-[10px] font-bold  text-[#c09745] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-700 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-[15px] peer-focus:text-[#c09745]"
                      >
                        Your Full Name
                      </label>
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#c09745] transition-all    placeholder-transparent"
                        id="email"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-4 text-[10px] font-bold  text-[#c09745] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-700 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-[15px] peer-focus:text-[#c09745]"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative group">
                    <select className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#c09745] transition-all appearance-none cursor-pointer">
                      <option value="">Select Project Nature</option>
                      <option value="buyer">Buyer</option>
                      <option value="investor">Investor</option>
                      <option value="event">Event</option>
                      <option value="stay">Stay</option>
                    </select>

                    <div className="absolute right-0 bottom-4 pointer-events-none text-slate-400">
                      <HiOutlineArrowUpRight />
                    </div>
                  </div>

                  <div className="relative group">
                    <textarea
                      rows="2"
                      className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#c09745] transition-all  placeholder-transparent resize-none"
                      id="msg"
                      placeholder="Message"
                    ></textarea>
                    <label
                      htmlFor="msg"
                      className="absolute left-0 -top-4 text-[10px] font-bold  text-[#c09745] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-700 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-[15px] peer-focus:text-[#c09745]"
                    >
                      Brief Narrative
                    </label>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full md:w-auto bg-slate-900 text-white px-10 py-5 rounded-full font-semibold flex items-center justify-center gap-6 hover:bg-[#c09745] transition-all duration-500 shadow-2xl"
                    >
                      Send Inquiry{" "}
                      <HiOutlineArrowLongRight className="text-xl" />
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <SiteVisitModal
            isOpen={openSiteVisit}
            onClose={() => setOpenSiteVisit(false)}
          />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
