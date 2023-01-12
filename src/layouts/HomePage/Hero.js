import React from "react";
import img from "assets/images/hero-bg.png";
import Button from "components/Button";

function Hero() {
  return (
    <div className="relative">
      <img
        src={img}
        className="absolute inset-0 h-full z-[-4] opacity-[.2] select-none object-cover"
        alt=""
      />
      <div className="h-screen container flex flex-col items-center justify-center">
        <div className="max-w-[809.02px] w-full text-center">
          <p className="text-white text-center mb-6 text-7xl font-serif">
            Share the knowledge <br/>of your journeys.
          </p>

          <p className="text-center mb-10 md:mb-16 text-3xl">
            For the 7 generation to come and for<br/> your big experience to share
          </p>

          <Button title="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
