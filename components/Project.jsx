import React from "react";

import Image from "next/image";
import Link from "next/link";
import avatar from "../assets/avatar.webp";
import bballfit from "../assets/bballfit.png";
import familygram from "../assets/familygram.png";
import betterme from "../assets/bettertodo.png";
import breakingbad from "../assets/breakingbad.jpg";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Basketball Fitness App"
            backgroundImg={bballfit}
            projectUrl="https://basketballfit-15b82.web.app/"
            tech="React JS"
            codeUrl="https://github.com/Eshwar1212-maker/Basketba-lFit"
          />
          <ProjectItem
            className="p-10"
            title="Productivity App"
            backgroundImg={betterme}
            projectUrl="https://bettertodoapp.web.app/"
            tech="React JS"
            codeUrl="https://github.com/Eshwar1212-maker/UpdatedTodoApp"
          />
          <ProjectItem
            title="Social Media App"
            backgroundImg={familygram}
            projectUrl="https://socialmedia-fa4f5.web.app/"
            tech="React JS"
            codeUrl="https://github.com/Eshwar1212-maker/FamilyGram"
          />
          <ProjectItem
            title="Breaking Bad Search"
            backgroundImg={breakingbad}
            projectUrl="https://peppy-youtiao-774dc2.netlify.app/"
            tech="React JS"
            codeUrl="https://github.com/Eshwar1212-maker/BreakingBad-API"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
