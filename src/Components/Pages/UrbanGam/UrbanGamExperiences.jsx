import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import HomeImage from "../../../assets/images/main-home-img.jpg";
import { Link } from "react-router-dom";

const UrbanGamExperiences = () => {

     const experiences = [
    {
      title: "Weddings",
      tag: "Grand Unions",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    },
    {
      title: "Retreats",
      tag: "Deep Focus",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    },
    {
      title: "Family Stays",
      tag: "Rooted Bonding",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    },
    {
      title: "Wellness",
      tag: "Soul Healing",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    },
  ];
  return (
    <>
 <section className="py-16 bg-[#304b1e] text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img
            src={HomeImage}
            alt="Background"
            className="w-full h-full object-cover object-center   brightness-[0.8]"
          />
          {/* Cinematic Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-[#304b1e]/90 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 mb-16 relative z-20">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-5xl">
              <h2 className="text-5xl lg:text-6xl   text-white">
                The Experiences
              </h2>
            </div>
            <div className="lg:w-1/2 border-l border-slate-200 pl-8">
              <p className="text-slate-200 font-light text-lg leading-relaxed  ">
                Urban ગામ is more than a destination; it is a canvas for life's
                most profound moments—where the legacy of celebration meets the
                stillness of the soul.
              </p>
            </div>
          </div>
        </div>

        <div className="pl-6 lg:pl-12 overflow-visible">
          <Swiper
            modules={[Autoplay, Pagination, Mousewheel]}
            spaceBetween={30}
            slidesPerView={1.6}
            loop={true}
            speed={1200}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1440: { slidesPerView: 3.4 },
            }}
            className="experience-swiper !overflow-visible"
          >
            {experiences.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative overflow-hidden rounded-[3rem] bg-slate-800 h-100 transition-all duration-700">
                  {/* Image Component */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                  />

                  {/* Aesthetic Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-all duration-500" />

                  {/* Floating Content */}
                  <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#c09745] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {item.tag}
                    </span>

                    <div>
                      <h3 className="text-5xl font-light mb-8 tracking-tighter">
                        {item.title}
                      </h3>

                      <Link
                        to="/enquire-form"
                        state={{ interest: "Event / Wedding" }}
                        className="inline-flex items-center gap-4  font-bold text-white group/btn"
                      >
                        <span className="w-8 h-px bg-[#c09745]"></span>
                        View Narrative
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#c09745] group-hover/btn:border-[#c09745] transition-all duration-500">
                          <HiOutlineArrowRight className="text-lg" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Decorative Background Index */}
                  <div className="absolute -top-4 -right-4 text-white/5   text-[10rem] pointer-events-none group-hover:text-[#c09745]/10 transition-all duration-700 select-none">
                    0{index + 1}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default UrbanGamExperiences