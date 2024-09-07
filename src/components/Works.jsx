import { Tilt } from "@jdion/tilt-react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, openProject } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import isMobileDevice from "../utils/isMobileDevice";

import React from "react";

const ProjectCard = ({
  name,
  index,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.3 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Tilt
        options={{
          max: isMobileDevice() === "mobile" ? 0 : 45,
          scale: 1,
          speed: 450,
          transition: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full select-none"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover ${
              name === "Work in progress" ? "" : "object-top"
            } rounded-2xl`}
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {project_link && (
              <div
                onClick={() => {
                  window.open(project_link, "blank");
                }}
                className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2"
              >
                <img
                  src={openProject}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {source_code_link && (
              <div
                onClick={() => {
                  window.open(source_code_link, "blank");
                }}
                className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color} `}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described,
          with links to code repositories and live demos included. These
          projects highlight my ability to tackle complex problems, work with
          various technologies, and deliver functional solutions.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
