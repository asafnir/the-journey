import React from "react";
import TeamCard from "components/TeamCard";
import teamMemberImg from "assets/images/teamMemberImg.png";
import Title from "components/Title";

function Team() {
  return (
    <div>
      <Title className="text-white text-center mb-[50px]">THE TEAM</Title>

      <main className="grid grid-cols-1 sm:grid-cols-3 gap-[27px] max-w-[1000px] mx-auto w-full">
        <TeamCard img={teamMemberImg} title="Niros" subtitle="Creative Mind" />
        <TeamCard img={teamMemberImg} title="Niros" subtitle="Creative Mind" />
        <TeamCard img={teamMemberImg} title="Niros" subtitle="Creative Mind" />
      </main>
    </div>
  );
}

export default Team;
