const i18next = require('next-i18next-serverless').default;

const i18n = new i18next({
  defaultLanguage: 'en',
  otherLanguages: ['ko'],
  defaultNS: 'common',
  localePath: 'public/static/locales',
  localeSubpaths: {
    en: 'en',
    ko: 'ko'
  },
  browserLanguageDetection: true,
  serverLanguageDetection: true,
});

module.exports = i18n;
