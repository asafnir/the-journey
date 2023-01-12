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
          <Title className="text-black text-center mb-6 font-serif">Share the resource with the one that carry the medicine</Title>

          <Subtitle className="black text-black text-center mb-[34px]">
            Every time your share your journey we donating money to organizations and tribes that are working with psychedelics, this can be a great way to support the growth and development of these groups and their efforts to promote the safe and responsible
            use of these substances.
            Our platform is committed to providing a safe space for people to learn about psychedelics, connect with others in the community, and access resources and support.
            By supporting organizations and tribes that are doing important work in the field of psychedelic research and therapy,
            Additionally, your donations can aid Indigenous communities and tribes specifically to uplift these communities and aid
            in preserving traditional practices and cultural heritage, which we consider as an important aspect in our platform.
            Your contributions can help to create a more informed, compassionate, and inclusive psychedelic community.
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
