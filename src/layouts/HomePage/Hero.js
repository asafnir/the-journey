import React from "react";
import { Link } from "react-router-dom";
import img from "assets/images/hero-bg.png";
import Button from "components/UI/Button";

function Hero() {
  return (
    <div className="relative flex justify-center items-center h-[650px]">
      <div style={{backgroundImage: `url(${img})`}} className="w-full h-full bg-cover bg-center absolute opacity-[0.2]"/>
      <div className="flex flex-col justify-center items-center mt-24 z-10">
        <div className="max-w-[809.02px] w-full text-center">
          <p className="text-white text-center mb-6 text-6xl font-serif">
            Write and visualize your psychedelic journeys
          </p>

          <p className="text-center mb-10 md:mb-16 text-3xl">
            A sanctuary for sharing and exploring the transformative world of psychedelic experiences
          </p>
          <Link to="/create">
            <Button title="Get Started" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
