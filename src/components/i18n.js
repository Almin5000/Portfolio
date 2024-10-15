import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      welcome: "Welcome to my portfolio",
      portfolioTitle: "Almins Portfolio",
      webDesign: "Web Design",
      webDesignDescription: "I have worked on creating clean, responsive websites that prioritize user experience (UX) and usability (UI). My designs mix quality with functionality, which ensures that the websites not only look great, but are also clear and easy to navigate.",
      development: "Development",
      developmentDescription: "I am very experienced in web development using technologies like React, React Native and Tailwind CSS. I focus on building scalable, high-performance applications that meet user needs. Whether it's front-end or back-end development, I make sure to code with a focus on speed, security and maintainability.",
      projects: "Projects",
      githubProjects: "GitHub Projects",
      githubDescriptionMain: "Click the link to see my projects on GitHub, where I have worked with different languages. I mainly focus on JavaScript and TypeScript along with Tailwind.",
      githubDescriptionDetail: "I have worked on several projects in the main course, which I have saved on USB.",
      contact: "Contact",
    }
  },
  da: {
    translation: {
      home: "Hjem",
      welcome: "Velkommen til min portfolio",
      portfolioTitle: "Almins Portfolio",
      webDesign: "Web Design",
      webDesignDescription: "Jeg har arbejdet med at skabe rene, responsive hjemmesider, der prioriterer brugeroplevelse (UX) og brugervenlighed (UI). Mine designs blander kvalitet med funktionalitet, hvilket sikrer, at hjemmesiderne ikke kun ser flotte ud, men også er tydelig og nemme at navigere på.",
      development: "Development",
      developmentDescription: "Jeg meget erfaren i webudvikling ved hjælp af teknologier som React, React Native og Tailwind CSS. Jeg fokuserer på at bygge skalerbare, højtydende applikationer, der opfylder brugernes behov. Uanset om det drejer sig om front-end eller back-end udvikling, sørger jeg for at kode med fokus på hastighed, sikkerhed og vedligeholdelighed.",
      projects: "Projekter",
      githubProjects: "Github projekter",
      githubDescriptionMain: "Klik på linket for at se mine projekter på GitHub, hvor jeg har arbejdet med forskellige sprog. Jeg fokuserer primært på JavaScript og TypeScript sammen med Tailwind.",
      githubDescriptionDetail: "Har arbejdet på flere projekter i hovedforløbet, som jeg har gemt på USB.",
      contact: "Kontakt",
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'da',
    fallbackLng: 'da',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
