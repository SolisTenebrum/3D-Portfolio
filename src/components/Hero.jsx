import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 select-none`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="w-5 h-5 rounded-full bg-[#568cff]"
          />
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "20rem" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="w-1 sm:h-80 h-40 blue-gradient"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="z-10"
        >
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#568cff]">Pavel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Frontend Developer
          </p>
        </motion.div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-scrollButton flex items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-scrollButton mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
