import React from "react";
import aboutPattren from "assets/images/about-patren.svg";
import AboutCard from "components/AboutCard";
import Title from "components/Title";
import Subtitle from "components/Subtitle";

function About() {
  return (
    <div className="py-[60px] md:py-[82px] relative">
      <img
        src={aboutPattren}
        className="absolute right-0 top-0 w-full  object-cover z-[-2]"
        alt=""
      />
      <div className="container">
        <header className="max-w-[645px] w-full text-center mx-auto mb-[50px] sm:mb-[82px]">
          <Title className="text-white text-center tracking-[-2px] mb-[5px]">
            About The Journey
          </Title>

          <Subtitle className="text-center text-white opacity-[.5]">
            BiLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </Subtitle>
        </header>

        <h1 className="text-white text-center font-bold text-[28px] md:text-[50px] mb-8 sm:mb-14 ">
          How its Work
        </h1>

        <main className="grid grid-cols-1  lg:grid-cols-[repeat(3,_250px)] justify-between gap-[2rem] max-w-[1050px] mx-auto">
          <AboutCard
            title="Share your journey"
            desc="Lorem Ipsum is simply dummy text of the printing and typese "
            index="1"
          />
          <AboutCard
            title="Create image/video"
            desc="Lorem Ipsum is simply dummy text of the printing and typese "
            index="2"
          />
          <AboutCard
            title="Mint your NFT"
            desc="Lorem Ipsum is simply dummy text of the printing and typese "
            index="3"
          />
        </main>
      </div>
    </div>
  );
}

export default About;
