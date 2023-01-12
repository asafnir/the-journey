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
        <header className="max-w-[945px] w-full text-center mx-auto mb-[100px] sm:mb-[100px]">
          <h1 className="text-white text-[28px] md:text-[50px] text-center mb-8 font-serif">
            About The Journeys
          </h1>

          <Subtitle className="text-center text-white">
            Journeys allows users to generate images based on their experiences using psychedelics.
            The generated images are said to reflect the user's experience and can be used as a visual reminder of their journey.
            The app utilizes cutting-edge machine learning techniques to generate the images and provides a creative outlet for users to
            express their psychedelic experiences. It aims to help users process, understand and remember their experience.
            The application is also a source of inspiration for those who are interested in trying psychedelics.
          </Subtitle>
        </header>
      </div>
      <div className="mb-28">
        <h1 className="text-white text-center font-bold text-[28px] md:text-[50px] mb-8 sm:mb-24 font-serif">
          How its Work
        </h1>
        <main className="grid grid-cols-1  lg:grid-cols-[repeat(3,_250px)] justify-between gap-[2rem] max-w-[1050px] mx-auto">
          <AboutCard
            title="Share your journey"
            desc="Write you journey story"
            index="1"
          />
          <AboutCard
            title="Create image/video"
            desc="You can generate an image by your own or select one of our artist"
            index="2"
          />
          <AboutCard
            title="Shared your journey"
            desc="You can choose if you want to shared your story or keep it private, you can also create NFT from your image"
            index="3"
          />
        </main>
      </div>
    </div>
  );
}

export default About;
