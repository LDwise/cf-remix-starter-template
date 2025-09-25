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
