import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineArrowUpRight,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  const [activeSide, setActiveSide] = useState(null);

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "Contact Us" }]} />

      <section className="relative min-h-screen bg-[#F8F7F3] overflow-hidden selection:bg-[#c09745] selection:text-white">
        {/* --- BACKGROUND LAYER: ARCHITECTURAL DEPTH --- */}

        {/* ===== SPLIT BACKGROUND ===== */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div
            className={`relative bg-cover bg-center transition-all duration-700 ease-out
      ${
        activeSide === "left"
          ? "grayscale-0 saturate-110 contrast-110"
          : "grayscale opacity-90"
      }
    `}
            style={{
              backgroundImage: `url(https://i.pinimg.com/1200x/c3/8c/0b/c38c0bd982a2fb1c07e77e84bf340d95.jpg)`,
            }}
          >
            {" "}
            <div className="absolute inset-0 bg-black/50  " />
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`relative bg-cover bg-center transition-all duration-700 ease-out
      ${
        activeSide === "right"
          ? "grayscale-0 saturate-110 contrast-110"
          : "grayscale opacity-90"
      }
    `}
            style={{
              backgroundImage: `url(https://i.pinimg.com/1200x/60/28/f6/6028f676bc21e38b5e30984cc5f557c1.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black/50  " />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-16 pt-20 pb-20">
          {/* --- SECTION 1: THE STATEMENT HEADER --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-end">
            <div className=" not-only-of-type:">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl text-white"
              >
                Let's Talkreality
              </motion.h1>
            </div>
            <div className="  pb-4 lg:pl-10">
              <p className="text-white text-lg leading-relaxed border-l border-[#c09745] pl-4">
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
                <div className="sticky top-12 space-y-6">
                  {[
                    {
                      label: "Digital Enquiries",
                      val: "studio@urbangam.com",
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
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="bg-white p-7 px-10 rounded-[3rem] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.03)] border border-white group transition-all"
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
                      <h4 className="text-xl text-slate-900 leading-snug">
                        {item.val}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: THE FORM (BEYOND THE BOX) */}
            <div
              className=""
              onMouseEnter={() => setActiveSide("right")}
              onMouseLeave={() => setActiveSide(null)}
            >
              <div className="bg-white rounded-[4rem] p-10 lg:p-19 shadow-[0_60px_100px_-40px_rgba(0,0,0,0.08)]">
                <form className="space-y-16">
                  {/* Floating Input Group */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                    <div className="relative group">
                      <input
                        type="text"
                        className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#c09745] transition-all text-xl placeholder-transparent"
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
                        className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#c09745] transition-all text-xl   placeholder-transparent"
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
                    <select className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#c09745] transition-all   appearance-none cursor-pointer">
                      <option>Select Project Nature</option>
                      <option>Private Residence</option>
                      <option>Commercial Development</option>
                      <option>Investment Inquiry</option>
                    </select>
                    <div className="absolute right-0 bottom-4 pointer-events-none text-slate-400">
                      <HiOutlineArrowUpRight />
                    </div>
                  </div>

                  <div className="relative group">
                    <textarea
                      rows="2"
                      className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#c09745] transition-all text-xl placeholder-transparent resize-none"
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
                      className="w-full md:w-auto bg-slate-900 text-white px-16 py-7 rounded-full text-[10px] font-bold tracking-[0.4em] flex items-center justify-center gap-6 hover:bg-[#c09745] transition-all duration-500 shadow-2xl"
                    >
                      Send Inquiry{" "}
                      <HiOutlineArrowLongRight className="text-xl" />
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* --- SECTION 3: THE INTERACTIVE FOOTER --- */}
          <div className="mt-20 border-t border-slate-200 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-color hover:bg-white hover:text-[#5e6c36] hover:border-[#5e6c36] hover:-translate-y-2 transition-all duration-500"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="font-serif italic text-2xl text-slate-100">
              Inspired by Heritage, Built for Forever.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
