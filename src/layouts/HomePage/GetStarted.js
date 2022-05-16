import Button from "components/Button";
import React from "react";
import pattren from "assets/images/pattren.svg";
import Title from "components/Title";
import Subtitle from "components/Subtitle";

function GetStarted() {
  return (
    <div className="bg-white relative z-[1]">
      <img
        src={pattren}
        className="absolute inset-0 h-full w-full object-cover z-[-1]"
        alt=""
      />
      <div className="container h-screen flex items-center justify-center">
        <div className="max-w-[846px] mx-auto text-center">
          <Title className="text-black text-center mb-4">Ayahuasca</Title>

          <Subtitle className="black opacity-[.6] text-black text-center mb-[34px]">
            BiLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </Subtitle>

          <Button
            title="Get Started"
            radius="rounded-[6px]"
            padding="py-[14px] px-[22px] md:py-[20px] md:px-[40px]"
          />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
