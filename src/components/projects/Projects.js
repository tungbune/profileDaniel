import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="H2O statsocial innovation"
            category="Website and app"
            image={workImgThree}
          />
          <ProjectsCard
            title="SHAPIN"
            category="Design web"
            image={workImgOne}
          />
          <ProjectsCard
            title="Brand You and Networking "
            image={workImgTwo}
          />
          <ProjectsCard
            title="Portfolio Websites"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Utilizing SDGs in sustainability assessments of CSR implementations in entrepreneurship"
             category="Academic Research aper"
            image={workImgFour}
          />
          <ProjectsCard
            title="Aligning student activities with Sustainable Development Goals (SDGs) and Artificial Intelligence (AI) in Vietnam Questionnaire"
            category="Scholarly Article"
            image={workImgSix}
          />
          <ProjectsCard
            title="AIESEC in Vietnam"
            category="AIESEC in Vietnam"
            image={workImgEight}
          />
          <ProjectsCard
            title="Social Media Ambassador"
            category="Love all Animals & Nature"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
