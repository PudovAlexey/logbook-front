import { PropsWithChildren } from 'react';
import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './languages/en';
import { ru } from './languages/ru';

 function LanguageProvider({ children }: PropsWithChildren) {
    i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      ru,
    },
    lng: 'ru', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

    return children;
}

export {
    LanguageProvider,
};
