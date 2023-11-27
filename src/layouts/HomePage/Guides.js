import React from "react";
import img1 from "assets/images/guide-img-1.svg";
import img2 from "assets/images/guide-img-2.svg";
import img3 from "assets/images/guide-img-3.svg";
import img4 from "assets/images/guide-img-4.svg";
import img5 from "assets/images/guide-img-5.svg";
import img6 from "assets/images/guide-img-6.svg";
import img7 from "assets/images/guide-img-7.svg";
import img8 from "assets/images/guide-img-8.svg";
import img9 from "assets/images/guide-img-9.svg";
import img10 from "assets/images/guide-img-10.svg";
import img11 from "assets/images/guide-img-11.svg";
import img12 from "assets/images/guide-img-12.svg";
import img13 from "assets/images/guide-img-13.svg";
import img14 from "assets/images/guide-img-14.svg";
import img15 from "assets/images/guide-img-15.svg";
import img16 from "assets/images/guide-img-16.svg";
import img17 from "assets/images/guide-img-17.svg";
import img18 from "assets/images/guide-img-18.svg";
import img19 from "assets/images/guide-img-19.svg";
import img20 from "assets/images/guide-img-20.svg";
import p1 from "assets/images/guide-pattren.svg";

const GuideCard = ({ title, img, dec, link }) => {
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
        <p className="mb-4">{dec}</p>
        <a href={link} className="text-orange-500">More information</a>
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
function Guides() {
  return (
    <div className="py-[60px] sm:py-[80px] lg:py-[100px] relative z-10">
      <img
        src={p1}
        className="absolute w-full h-full object-cover top-0 left-0 z-[-3]"
        alt=""
      />

      <div className="container">
        <p className="text-white text-center mb-[30px] md:mb-[76px] font-serif">
          THE TEACHERS 
        </p>

        <main className="grid sm:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(4,_1fr)] gap-4 xl:gap-4 max-w-[1000px] w-full mx-auto">
          <GuideCard img={img1} title="2C-B" dec="2C-B is a psychedelic drug of the 2C family"/>
          <GuideCard img={img2} title="4-Aco-DMT" dec="Synthetic mushrooms, It is structurally related to psilocybin and psilocin, the active ingredient in psilocybin mushrooms"/>
          <GuideCard img={img3} title="5-MEO-DMT" link="https://psychonautwiki.org/wiki/5-MeO-DMT" dec="Distributed in a wide variety of plant species as well as in the venom of a single toad species (Bufo Alvaris)"/>
          <GuideCard img={img4} title="AMANITA MUSCARIA" />

          <GuideCard img={img5} title="AYAHUASCA" />
          <GuideCard img={img6} title="CACAO" />
          <GuideCard img={img7} title="CANNABIS" />
          <GuideCard img={img8} title="DATURA" />

          <GuideCard img={img9} title="DMT" />
          <GuideCard img={img10} title="IBOGAINE" />
          <GuideCard img={img11} title="KAMBO" />
          <GuideCard img={img12} title="KETAMINE" />

          <GuideCard img={img13} title="KRATOM" />
          <GuideCard img={img14} title="LSD" />
          <GuideCard img={img15} title="MDMA" />
          <GuideCard img={img16} title="MESCALINE" />

          <GuideCard img={img17} title="PEYOTE" />
          <GuideCard img={img18} title="SALVIA" />
          <GuideCard img={img19} title="SAN PEDRO" />
          <GuideCard img={img20} title="PSILOCYBIN MUSHROOMS" />
        </main>
      </div>
    </div>
  );
}

export default Guides;
