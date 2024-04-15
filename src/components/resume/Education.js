import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Project Manager"
          subTitle="Unilever Corporation"
          des="Oversee planning, execution, and closure of projects, ensuring they meet goals and deadlines.Lead teams, manage resources, and communicate with stakeholders.Identify and balance scope, time, and budget to achieve project success."
        />
        <ResumeCard
          badge="2023 - present"
          title="Human Resource Manager"
          subTitle="CP Corporation"
          des="Manage an organization's workforce.Oversee recruitment, performance management, and employee relations.Developing HR policies, ensuring compliance with labor laws, and facilitating training and development."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="Sep 2023 - Sep 2025"
          title="Swinburne University of Techonology"
          subTitle="HCM city"
          des="Bachelor of Business Administration | "
        />
        <ResumeCard
          badge="Jan 2024 - Jan 2026"
          title="Western Sydney University"
          subTitle="HCM city"
          des="Bachelor of  Computer Science | "
        />
        <ResumeCard
          badge="Sep 2027 - Sep 2028"
          title="University of Toronto"
          des="Master of Business Analytics | "
         />
        <ResumeCard
          badge="Jan 2029 - Jan 2030"
          title="University of Mannheim"
          des="PhD of Business Analytics | " 
        />
      </div>
    </div>
  );
};

export default Education;
