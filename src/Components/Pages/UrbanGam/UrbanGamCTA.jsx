import React from "react";
import { Link } from "react-router-dom";

const UrbanGamCTA = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-24 lg:py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="relative bg-[#30411c1c] border border-gray-100 rounded-[4rem] p-12 lg:p-16 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.04)] group">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Begin Your Journey to <br />
                <span className=" text-[#5e6c36]">Sophisticated Living</span>
              </h2>
              <p className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                Schedule a private tour or consult with our community advisors
                to explore custom home opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to={"/enquire-form"}
                  className="px-12 py-5 bg-[#5e6c36] text-white font-bold   rounded-full hover:bg-[#5e6c36]/90 transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-3 active:scale-95"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UrbanGamCTA;
