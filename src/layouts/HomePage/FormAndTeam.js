import Form from "components/Form";
import Team from "./Team";
import bgPattren from "assets/images/teampattren.svg";

function FormAndTeam() {
  return (
    <div className="pt-0 py-[60px] sm:py-[80px] lg:py-[100px] relative">
      <img
        src={bgPattren}
        className="w-full h-full object-cover absolute top-0 left-0 z-[-2]"
        alt=""
      />
      <div className="container">
        <div className="mb-[60px] lg:mb-[100px]">
          <Form />
        </div>

        <div>
          <Team />
        </div>
      </div>
    </div>
  );
}

export default FormAndTeam;
