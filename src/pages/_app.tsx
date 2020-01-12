import React, { useEffect } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import { AppProps } from 'next/app';
import i18next from 'i18next';

i18next
  .use(initReactI18next)
  .init({
    defaultNS: 'common',
    fallbackLng: 'dev',
    lng: 'en',
    initImmediate: true,
    whitelist: ['ko', 'en'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { common: {} },
      ko: { common: {} },
    },
    react: {
      bindI18n: 'languageChanged loaded',
      useSuspense: false,
    },
  });

const WApp = ({ Component, pageProps }: AppProps) => {
  const i18n = useTranslation()[1];

  useEffect(() => {
    document.documentElement.lang = navigator.language.indexOf('ko') > -1 ? 'ko' : 'en';
    i18n.changeLanguage(document.documentElement.lang);
  }, [i18n]);

  /* eslint-disable react/jsx-props-no-spreading */
  return (<Component {...pageProps} />);
};

export default WApp;
