import React from "react";
import aboutPattren from "assets/images/about-patren.svg";

const AboutCard = ({ title, desc, index }) => {
  return (
    <div className="text-center flex flex-col items-center mx-auto">
      <div className="w-[40px] h-[40px] sm:w-[90px] sm:h-[90px] rounded-full flex justify-center items-center text-[24px] sm:text-[32px] font-bold bg-[rgba(0,_0,_0,_0.37)] mb-[18px] sm:mb-[22px]">
        {index}
      </div>

      <h1 className="text-white text-center text-[24px] sm:text-[24px] font-bold mb-[12px] sm:mb-[20px] ">
        {title}
      </h1>

      <p className="font-dm-sans text-center text-[22px] font-normal text-white">
        {desc}
      </p>
    </div>
  );
};

function About() {
  return (
    <div className="py-[60px] md:py-[82px] relative">
      <img
        src={aboutPattren}
        className="absolute right-0 top-0 w-full  object-cover z-[-2]"
        alt=""
      />
      <div className="container mb-32">
        <header className="max-w-[945px] w-full text-center mx-auto mb-[100px] sm:mb-[100px]">
          <h1 className="text-white text-[28px] md:text-[50px] text-center mb-8 font-serif">
            About
          </h1>
          <h2 className={`font-dm-sans text-base md:text-[22px] font-normal leading-6 sm:leading-8 text-center text-white`}>
            Journeys offers a creative outlet for users to document and share their positive psychedelic experiences, fostering emotional release and community support. <br/>This platform facilitates connections with others who have similar journeys, enhancing mental health and possibly saving lives. Shared stories and creative expression lie at the core of our mission.
          </h2>
        </header>
      </div>
      <div className="mb-28">
        <h1 className="text-white text-center font-bold text-[28px] md:text-[50px] mb-8 sm:mb-24 font-serif">
          How It Works
        </h1>
        <main className="grid grid-cols-1  lg:grid-cols-[repeat(3,_250px)] justify-between gap-[2rem] max-w-[1050px] mx-auto">
          <AboutCard
            title="Share Your Journey"
            desc="Write your journey story, expressing your psychedelic experience in your own words."
            index="1"
          />
          <AboutCard
            title="Create Image"
            desc="You have the option to generate your own images or select one from our talented artists."
            index="2"
          />
          <AboutCard
            title="Share Your Journey"
            desc="Decide whether you want to share your story with others or keep it private."
            index="3"
          />
        </main>
      </div>
    </div>
  );
}

export default About;
