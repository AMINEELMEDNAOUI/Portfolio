import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTrans from "./locales/en.json";
import frTrans from "./locales/fr.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTrans },
            fr: { translation: frTrans }
        },
        fallbackLng: "en",
        detection: {
            order: ["localStorage", "cookie", "htmlTag"],
            caches: ["localStorage"]
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;