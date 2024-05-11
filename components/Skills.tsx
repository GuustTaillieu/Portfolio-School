import React from "react";
import StandardLayout from "./StandardLayout";
import Skill from "./Skill";
import logo_archicad from "@/public/images/icons/archicad_logo.png";
import { Skill as SkillType } from "@/typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <StandardLayout
      title="Skills"
      className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-24 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over a skill for currency profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills?.map((skill, i) => (
          <Skill
            key={skill._id}
            logo={skill.skillImage}
            skillPercentage={skill.progress}
            direction={i < Math.round(skills.length / 2) ? "left" : "right"}
          />
        ))}
      </div>
    </StandardLayout>
  );
}

export default Skills;
