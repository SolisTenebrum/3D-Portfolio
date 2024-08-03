import { Tilt } from "@jdion/tilt-react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }, service) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full select-none"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.4, 0.75)}
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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ipsum
        diam. Praesent molestie congue justo, non vulputate mi. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Vestibulum pharetra ornare quam vitae tincidunt. Suspendisse tempor
        ullamcorper leo, ut mollis quam consequat ac. Nunc commodo ut eros at
        egestas. Pellentesque facilisis felis eu tortor ultrices aliquet. Donec
        et auctor urna. Vivamus placerat ultrices nunc ut ultricies. Ut
        imperdiet, erat non viverra rutrum, nibh quam finibus erat, ut efficitur
        massa ex quis magna.
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
