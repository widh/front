import { useTranslation } from 'react-i18next';
import { i18n as i18next } from 'i18next';

interface I18nUse {
  t: (string, ...any) => string
  i18n: i18next
}

const loaded = [];

const useI18n = (ns: string | string[]) : I18nUse => {
  const [t, i18n] = useTranslation(ns);

  let nsList: string[];
  if (ns instanceof Array) {
    nsList = ns;
  } else {
    nsList = [ns];
  }

  nsList.forEach(async (ans) => {
    if (!loaded.includes(ans)) {
      loaded.push(ans);
      try {
        const enRaw = await import(`../locales/en/${ans}.json`);
        i18n.addResources('en', ans, enRaw.default);
        const koRaw = await import(`../locales/ko/${ans}.json`);
        i18n.addResources('ko', ans, koRaw.default);
      } finally {
        i18n.changeLanguage(i18n.language);
        document.body.dataset.ready = 'true';
      }
    }
  });

  return { t, i18n };
};

/* eslint-disable import/prefer-default-export */
export { useI18n };
