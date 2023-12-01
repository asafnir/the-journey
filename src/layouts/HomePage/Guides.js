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
        <p className="text-white text-center mb-[30px] md:mb-[76px] font-serif text-[24px] sm:text-[32px]">
          THE TEACHERS 
        </p>

        <main className="grid sm:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(4,_1fr)] gap-4 xl:gap-4 max-w-[1000px] w-full mx-auto">
          <GuideCard img={img1} title="2C-B" dec="A synthetic psychedelic known for its mild effects, often used recreationally."/>
          <GuideCard img={img2} title="4-Aco-DMT" dec="A synthetic compound with psychedelic properties, similar to psilocybin mushrooms."/>
          <GuideCard img={img3} title="5-MEO-DMT" link="https://psychonautwiki.org/wiki/5-MeO-DMT" dec="A powerful naturally occurring psychedelic compound, known for its intense and short-lasting effects."/>
          <GuideCard img={img4} title="AMANITA MUSCARIA" dec="A toxic mushroom with psychoactive properties, traditionally used in shamanic rituals."/>

          <GuideCard img={img5} title="AYAHUASCA" dec="A sacred plant brew from the Amazon, used in shamanic ceremonies for its intense psychedelic effects."/>
          <GuideCard img={img6} title="CACAO" dec="A plant used in ceremonial contexts, known for its mild psychoactive properties and as a heart opener."/>
          <GuideCard img={img7} title="CANNABIS" dec="A widely used psychoactive plant known for its relaxing and euphoric effects."/>
          <GuideCard img={img8} title="DATURA" dec="A highly toxic plant with strong hallucinogenic properties"/>

          <GuideCard img={img9} title="DMT" dec="A powerful and short-acting psychedelic compound found in various plants and used in ayahuasca brews."/>
          <GuideCard img={img10} title="IBOGAINE" dec="A psychoactive substance derived from the African iboga plant, used in addiction treatment."/>
          <GuideCard img={img11} title="KAMBO" dec="A secretion from the skin of a jungle frog used in shamanic rituals for its purgative and cleansing effects."/>
          <GuideCard img={img12} title="KETAMINE" dec="A dissociative anesthetic with psychedelic properties, used for therapeutic purposes and recreationally."/>

          <GuideCard img={img13} title="KRATOM" dec="A plant native to Southeast Asia, known for its stimulating and pain-relieving effects."/>
          <GuideCard img={img14} title="LSD" dec="A synthetic hallucinogenic compound, famous for its long-lasting and mind-altering effects."/>
          <GuideCard img={img15} title="MDMA" dec="A synthetic empathogen often referred to as ecstasy, used recreationally and in therapy for its empathetic qualities."/>
          <GuideCard img={img16} title="MESCALINE" dec="A natural psychedelic found in cacti like peyote and San Pedro, known for its visionary experiences."/>

          <GuideCard img={img17} title="PEYOTE" dec="A small cactus containing mescaline, used by indigenous cultures in religious rituals."/>
          <GuideCard img={img18} title="SALVIA" dec="A potent and short-acting hallucinogenic plant used traditionally for its intense effects."/>
          <GuideCard img={img19} title="SAN PEDRO" dec="A cactus containing mescaline, used in South American shamanic ceremonies."/>
          <GuideCard img={img20} title="PSILOCYBIN MUSHROOMS" dec="Mushrooms containing psilocybin, known for their profound and introspective psychedelic experiences."/>
        </main>
      </div>
    </div>
  );
}

export default Guides;
