import React, {
  createContext, useReducer, useContext, Dispatch,
} from 'react';

/**
 ******************************
 * String Formatter (Utility) *
 ******************************
 */

type FormatDictObject = {
  [key: string]: string;
}
type FormatDictArray = string[];
type FormatDict = FormatDictObject | FormatDictArray;

/* eslint-disable no-else-return */
const format = (message: string, dict: FormatDict, depth = 0): string => {
  const replaces = message.match(/\[\[[0-9a-zA-Z_:.]*\]\]/gm);
  let replacedCounter = 0;
  let replacedMessage = String(message);

  if (replaces) {
    for (let i = 0; i < replaces.length; i += 1) {
      if (replaces[i] === '[[]]') {
        replacedMessage = replacedMessage.replace(
          replaces[i],
          dict[replacedCounter],
        );
        replacedCounter += 1;
      } else {
        const reqArgLabel = replaces[i].substring(2, replaces[i].length - 2);
        const reqArgNo = Number(reqArgLabel);
        const reqArg = Number.isNaN(reqArgNo) ? reqArgLabel : reqArgNo;

        if (typeof dict[reqArg] !== 'undefined') {
          replacedMessage = replacedMessage.replace(
            replaces[i],
            dict[reqArg],
          );
        }
      }
    }
    if (depth > 10) {
      return replacedMessage;
    } else {
      return format(replacedMessage, dict, depth + 1);
    }
  } else {
    return replacedMessage;
  }
};

/**
 ******************************
 * I18n React Hook Definition *
 ******************************
 */

export type I18nLocale = 'ko' | 'en';
interface I18nStruct {
  locale: I18nLocale
};

const initialLocaleContext: I18nStruct = { locale: 'ko' };
const LocaleContext = createContext<I18nStruct>(initialLocaleContext);

type I18nAction = { type: 'SET_LOCALE'; locale: I18nLocale; };
const i18nReducer = (state: I18nStruct, action: I18nAction): I18nStruct => {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        locale: action.locale,
      };
    default:
      return state;
  }
};

type I18nDispatch = Dispatch<I18nAction>;
const LocaleDispatchContext = createContext<I18nDispatch | undefined>(undefined);

interface Props { children: React.ReactElement | React.ReactElement[] }
export const I18nEnabled: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(i18nReducer, initialLocaleContext);
  return (
    <LocaleDispatchContext.Provider value={dispatch}>
      <LocaleContext.Provider value={state}>
        {children}
      </LocaleContext.Provider>
    </LocaleDispatchContext.Provider>
  );
};

type LocaleFormatDict = {
  [key in I18nLocale]: FormatDict;
};
type TranslationDict = LocaleFormatDict | FormatDict;

export const useI18n = (dict: object) => {
  const state = useContext(LocaleContext);
  const dispatch = useContext(LocaleDispatchContext);

  // Translator
  const t = (item: string, adaptiveDict?: TranslationDict): string => {
    let translated = item;
    if (dict !== null && Object.prototype.hasOwnProperty.call(dict, state.locale)) {
      if (Object.prototype.hasOwnProperty.call(dict[state.locale], item)) {
        translated = dict[state.locale][item];
        if (adaptiveDict) {
          if (adaptiveDict[state.locale]) {
            // LocaleFormatDict
            translated = format(translated, adaptiveDict[state.locale]);
          } else {
            // FormatDict
            translated = format(translated, adaptiveDict as FormatDict);
          }
        }
      } else {
        /* eslint-disable no-console */
        console.warn(`No appropriate translation for "${item}"!`);
      }
    } else if (adaptiveDict) {
      if (adaptiveDict[state.locale]) {
        translated = format(translated, adaptiveDict[state.locale]);
      } else {
        translated = format(translated, adaptiveDict as FormatDict);
      }
    }
    return translated;
  };

  // Locale Setter
  const setLocale = (locale: I18nLocale): void => {
    document.documentElement.lang = locale;

    dispatch({
      type: 'SET_LOCALE',
      locale,
    });
  };

  // Locale Getter
  const getLocale = (): I18nLocale => state.locale;

  // Locale Toggler
  const toggleLocale = (withBlurring = true): void => {
    const newLocale = getLocale() === 'en' ? 'ko' : 'en';
    const beKorean = newLocale === 'ko';
    const isBrowserKo = navigator.language.indexOf('ko') > -1;

    if (isBrowserKo === beKorean) {
      window.localStorage.removeItem('ssualassuala');
    } else {
      window.localStorage.setItem('ssualassuala', newLocale);
    }

    setLocale(newLocale);

    if (withBlurring) {
      (document.activeElement as HTMLElement).blur();
    }
  };

  return {
    t, setLocale, getLocale, toggleLocale,
  };
};

export default useI18n;
