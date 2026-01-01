import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Pages/HomePage/Home";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import HomesLayouts from "../Components/Pages/HomesLayouts/HomesLayouts";
import ScrollToTop from "../Common/ScrollToTop/ScrollToTop";
import Gallery from "../Components/Pages/Gallery/Gallery";
import Blog from "../Components/Pages/Blog/Blog";
import BlogDetails from "../Components/Pages/Blog/BlogDetails";
import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import ContactActionButtons from "../Common/ContactActionButtons/ContactActionButtons";
import LivingExperience from "../Components/Pages/LivingExperience/LivingExperience";
import ManagedLiving from "../Components/Pages/ManagedLiving/ManagedLiving";
import EventsCelebrations from "../Components/Pages/EventsCelebrations/EventsCelebrations";
import Wellness from "../Components/Pages/Wellness/Wellness";
import Location from "../Components/Pages/Location/Location";
import Investment from "../Components/Pages/Investment/Investment";
import LayoutDetails from "../Components/Pages/HomesLayouts/LayoutDetails";

const MainRouter = () => {
  const location = useLocation();
  const hideHeader = location.pathname === "/";
  return (
    <>
      {!hideHeader && <Header />}

      <ScrollToTop />
       <ContactActionButtons />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/homes-layouts" element={<HomesLayouts />} />
        <Route path="/layouts-details" element={<LayoutDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/living-experience" element={<LivingExperience />} />
        <Route path="/managed-living" element={<ManagedLiving />} />
        <Route path="/events" element={<EventsCelebrations />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/location" element={<Location />} />
        <Route path="/investment" element={<Investment />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
