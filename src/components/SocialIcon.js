import React from "react";

function SocialIcon({ icon, link = "/", target = "_blank" }) {
  return (
    <a
      href={link}
      target={target}
      className="w-[37px] h-[37px] rounded-full bg-white flex justify-center items-center text-black"
    >
      {icon}
    </a>
  );
}

export default SocialIcon;
