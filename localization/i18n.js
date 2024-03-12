import i18n from 'i18next';
import { en, pl } from './translations';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: en,
  },
  pl: {
    translation: pl
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});


export default i18n;