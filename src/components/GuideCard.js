import React from "react";

function GuideCard({ title, img }) {
  // const [isOpen, setIsOpen] = useState(false);
  // const menuRef = useRef(null);

  // useEffect(() => {
  //   if (isOpen) {
  //     menuRef.current.style.height = menuRef.current.scrollHeight + "px";
  //   } else {
  //     menuRef.current.style.height = 0 + "px";
  //   }
  // }, [isOpen]);

  return (
    <div
      className="bg-black pt-[30px] pb-[30px] xl:pb-[50px] px-[20px] text-center rounded-[14px] group relative overflow-hidden"
      // onMouseEnter={() => setIsOpen(true)}
      // onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-black p-4 opacity-0 transition-all duration-[.4s] 
      ease-[ease] group-hover:opacity-[1] flex items-center justify-center flex-col"
      >
        <p className="">Lorem ipsum dolor sit amet consectetur,</p>
      </div>
      <img
        src={img}
        className="w-full aspect-video object-contain mb-[20px] xl:mb-[50px] select-none pointer-events-none"
        alt=""
      />
      <h1 className="text-white text-[18px] xl:text-[22px] font-bold text-center">
        {title}
      </h1>
    </div>
  );
}

export default GuideCard;
