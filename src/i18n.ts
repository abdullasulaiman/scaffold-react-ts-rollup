import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'fr'];

i18n
    // load translation using xhr -> see /public/locales. We will add locales in the next step
    .use(Backend)
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next.

    .init({
        // if user computer language is not on the list of available languages,
        // than we will be using the fallback language specified earlier
        debug: true,
        fallbackLng,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false, // Need to validate this
        },
        saveMissing: true,
        whitelist: availableLanguages,
    });

export default i18n;
