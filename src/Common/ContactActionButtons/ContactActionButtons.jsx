import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";

const ContactActionButtons = () => {
  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-5">
      {/* WhatsApp - Floating Pulse Orb */}
      <div className="relative group">
        {/* Radiating Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
        
        <a
          href="https://wa.me/919000012345?text=Hello%20UrbanGAM,%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-linear-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-500 hover:scale-110  active:scale-90"
        >
          <FaWhatsapp className="text-2xl sm:text-3xl transition-transform" />
          
          {/* Subtle tooltip that appears on hover */}
         <span className="absolute right-20 bg-slate-900 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Call Now - Minimalist Glass Orb */}
      <div className="relative group">
        <a
          href="tel:+919000012345"
          aria-label="Call Now"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-110 hover:bg-[#c09745] active:scale-90"
        >
          <HiOutlinePhone className="text-2xl sm:text-3xl" />
          
          {/* Subtle tooltip that appears on hover */}
          <span className="absolute right-20 bg-slate-900 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Call Now
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactActionButtons;