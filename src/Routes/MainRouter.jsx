import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Pages/HomePage/Home";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";

const MainRouter = () => {
  const location = useLocation();
  const hideHeader = location.pathname === "/";
  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
