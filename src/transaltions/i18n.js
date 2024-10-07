import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  workInProgressRU,
  workInProgressEN,
  portfolioImageRU,
  portfolioImageEN,
  vrnas
} from './../assets';

const resources = {
  en: {
    translation: {
      header: {
        siteName: "3D Portfolio",
        aboutButton: "About",
        workButton: "Work",
        contactButton: "Contact",
        languageButton: "Language",
      },
      hero: {
        greeting: "Hi, I'm",
        name: "Pavel",
        specialization: "Frontend developer",
      },
      about: {
        aboutTitle: "INTRODUCTION",
        aboutSubtitle: "Overview",
        aboutDescription: `Hi, my name is Pavel, 
        and I'm a front-end developer with experience 
        in JavaScript and some experience with TypeScript. 
        My main tool is React, and I'm constantly improving 
        my skills to build high-quality, modern web applications. 
        I'm a fast learner and committed to becoming a professional 
        in front-end development. My portfolio showcases projects 
        that reflect my abilities and approach to development. I’d 
        be excited to join your project and contribute to its success!`,
        skillCardOne: "Web Developer",
        skillCardTwo: "React Developer",
      },
      experience: {
        experienceTitle: "WHAT HAVE I DONE SO FAR",
        experienceSubtitle: "Work Experience",
        specialization: "React.js developer",
      },
      work: {
        workTitle: "MY WORK",
        workSubtitle: "Projects",
        workDescription: `The following projects showcase my skills 
        and experience through real-world examples of my work. Each
         project is briefly described, with links to code repositories 
         and live demos included. These projects highlight my ability to 
         tackle complex problems, work with various technologies, and deliver 
         functional solutions.`,
        workCards: {
          workCardOne: "3D Portfolio",
          workCardOneDescription: "Just a 3D portfolio.",
          workCardTwo: "VR Nas",
          workCardTwoDescription: "A platform providing VR services.",
          workCardInProgress: "Work in progress",
        },
      },
      contacts: {
        contactsTitle: "GET IN TOUCH",
        contactsSubtitle: "Contact",
        labelInputName: "Your name",
        inputPlaceholderName: "What's your name?",
        labelInputEmail: "Your email",
        inputPlaceholderEmail: "What's your email?",
        labelInputMessage: "Your message",
        inputPlaceholderMessage: "What do you want to say?",
      },
      images: {
        workInProgress: workInProgressEN,
        portfolio: portfolioImageEN,
        vrnas: vrnas,
      },
    },
  },
  ru: {
    translation: {
      header: {
        siteName: "3D Портфолио",
        aboutButton: "Обо мне",
        workButton: "Опыт",
        contactButton: "Связаться",
        languageButton: "Язык",
      },
      hero: {
        greeting: "Привет, я",
        name: "Павел",
        specialization: "Фронтенд разработчик",
      },
      about: {
        aboutTitle: "ИНТРО",
        aboutSubtitle: "Обзор",
        aboutDescription: `Привет, меня зовут Павел,
            и я фронтенд-разработчик с опытом работы
            в JavaScript и некоторым опытом работы с TypeScript.
            Мой основной инструмент — React, и я постоянно совершенствую
            свои навыки, чтобы создавать современные и качественные веб-приложения.
            Я быстро обучаюсь и нацелен на то, чтобы стать профессионалом
            в области фронтенд-разработки. В моем портфолио представлены проекты,
            которые демонстрируют мои навыки и подход к разработке. Я буду рад
            присоединиться к вашему проекту и внести вклад в его успех!`,
        skillCardOne: "Веб разработчик",
        skillCardTwo: "React разработчик",
      },
      experience: {
        experienceTitle: "ЧТО Я УСПЕЛ СДЕЛАТЬ",
        experienceSubtitle: "Опыт работы",
        specialization: "React.js разработчик",
      },
      work: {
        workTitle: "МОИ РАБОТЫ",
        workSubtitle: "Проекты",
        workDescription: `Следующие проекты демонстрируют мои навыки 
            и опыт через реальные примеры моей работы. Каждый проект
            кратко описан, с включенными ссылками на репозитории с кодом
            и демо. Эти проекты подчеркивают мою способность
            решать сложные задачи, работать с различными технологиями и предоставлять
            функциональные решения.`,
        workCards: {
          workCardOne: "3D Портфолио",
          workCardOneDescription: "Просто 3D портфолио.",
          workCardTwo: "VRNas",
          workCardTwoDescription: "Платформа, предоставляющая VR услуги.",
          workCardInProgress: "В разработке",
        },
      },
      contacts: {
        contactsTitle: "СВЯЖИТЕСЬ СО МНОЙ",
        contactsSubtitle: "Связаться",
        labelInputName: "Ваше имя",
        inputPlaceholderName: "Как вас зовут?",
        labelInputEmail: "Ваш email",
        inputPlaceholderEmail: "Какой у вас email?",
        labelInputMessage: "Ваше сообщение",
        inputPlaceholderMessage: "Что вы хотите сказать?",
      },
      images: {
        workInProgress: workInProgressRU,
        portfolio: portfolioImageRU,
        vrnas: vrnas,
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.startsWith("ru") ? "ru" : "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
