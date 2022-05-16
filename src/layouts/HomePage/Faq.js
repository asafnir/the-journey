import Accordion from "components/Accordion";
import Title from "components/Title";
import React from "react";
import faqpattren from "assets/images/faqpattren.svg";

function Faq() {
  return (
    <div className="bg-[#0F172A] sm:bg-transparent">
      <div className="container sm:bg-[#0F172A] py-[50px] sm:py-[86px] sm:rounded-tl-[54px] sm:rounded-tr-[54px] sm:px-[2rem] relative z-[1]">
        <img
          src={faqpattren}
          className="w-full object-cover absolute top-0 left-0 z-[-2]"
          alt=""
        />
        <Title className="text-white text-center mb-[50px]  sm:leading-normal">
          Frequently Asked <br /> Questions
        </Title>

        <main className="space-y-6">
          <Accordion title="How Can I Buy a The Journey NFT?">
            <p className="text-[14px] sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eveniet deserunt nulla, nostrum aliquid, sunt
              deleniti suscipit qui delectus dignissimos doloribus voluptatum
              impedit officiis illum distinctio recusandae sequi, a quaerat?
            </p>
          </Accordion>
          <Accordion title="How Can I Buy a The Journey NFT?">
            <p className="text-[14px] sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eveniet deserunt nulla, nostrum aliquid, sunt
              deleniti suscipit qui delectus dignissimos doloribus voluptatum
              impedit officiis illum distinctio recusandae sequi, a quaerat?
            </p>
          </Accordion>
          <Accordion title="How Can I Buy a The Journey NFT?">
            <p className="text-[14px] sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eveniet deserunt nulla, nostrum aliquid, sunt
              deleniti suscipit qui delectus dignissimos doloribus voluptatum
              impedit officiis illum distinctio recusandae sequi, a quaerat?
            </p>
          </Accordion>
          <Accordion title="How Can I Buy a The Journey NFT?">
            <p className="text-[14px] sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eveniet deserunt nulla, nostrum aliquid, sunt
              deleniti suscipit qui delectus dignissimos doloribus voluptatum
              impedit officiis illum distinctio recusandae sequi, a quaerat?
            </p>
          </Accordion>
        </main>
      </div>
    </div>
  );
}

export default Faq;
