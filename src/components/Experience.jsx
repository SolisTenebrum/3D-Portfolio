import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import React from "react";
import { textSlideUp } from "../utils/motion";
import { questionMark } from "../assets";
import { useTranslation } from "react-i18next";

const ExperienceCard = ({ experience }) => {
  const currentDate = new Date();

  const today = currentDate.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const todayRu = currentDate.toLocaleString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#101c30", color: "#fff" }}
      contentArrowStyle={{ borderRight: "10px solid #101c30" }}
      date={today}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[75%] h-[75%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => {
          return (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider "
            >
              {point}
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("experience.specialization"),
      company_name: "Mauris eu interdum libero",
      icon: questionMark,
      iconBg: "#101c30",
      date: "",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus libero sit amet nisl accumsan sodales. Phasellus sed nunc in turpis interdum tincidunt.",
        "Nulla varius leo et ipsum fringilla, non sodales tellus lacinia.",
        "Praesent pulvinar at tellus sed ultricies.",
        "Donec mollis sit amet lectus vitae tristique. Quisque lobortis ipsum in justo scelerisque, nec accumsan lacus aliquet. Mauris vitae odio a enim tincidunt hendrerit nec quis felis.",
      ],
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
        <p className={styles.sectionSubText}>{t("experience.experienceTitle")}</p>
        <h2 className={styles.sectionHeadText}>{t('experience.experienceSubtitle')}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
