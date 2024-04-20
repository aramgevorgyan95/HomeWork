import  i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import LngDedector from 'i18next-browser-languagedetector';
import Language from "../translate";

i18n.use(LngDedector).use(initReactI18next).init({
    fallbackLng: 'ru',
    resources: {
        ru: Language[0].ru,
        en: Language[0].en
    }
})

export default i18n;