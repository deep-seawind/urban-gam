import React from "react";
import { 
    HiOutlineArrowLongRight,
  HiOutlineCalendarDays,
  HiOutlineClock,
} from "react-icons/hi2";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      category: "Architecture",
      date: "Dec 20, 2025",
      readTime: "5 min",
      title: "The Soul of Urban ગામ: Earthy Materials",
      excerpt:
        "Exploring the philosophy behind our construction—from hand-hewn stone to lime plaster.",
      // Fixed Image URL
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Lifestyle",
      date: "Dec 15, 2025",
      readTime: "3 min",
      title: "Designing for the Golden Hour",
      excerpt:
        "How our architectural positioning maximizes natural light to reduce energy costs.",
      // Fixed Image URL
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Investment",
      date: "Dec 05, 2025",
      readTime: "7 min",
      title: "The Legacy of Land Value",
      excerpt:
        "Why controlled architecture is the key to maintaining premium property valuation.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "Community",
      date: "Nov 28, 2025",
      readTime: "4 min",
      title: "Crafting the Modern Village",
      excerpt:
        "How Urban ગામ redefines communal spaces for the next generation of living.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "Nature",
      date: "Nov 15, 2025",
      readTime: "6 min",
      title: "Reforesting the Urban Edge",
      excerpt:
        "Our commitment to indigenous plantation and creating a micro-climate of peace.",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "Design",
      date: "Nov 02, 2025",
      readTime: "5 min",
      title: "Minimalism vs. Functionalism",
      excerpt:
        "Finding the balance between aesthetic purity and the needs of daily family life.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="bg-[#F8F9FA] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative mb-24">
            <h2 className="text-5xl lg:text-7xl font-light text-slate-900 ">
              Latest
              <span className=" text-color ps-3 font-normal">Insights</span>
            </h2>
          </div>

          {/* --- GRID COL 3 LAYOUT --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {posts.map((post, idx) => (
              <Link
                to={`/blog-details`} // Dynamic link to the details page
                key={post.id}
                className="group cursor-pointer block" // added 'block' for proper link behavior
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 rounded-[3rem] overflow-hidden mb-8 shadow-lg transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />

                  {/* Floating Glass Meta Tag */}
                  <div className="absolute top-6 left-6 bg-white/70 backdrop-blur-md px-5 py-2 rounded-2xl border border-white/20">
                    <span className="text-[10px] font-bold tracking-widest text-slate-900">
                      {post.category}
                    </span>
                  </div>

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-slate-900 scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                      <HiOutlineArrowLongRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-2">
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold tracking-widest mb-4 uppercase">
                    <span className="flex items-center gap-1.5">
                      <HiOutlineCalendarDays className="text-[#c09745] text-sm" />{" "}
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1.5">
                      <HiOutlineClock className="text-[#c09745] text-sm" />{" "}
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-[#c09745] transition-colors duration-300">
                    {post.title}
                  </h4>

                  <p className="text-slate-500 leading-relaxed line-clamp-2 text-sm font-light">
                    {post.excerpt}
                  </p>

                  {/* Interactive Link Label */}
                  <div className="mt-6 flex items-center gap-2 text-[#c09745] text-sm font-bold tracking-widest opacity-0 group-hover:opacity-100 transform -translate-x-2.5 group-hover:translate-x-0 transition-all duration-500 uppercase">
                    Read Article <HiOutlineArrowLongRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
 
        </div>
      </section>
    </>
  );
};

export default Blog;
