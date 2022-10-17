import React from "react";
import Input from "./Input";

function Form() {
  return (
    <form className="py-[50px] md:py-[60px] px-[2rem] md:px-[3rem] max-w-[800px] w-full bg-black rounded-[20px] mx-auto space-y-[20px]">
      <Input label="Select the medicine" htmlFor={"select"} />
      <Input label="Text box" htmlFor={"text"} />
      <Input label="Mint button" htmlFor={"mint"} />
    </form>
  );
}

export default Form;
