import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="Ernst & Young Entrepreneur Of The Year" />
      <FunFactCard icon={<SiAntdesign />} des="World Economic Forum's Crystal Award" />
      <FunFactCard icon={<BiCodeAlt />} des="Financial Times ArcelorMittal Boldness in Business Awards" />
    </div>
  );
};

export default FunFact;
