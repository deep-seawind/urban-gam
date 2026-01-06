import React from "react";
import { Link } from "react-router-dom";

const UrbanGamAmenities = () => {
  return (
    <>
      {/* Amenities Section */}
      <section
        id="amenities"
        className="py-10 lg:py-20 bg-[#FDFDFB] overflow-hidden"
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-5xl">
              <h2 className="text-5xl lg:text-6xl   text-gray-900  ]">
                Experiences Beyond Living
              </h2>
            </div>
            <div className="lg:w-1/3">
              <p className="text-gray-700   mb-6">
                Every amenity is an extension of your home, designed to foster
                connection, wellness, and a sense of belonging.
              </p>
              <div className="h-px w-full bg-linear-to-r from-[#5e6c36] to-transparent"></div>
            </div>
          </div>

          {/* Refined Bento Grid using Map */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              {
                title: "Wellness Center",
                kicker: "Mind & Body",
                desc: "A peaceful retreat offering yoga spaces, spa therapies, and holistic wellness experiences.",
                image:
                  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
                layout: "md:col-span-4 row-span-2 h-[680px]",
                badge: null,
              },
              {
                title: "Swimming Pool",
                kicker: "Leisure",
                desc: "A luxurious temperature-controlled swimming pool designed for relaxation and recreation.",
                image:
                  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80",
                layout: "md:col-span-8 h-[350px]",
                badge: "Premium",
              },
              {
                title: "Event Lawn",
                kicker: "Celebrations",
                desc: "A beautifully landscaped open lawn ideal for weddings, celebrations, and community events.",
                image:
                  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
                layout: "md:col-span-4 h-[300px]",
                badge: null,
              },
              {
                title: "Stay Villas",
                kicker: "Luxury Living",
                desc: "Private, thoughtfully designed villas offering comfort, privacy, and premium living.",
                image:
                  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80",
                layout: "md:col-span-4 h-[300px]",
                badge: "Exclusive",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.layout} group relative overflow-hidden rounded-[3rem] cursor-pointer   shadow-sm`}
              >
                {/* Image with slower, smoother zoom */}
                <img
                  src={item.image}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                  alt={item.title}
                />

                {/* Unified Overlay Strategy */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Badge (Optional) */}
                {item.badge && (
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                      <span className="text-white text-[9px] font-bold uppercase tracking-widest">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content - Aligned to your 01 style */}
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl font-light text-white mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* Reveal Description on Hover */}
                  <div className="max-h-0 group-hover:max-h-28 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                    <p className="text-white font-light leading-relaxed">
                      {item.desc}
                    </p>

                    <Link
                      to={"/enquire-form"}
                      state={{ interest: "Event / Wedding" }}
                    >
                      <div className="mt-4 mb-20 p-2 px-5 rounded-full gap-2 bg-white table  text-[#5e6c36] text-lg font-bold">
                        Enquire Now
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UrbanGamAmenities;
