import React from "react";
import StandardLayout from "./StandardLayout";
import Skill from "./Skill";
import logo_archicad from "@/public/images/icons/archicad_logo.png";

type Props = {};

function Skills({}: Props) {
  return (
    <StandardLayout
      title="Skills"
      className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over a skill for currency profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {Array(16)
          .fill(0)
          .map((_, i) => (
            <Skill
              key={i}
              logo={logo_archicad}
              direction={i >= 8 ? "left" : "right"}
            />
          ))}
      </div>
    </StandardLayout>
  );
}

export default Skills;
