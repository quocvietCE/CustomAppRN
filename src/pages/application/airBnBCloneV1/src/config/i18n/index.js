import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getLocales} from 'react-native-localize';

import en from './en.json';
import vi from './vi.json';
import ar from './ar.json';

const STORAGE_KEY = '@APP:languageCode';

const resources = {
  en: {translation: en},
  vi: {translation: vi},
  ar: {translation: ar},
};

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async callback => {
    const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
    const lng = savedDataJSON ? savedDataJSON : null;
    const selectLanguage = lng || getLocales()[0].languageCode;
    console.log('detect - selectLanguage:', selectLanguage);
    callback(selectLanguage);
  },
  cacheUserLanguage: () => {},
};
i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    resources,
    react: {
      useSuspense: false,
    },
    keySeparator: '.', // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
