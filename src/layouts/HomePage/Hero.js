import React from "react";
import { Link } from "react-router-dom";
import img from "assets/images/hero-bg.png";
import Button from "components/Button";

function Hero() {
  return (
    <div className="relative flex justify-center items-center h-[650px]">
      <div style={{backgroundImage: `url(${img})`}} className="w-full h-full bg-cover bg-center absolute opacity-[0.2]"/>
      <div className="flex flex-col justify-center items-center mt-24">
        <div className="max-w-[809.02px] w-full text-center">
          <p className="text-white text-center mb-6 text-6xl font-serif">
            Share the knowledge <br/>of your journeys.
          </p>

          <p className="text-center mb-10 md:mb-16 text-3xl">
            For the 7 generation to come and for<br/> your big experience to share
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
