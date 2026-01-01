import React from "react";
import { motion } from "framer-motion"; 
import {
  IoPersonOutline,
  IoCallOutline,
  IoCalendarOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { MdOutlineArrowForward } from "react-icons/md";

const SiteVisitModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(); // close after submit (hook API later)
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="w-1/4  max-w-2xl shadow-2xl"
      >
        <div className="max-w-2xl mx-auto p-10 bg-white rounded-[2.5rem] shadow-[0_22px_70px_4px_rgba(0,0,0,0.08)] border border-gray-50">
          <div className="flex justify-between items-center mb-8">
            <div className="mb-10 text-left">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Book a Visit
              </h2>
              <p className="text-gray-400 mt-2 font-medium">
                Experience your future home in person.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-2xl text-slate-400 hover:text-black"
            >
              ✕
            </button>
          </div>

          <form className="space-y-7" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="relative group">
              <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1 block ml-1 transition-colors group-focus-within:text-[#c09745]">
                Full Name
              </label>
              <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-[#c09745] transition-all duration-300">
                <IoPersonOutline className="text-gray-400 group-focus-within:text-[#c09745] text-lg" />
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full bg-transparent py-3 px-3 focus:outline-none text-slate-700 placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="relative group">
              <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1 block ml-1 transition-colors group-focus-within:text-[#c09745]">
                Phone Number
              </label>
              <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-[#c09745] transition-all duration-300">
                <IoCallOutline className="text-gray-400 group-focus-within:text-[#c09745] text-lg" />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                  className="w-full bg-transparent py-3 px-3 focus:outline-none text-slate-700 placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Date Field */}
            <div className="relative group">
              <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1 block ml-1 transition-colors group-focus-within:text-[#c09745]">
                Preferred Date
              </label>
              <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-[#c09745] transition-all duration-300">
                <IoCalendarOutline className="text-gray-400 group-focus-within:text-[#c09745] text-lg" />
                <input
                  type="date"
                  required
                  className="w-full bg-transparent py-3 px-3 focus:outline-none text-slate-700 cursor-pointer"
                />
              </div>
            </div>

            {/* Notes Field */}
            <div className="relative group">
              <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1 block ml-1 transition-colors group-focus-within:text-[#c09745]">
                Location / Specific Notes
              </label>
              <div className="flex items-start border-b-2 border-gray-100 group-focus-within:border-[#c09745] transition-all duration-300">
                <IoLocationOutline className="text-gray-400 mt-3 group-focus-within:text-[#c09745] text-lg" />
                <textarea
                  rows="2"
                  placeholder="Any specific requests?"
                  className="w-full bg-transparent py-3 px-3 focus:outline-none text-slate-700 placeholder:text-gray-300 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group flex items-center justify-between w-full bg-slate-900 text-white pl-8 pr-6 py-5 rounded-2xl font-bold hover:bg-[#c09745] transition-all duration-500 hover:shadow-2xl hover:shadow-[#c09745]/40 active:scale-[0.98]"
            >
              <span className="tracking-wide">Confirm Appointment</span>
              <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white/20 transition-colors">
                <MdOutlineArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SiteVisitModal;
