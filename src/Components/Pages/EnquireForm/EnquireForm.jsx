import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const EnquireForm = () => {

  const location = useLocation();

  const defaultInterest = location.state?.interest || "Buying a Home";
  const [interest, setInterest] = useState(defaultInterest);
  const [budgetRange, setBudgetRange] = useState("");
  const [needStay, setNeedStay] = useState("");
  return (
    <section className="bg-[#FAF9F6] py-24 px-6 lg:px-12  relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#5e6c36]"></span>
            <span className="text-[#5e6c36] text-[10px] font-bold uppercase tracking-[0.4em]">
              Reservation & Inquiry
            </span>
            <span className="w-8 h-px bg-[#5e6c36]"></span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 tracking-tighter leading-tight">
            Enquire <span className="  text-[#5e6c36]">Now.</span>
          </h2>
        </div>

        {/* HIGHLIGHT: The Main Card with Premium Border & Glow */}
        <div className="relative group">
          <div className="relative bg-white rounded-[40px] shadow-[0_50px_100px_rgba(45,52,30,0.08)] border border-white/50 p-8 lg:p-16 overflow-hidden">
            <form className="relative z-10 space-y-20">
              {/* 01. Identity Section */}
              <div className="space-y-12">
                <div className="flex space-x-2 items-center border-b border-gray-100 pb-4">
                  <span className="text-lg font-bold text-white bg-[#5e6c36] w-8 h-8 rounded-full flex items-center justify-center shadow-lg shadow-[#5e6c36]/30">
                    1
                  </span>
                  <h3 className="text-xl font-semibold  text-gray-900">
                    Personal Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                  <Input label="Name" required placeholder="John Doe" />
                  <Input
                    label="Mobile Number"
                    required
                    placeholder="+91 00000 00000"
                  />
                  <Input label="Email" placeholder="example@domain.com" />
                  <Input label="City" placeholder="Ahmedabad" />
                </div>
              </div>

              {/* 02. Intent Section */}
              <div className="space-y-12">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-4">
                    <span className=" text-lg font-bold text-white bg-[#5e6c36] w-8 h-8 rounded-full flex items-center justify-center shadow-lg shadow-[#5e6c36]/30">
                      2
                    </span>
                    <h3 className="text-xl font-semibold  text-gray-900">
                      Interested In
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "Buying a Home",
                    "Investment",
                    "Event / Wedding",
                    "Short Stay",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setInterest(item)}
                      className={`relative overflow-hidden rounded-full text-lg px-6 py-4 font-medium transition-all duration-500 transform
                        ${
                          interest === item
                            ? "bg-[#5e6c36] text-white shadow-2xl shadow-[#5e6c36]/30 -translate-y-1"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-100 hover:-translate-y-0.5"
                        }`}
                    >
                      <span className="relative z-10">{item}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 03. Contextual Section (Highlighted Box) */}
              {/* Contextual Fields */}
              <div className="transition-all duration-700 ease-in-out">
                <div className="bg-[#FAF9F6] rounded-4xl p-8 lg:p-12 border border-[#5e6c36]/10 shadow-inner space-y-12 animate-in fade-in zoom-in-95 duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5e6c36] animate-pulse"></div>
                    <h3 className="text-2xl text-gray-800  ">
                      {interest.replace(" / ", " & ")} Details
                    </h3>
                  </div>

                  {/* NEW: Budget Range & Property Specifics for Buying/Investment */}
                  {(interest === "Buying a Home" ||
                    interest === "Investment") && (
                    <div className="space-y-12">
                      {/* Budget Range Selection */}
                      <div className="space-y-6">
                        <label className="block text-[10px] font-bold text-gray-800 uppercase tracking-widest">
                          Budget Range
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[
                            "Below 50 Lakh",
                            "50–75 L",
                            "75 L – 1.25 Cr",
                            "1.25 Cr+",
                          ].map((range) => {
                            const isSelected = budgetRange === range;

                            return (
                              <button
                                key={range}
                                type="button"
                                onClick={() => setBudgetRange(range)}
                                className={`
                                        relative px-6 py-4 rounded-xl border
                                        transition-all duration-300 text-sm font-medium

                                        ${
                                          isSelected
                                            ? "bg-[#5e6c36] border-[#5e6c36] text-white shadow-lg shadow-[#5e6c36]/20"
                                            : "bg-white border-gray-200 text-black hover:border-[#5e6c36]"
                                        }
                                        `}
                              >
                                {range}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Property Specifics */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 border-t border-gray-100">
                        <Select
                          label="Preferred Plot Size"
                          options={["250 sq yd", "500 sq yd", "1000 sq yd"]}
                        />
                        <Select
                          label="Timeline"
                          options={["Immediate", "3–6 Months", "6–12 Months"]}
                        />
                      </div>
                    </div>
                  )}

                  {/* Event / Wedding Section */}
                  {interest === "Event / Wedding" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                      <Select
                        label="Event Type"
                        options={[
                          "Wedding",
                          "Corporate",
                          "Private Celebration",
                        ]}
                      />

                      <div className="  ">
                        <Input
                          label="Tentative Event Dates"
                          placeholder="e.g. 12–14 December 2026"
                          highlight
                          type="date"
                        />
                      </div>

                      <div className="">
                        <Input
                          label="No. of Guests (Approx)"
                          placeholder="e.g. 250"
                          highlight
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-800 uppercase tracking-widest mb-4">
                          Need Stay for Guests?
                        </label>
                        <div className="flex gap-4">
                          {["Yes", "No"].map((option) => {
                            const isSelected = needStay === option;

                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setNeedStay(option)}
                                className={`
                                        px-8 py-4 rounded-xl border font-medium transition-all
                                        ${
                                          isSelected
                                            ? "bg-[#5e6c36] border-[#5e6c36] text-white shadow-lg shadow-[#5e6c36]/20"
                                            : "bg-white border-gray-200 text-black hover:border-[#5e6c36]"
                                        }
                                    `}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Short Stay Section */}
                  {interest === "Short Stay" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      <Input label="Check-in Date" type="date" highlight />
                      <Input label="Check-out Date" type="date" highlight />
                      <Input label="No. of Guests" placeholder="2" highlight />
                    </div>
                  )}
                </div>
              </div>
              {/* HIGHLIGHT: Enhanced Submit Section */}
              <div className="pt-0 flex flex-col items-center">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-20 py-4 rounded-2xl bg-color text-white font-bold text-lg overflow-hidden transition-all hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(94,108,54,0.4)] active:scale-95"
                >
                  <span className="relative z-10">Submit</span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* HIGHLIGHTED Components */

const Input = ({ label, required, type = "text", placeholder, highlight }) => (
  <div className="group space-y-4">
    <label className="block font-bold text-gray-600 transition-colors group-focus-within:text-[#5e6c36]">
      {label} {required && <span className="text-[#5e6c36]">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b ${
          highlight ? "border-gray-300" : "border-gray-400"
        } py-3 text-base font-light text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#5e6c36] transition-all duration-500`}
      />
    </div>
  </div>
);

const Select = ({ label, options }) => (
  <div className="group space-y-4">
    <label className="block font-bold text-gray-600 group-focus-within:text-[#5e6c36]">
      {label}
    </label>
    <div className="relative">
      <select className="w-full bg-transparent border-b border-gray-200 py-3 text-base font-light text-gray-900 focus:outline-none focus:border-[#5e6c36] transition-all appearance-none cursor-pointer">
        <option value="" className="text-gray-400">
          Select Option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-gray-900">
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:rotate-180 transition-transform duration-500">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className="text-gray-300 group-focus-within:text-[#5e6c36]"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default EnquireForm;
