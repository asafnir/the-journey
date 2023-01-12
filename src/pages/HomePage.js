import React from "react";
import Navbar from "layouts/Navbar";
import Hero from "layouts/HomePage/Hero";
import About from "layouts/HomePage/About";
import GetStarted from "layouts/HomePage/GetStarted";
import Guides from "layouts/HomePage/Guides";
import MainLayout from "layouts/MainLayout"
import Footer from "layouts/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <GetStarted />
      <Guides />
      <Footer/>
    </div>
  );
}

export default HomePage;
