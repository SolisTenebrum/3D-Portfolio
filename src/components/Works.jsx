import { Tilt } from "@jdion/tilt-react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, openProject } from "../assets";
import { SectionWrapper } from "../hoc";
import isMobileDevice from "../utils/isMobileDevice";
import { textSlideUp, cardShowUp } from "../utils/motion";
import { useTranslation } from "react-i18next";

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
      initial="hidden"
      whileInView="show"
      variants={cardShowUp(0.5, 0.3, index * 0.3)}
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
  const { t } = useTranslation();

  const projects = [
    {
      name: t("work.workCards.workCardOne"),
      description: t("work.workCards.workCardOneDescription"),
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "react three fiber",
          color: "green-text-gradient",
        },
        {
          name: "emailjs",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
        {
          name: "vite",
          color: "yellow-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink",
        },
      ],
      image: t("images.portfolio"),
      project_link: "",
      source_code_link: "https://github.com/SolisTenebrum/3D-Portfolio",
    },
    {
      name: t("work.workCards.workCardTwo"),
      description: t("work.workCards.workCardTwoDescription"),
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css-modules",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink",
        },
      ],
      image: t("images.vrnas"),
      project_link: "https://solistenebrum-vrnas.vercel.app/",
      source_code_link: "https://github.com/SolisTenebrum/VRNas",
    },
    {
      name: t("work.workCards.workCardInProgress"),
      description: "Lorem impsum dolor sit amet, consectetur adipiscing.",
      tags: [
        {
          name: "Lorem",
          color: "blue-text-gradient",
        },
        {
          name: "Ipsum",
          color: "green-text-gradient",
        },
        {
          name: "Dolor",
          color: "pink-text-gradient",
        },
      ],
      image: t("images.workInProgress"),
      project_link: "",
      source_code_link: "",
    },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={textSlideUp(100, 0.4, 0)}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className={styles.sectionSubText}>{t("work.workTitle")}</p>
        <h2 className={styles.sectionHeadText}>{t("work.workSubtitle")}</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={textSlideUp(100, 0.4, 0.3)}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("work.workDescription")}
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
