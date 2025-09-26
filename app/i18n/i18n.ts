import en from '~/i18n/locales/en/translation.json';
import tc from '~/i18n/locales/tc/translation.json';
import sc from '~/i18n/locales/sc/translation.json';
import type { Resource } from 'i18next';

export const resources: Resource = {
  en: { translation: en },
  tc: { translation: tc },
  sc: { translation: sc },
};

export const supportedLngs = Object.keys(resources);
export const fallbackLng = supportedLngs[0];

export default {
  // This is the list of languages your application supports
  supportedLngs,
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng,
  // The default namespace of i18next is "translation", but you can customize it here
  // defaultNS: "common",
  resources,
};
