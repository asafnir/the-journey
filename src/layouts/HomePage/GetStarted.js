import Button from "components/UI/Button";
import React from "react";
import pattren from "assets/images/pattren.svg";

function GetStarted() {
  return (
    <div className="bg-white relative z-[1]">
      <img
        src={pattren}
        className="absolute inset-0 h-full w-full object-cover z-[-1]"
        alt=""
      />
      <div className="container flex items-center justify-center py-24">
        <div className="max-w-[846px] mx-auto text-center">
          <p className="text-black text-center mb-6 font-serif text-[28px] md:text-[50px]">Supporting the Caretakers of those medicine</p>
          <p className="black text-black text-center mb-[34px] text-[24px] ">
           Empower Psychedelic Communities with Every Share When you share your journey on our platform, you're not just expressing your experience; you're making a meaningful impact. We're committed to donating funds to organizations and tribes dedicated to the responsible use of psychedelics, supporting their vital work. Your shares don't just connect you with a like-minded community; they also contribute to the growth and development of groups advancing psychedelic research and therapy. Plus, your donations can directly benefit Indigenous communities, preserving their rich traditions and cultural heritage, a core value of our platform. Your contributions shape a more informed, compassionate, and inclusive psychedelic community. Join us in fostering a positive change with every journey you share.
          </p>

          <Button
            title="Get Started"
            radius="rounded-[6px]"
            padding="py-[8px] px-[10px] md:py-[10px] md:px-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
