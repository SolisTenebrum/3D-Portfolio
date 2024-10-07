import { Tilt } from "@jdion/tilt-react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import isMobileDevice from "../utils/isMobileDevice";
import { textSlideUp, cardShowUp } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { web, mobile } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full select-none"
      options={{
        max: isMobileDevice() === "mobile" ? 0 : 45,
        scale: 1,
        speed: 450,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={cardShowUp(0.5, 0.3, index * 0.3)}
        viewport={{ once: true, amount: 0.4 }}
        className="w-full card-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-20 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[19px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('about.skillCardOne'),
      icon: web,
    },
    {
      title: t('about.skillCardTwo'),
      icon: mobile,
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
        <p className={styles.sectionSubText}>{t("about.aboutTitle")}</p>
        <h2 className={styles.sectionHeadText}>{t("about.aboutSubtitle")}</h2>
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="show"
        variants={textSlideUp(100, 0.4, 0.3)}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t("about.aboutDescription")}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
