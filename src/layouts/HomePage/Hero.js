import React from "react";
import img from "assets/images/hero-bg.png";
import Button from "components/Button";
import Title from "components/Title";
import Subtitle from "components/Subtitle";

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
          <Title className="text-white text-center leading-[1.4] lg:leading-[60px] tracking-[-2px] mb-6">
            Share the knowledge of your journeys.
          </Title>

          <Subtitle className="text-center mb-10 md:mb-16">
            For the 7 generation to come and for your big experience to share
          </Subtitle>

          <Button title="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
