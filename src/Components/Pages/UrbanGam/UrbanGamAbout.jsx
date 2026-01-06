import React from "react";

const UrbanGamAbout = () => {
  return (
    <>
      {/* About / Concept Section */}
      <section id="about" className="py-10 lg:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Left: Concept Explanation */}
            <div className="lg:w-1/2">
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
                What is
                <span className=" text-[#5e6c36]"> URBAN ગામ?</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-500 font-light leading-relaxed">
                <p>
                  URBAN ગામ is a carefully planned living environment where{" "}
                  <span className="text-gray-900 font-normal">
                    modern design meets rooted experiences
                  </span>
                  .
                </p>
                <p className="text-base lg:text-lg">
                  Here, you don’t just own a home — you become part of a calm,
                  professionally managed ecosystem that balances{" "}
                  <span className="">privacy, nature, and predictability.</span>
                </p>
              </div>
            </div>

            {/* Right: The 3 Pillars */}
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-1 gap-1 border-t border-gray-100">
                {[
                  {
                    title: "Rooted Living",
                    desc: "Connecting back to traditional values and natural surroundings.",
                    icon: "01",
                  },
                  {
                    title: "URBAN Design",
                    desc: "Sophisticated, contemporary architecture for modern comfort.",
                    icon: "02",
                  },
                  {
                    title: "Managed Ownership",
                    desc: "A predictable, professionally maintained residential ecosystem.",
                    icon: "03",
                  },
                ].map((pillar, index) => (
                  <div
                    key={index}
                    className="group py-10 flex items-start gap-8 border-b border-gray-100 transition-colors hover:bg-[#f7f8f4] px-4 -mx-4 rounded-xl"
                  >
                    <span className="text-[#5e6c36]   text-2xl opacity-40 group-hover:opacity-100 transition-opacity">
                      {pillar.icon}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-500 ">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UrbanGamAbout;
