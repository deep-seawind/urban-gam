import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineXMark,
  HiOutlineViewfinderCircle,
} from "react-icons/hi2";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = [
    "All",
    "Master plan",
    "Villas",
    "Amenities",
    "Events",
    "Nature & landscape",
  ];

  const galleryItems = [
    {
      id: 1,
      category: "Villas",
      size: "large",
      title: "The Signature Villa",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 2,
      category: "Amenities",
      size: "small",
      title: "Infinity Pool",
      img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      category: "Nature & landscape",
      size: "medium",
      title: "Zen Garden",
      img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      category: "Master plan",
      size: "medium",
      title: "Architectural Vision",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      category: "Events",
      size: "small",
      title: "Sundowner Social",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    }, 
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // --- NAVIGATION LOGIC ---
  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <Breadcrumb items={[{ label: "Gallery" }]} />

      <section className="bg-[#FCFCFC] py-16 lg:py-20 relative min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          {/* --- HEADER --- */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <div className="relative">
              <h2 className="text-5xl lg:text-7xl font-light text-slate-900 leading-[0.8] tracking-tighter">
                Gallery 
                <span className="font-serif italic text-[#c09745] ps-3">
                  Studio
                </span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedIndex(null);
                  }}
                  className={`px-6 py-3 rounded-full text-[12px] font-semibold tracking-widest transition-all duration-500 border ${
                    activeCategory === cat
                      ? "bg-[#c09745] text-white border-[#c09745]"
                      : "bg-white text-slate-500 border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* --- MASONRY GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px]">
            {filteredItems.map((item, index) => (
              <motion.div
                layoutId={`img-container-${item.id}`}
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className={`group relative rounded-[3rem] overflow-hidden cursor-zoom-in shadow-sm hover:shadow-2xl transition-all duration-500 ${
                  item.size === "large" ? "lg:row-span-2" : ""
                }`}
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <HiOutlineViewfinderCircle className="text-white text-6xl transform scale-50 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- FULLSCREEN LIGHTBOX --- */}
          <AnimatePresence>
            {selectedIndex !== null && (
              <div className="fixed inset-0 z-100 flex items-center justify-center p-4 lg:p-12">
                {/* Animated Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedIndex(null)}
                  className="absolute inset-0 bg-slate-950/98 backdrop-blur-2xl"
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-110 p-4"
                >
                  <HiOutlineXMark size={40} />
                </button>

                {/* Navigation: Previous */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 lg:left-10 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-110 group"
                >
                  <HiOutlineChevronLeft
                    size={32}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                </button>

                {/* Navigation: Next */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 lg:right-10 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-110 group"
                >
                  <HiOutlineChevronRight
                    size={32}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                {/* Content Container */}
                <div className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center pointer-events-none">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={filteredItems[selectedIndex].id}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="relative pointer-events-auto"
                    >
                      <img
                        src={filteredItems[selectedIndex].img}
                        className="max-h-[75vh] w-auto rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 object-contain"
                        alt={filteredItems[selectedIndex].title}
                      />

                      {/* Caption Box */}
                      <div className="absolute -bottom-20 left-0 right-0 text-center">
                        <span className="text-[#c09745] font-semibold text-[10px] tracking-[0.5em] uppercase mb-2 block">
                          {filteredItems[selectedIndex].category}
                        </span>
                        <h3 className="text-3xl lg:text-5xl text-white font-serif italic tracking-tight">
                          {filteredItems[selectedIndex].title}
                        </h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Counter Label */}
                  <div className="absolute bottom-10 text-white/20 font-semibold tracking-tighter text-8xl -z-10 select-none">
                    {selectedIndex + 1} / {filteredItems.length}
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Gallery;
