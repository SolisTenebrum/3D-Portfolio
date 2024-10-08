import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation()

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.email === "" || form.name === "" || form.message === "") {
      setLoading(false);
      alert("Please fill all the fields");
    } else {
      emailjs
        .send(
          "service_pzyy19k",
          "template_qkjxknl",
          {
            from_name: form.name,
            to_name: "SolisTenebrum",
            from_email: form.email,
            to_email: "solistenebrum@icloud.com",
            message: form.message,
          },
          "-NvWtpiiQ1HEQFsNc"
        )
        .then(() => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm(
            {
              name: "",
              email: "",
              message: "",
            },
            (error) => {
              setLoading(false);
              console.log(error);
              alert("Something went wrong");
            }
          );
        });
    }
  };

  return (
    <div className="xl:mt12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.1 }}
        className="flex-[0.75] bg-tertiary p-8 rounded-2xl select-none"
      >
        <p className={`${styles.contactSubText}`}>{t("contacts.contactsTitle")}</p>
        <h3 className={`${styles.contactHeadText}`}>{t("contacts.contactsSubtitle")}</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("contacts.labelInputName")}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contacts.inputPlaceholderName")}
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("contacts.labelInputEmail")}</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("contacts.inputPlaceholderEmail")}
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("contacts.labelInputMessage")}</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("contacts.inputPlaceholderMessage")}
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none"
            />
          </label>
          <button
            type="submit"
            className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "linear" }}
        viewport={{ once: true, amount: 0.3 }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
