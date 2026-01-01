import React from "react";
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineArrowLongLeft,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  // Mock data for a single post
  const post = {
    category: "Architecture",
    date: "Dec 20, 2025",
    readTime: "8 min read",
    title: "The Soul of URBAN ગામ: Why We Chose Earthy Materials",
    subtitle:
      "A deep dive into the philosophy of breathable walls, hand-hewn stone, and the return to ancestral construction wisdom.",
    author: {
      name: "Ar. Rahul Mehta",
      role: "Lead Architect",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    },
    mainImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  };

  return (
    <>
      <Breadcrumb items={[{ label: "Blog Details" }]} />

      <div className="bg-white min-h-screen">
        {/* --- HERO SECTION --- */}
        <header className="relative h-[90vh] w-full overflow-hidden">
          <img
            src={post.mainImage}
            className="w-full h-full object-cover scale-105"
            alt="Cover"
          />
      {/* --- IMPROVED CINEMATIC GRADIENT OVERLAY --- */}
<div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-950/50 to-emerald-950" />

          <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 lg:px-12">
            <div className="container mx-auto">
              <motion-div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="max-w-4xl"
              >
                <span className="bg-[#c09745] text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-8 inline-block">
                  {post.category}
                </span>
                <h1 className="text-4xl lg:text-8xl text-white font-normal  mb-8">
                  {post.title}
                </h1>
                <p className="text-xl lg:text-xl text-white font-normal leading-relaxed max-w-2xl border-l-2 border-[#c09745] pl-6">
                  {post.subtitle}
                </p>
              </motion-div>
            </div>
          </div>
        </header>

        {/* --- ARTICLE CONTENT --- */}
        <main className="container mx-auto px-6 lg:px-0 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Sidebar: Socials & Stats */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-48 flex flex-col items-center gap-8">
                <div className="flex flex-col gap-4">
                  <button className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#c09745] hover:text-white transition-all">
                    <FaFacebookF size={14} />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#c09745] hover:text-white transition-all">
                    <FaTwitter size={14} />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#c09745] hover:text-white transition-all">
                    <FaLinkedinIn size={14} />
                  </button>
                </div>
              </div>
            </aside>

            {/* Center: Main Content */}
            <article className="lg:col-span-8">
              <div className="flex items-center gap-8 mb-16 pb-12 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <img
                    src={post.author.avatar}
                    className="w-14 h-14 rounded-full grayscale"
                    alt="Author"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-slate-400 font-normal">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-auto">
                  <span className="flex items-center gap-2">
                    <HiOutlineCalendarDays className="text-[#c09745] text-lg" />{" "}
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <HiOutlineClock className="text-[#c09745] text-lg" />{" "}
                    {post.readTime}
                  </span>
                </div>
              </div>

              <div className="prose prose-xl max-w-none text-slate-700 font-normal leading-relaxed space-y-12">
                <p className="text-2xl text-slate-900 font-normal italic first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#c09745]">
                  Architecture is not just about the space we inhabit, but the
                  feelings that space evokes. At URBAN ગામ, we looked backward
                  to look forward, identifying materials that have survived
                  centuries of weather and cultural shifts.
                </p>

                <h2 className="text-4xl font-normal text-slate-950 pt-8 tracking-tight mb-2">
                  The Breathability of Lime Plaster
                </h2>
                <p>
                  Unlike modern cement, which traps moisture and heat, our lime
                  plaster walls act as a living skin. They regulate humidity
                  naturally, ensuring that the indoor temperature remains
                  significantly lower than the outside heat of the plains.
                </p>

                <div className="my-16 rounded-[3rem] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                    className="w-full aspect-4/2"
                    alt="Detail"
                  />
                  <p className="text-center text-xs text-slate-400 mt-6 tracking-widest uppercase">
                    Fig 1.1 — Texture study of hand-hewn Basalt stone.
                  </p>
                </div>

                <h2 className="text-4xl font-normal text-slate-950 pt-2 tracking-tight mb-2">
                  Stone: The Foundation of Legacy
                </h2>
                <p>
                  Every piece of stone used in our foundations is hand-selected.
                  This isn't just for aesthetics; it's for durability. Stone
                  doesn't rust, it doesn't decay, and it tells a story of the
                  earth it came from.
                </p>
              </div>
            </article>

            {/* Right Sidebar: Related Content */}
<aside className="lg:col-span-3 space-y-12">
  {/* Related Journal Box */}
  <div className="bg-[#FBFBFB] p-8 lg:p-10 rounded-[3rem] border border-slate-100">
    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-10">
      Related Journal
    </h4>
    <div className="space-y-12">
      {[
        {
          id: 2,
          category: "Lifestyle",
          title: "Designing for the Golden Hour at URBAN ગામ",
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
        },
        {
          id: 3,
          category: "Investment",
          title: "The Legacy of Land Value Protection",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop"
        }
      ].map((item) => (
        <Link to={`/blog/${item.id}`} key={item.id} className="group block">
          {/* Small Sidebar Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-5">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:opacity-0 transition-opacity" />
          </div>

          <p className="text-[10px] font-black text-[#c09745] uppercase tracking-widest mb-2">
            {item.category}
          </p>
          <h5 className="font-bold text-slate-900 group-hover:text-[#c09745] transition-colors leading-snug mb-3 text-sm">
            {item.title}
          </h5>
          <div className="flex items-center gap-2 text-[#c09745] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
            Read More <HiOutlineArrowLongRight />
          </div>
        </Link>
      ))}
    </div>
  </div>

  {/* Visual Call to Action Card */}
  <div className="relative p-10 rounded-[3rem] bg-[#c09745] overflow-hidden group">
    {/* Subtle Background Image for CTA */}
    <img 
      src="https://images.unsplash.com/photo-1600607687960-4a2123d7415b?q=80&w=800&auto=format&fit=crop" 
      className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"
      alt="CTA Background"
    />
    
    <div className="relative z-10 text-center">
      <h4 className="text-2xl font-serif italic text-white mb-6">
        Want to see it for yourself?
      </h4>
      <p className="text-white/80 text-xs mb-8 font-light leading-relaxed">
        Experience the textures and light of URBAN ગામ firsthand.
      </p>
      <button className="w-full bg-white text-slate-950 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-950 hover:text-white transition-all duration-500 shadow-xl">
        Book a Site Visit
      </button>
    </div>
  </div>
</aside>
          </div>
        </main>

         
      </div>
    </>
  );
};

export default BlogDetails;
