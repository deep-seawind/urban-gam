import React, { useState } from "react";

import UrbanGamHero from "./UrbanGamHero";
import UrbanGamAbout from "./UrbanGamAbout";
import UrbanGamProperties from "./UrbanGamProperties";
import UrbanGamWhy from "./UrbanGamWhy";
import UrbanGamAmenities from "./UrbanGamAmenities";
import UrbanGamExperiences from "./UrbanGamExperiences";
import UrbanGamCTA from "./UrbanGamCTA";

const URBANGaamLanding = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFB] text-gray-900">
      <UrbanGamHero />
      <UrbanGamAbout />
      <UrbanGamWhy />
      <UrbanGamProperties />
      <UrbanGamAmenities />
      <UrbanGamExperiences />
      <UrbanGamCTA />
    </div>
  );
};

export default URBANGaamLanding;
