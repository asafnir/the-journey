import React from "react";
import Navbar from "layouts/Navbar";
import Hero from "layouts/HomePage/Hero";
import About from "layouts/HomePage/About";
import GetStarted from "layouts/HomePage/GetStarted";
import Guides from "layouts/HomePage/Guides";
import FormAndTeam from "layouts/HomePage/FormAndTeam";
import Faq from "layouts/HomePage/Faq";
import Footer from "layouts/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <GetStarted />
      <Guides />
      <FormAndTeam />
      <Faq />
      <Footer />
    </div>
  );
}

export default HomePage;
