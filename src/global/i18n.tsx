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
export const I18nEnabled: React.SFC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(i18nReducer, initialLocaleContext);
  return (
    <LocaleDispatchContext.Provider value={dispatch}>
      <LocaleContext.Provider value={state}>
        {children}
      </LocaleContext.Provider>
    </LocaleDispatchContext.Provider>
  );
};

export const useI18n = (dict: object) => {
  const state = useContext(LocaleContext);
  const dispatch = useContext(LocaleDispatchContext);

  // Translator
  const t = (item: string, adaptiveDict?: FormatDict): string => {
    let translated = item;
    if (dict !== null && Object.prototype.hasOwnProperty.call(dict, state.locale)) {
      if (Object.prototype.hasOwnProperty.call(dict[state.locale], item)) {
        translated = dict[state.locale][item];
        if (adaptiveDict) {
          translated = format(translated, adaptiveDict);
        }
      } else {
        /* eslint-disable no-console */
        console.warn(`No appropriate translation for "${item}"!`);
      }
    }
    return translated;
  };

  // Locale Setter
  const setLocale = (locale: I18nLocale): void => {
    dispatch({
      type: 'SET_LOCALE',
      locale,
    });
  };

  // Locale Getter
  const getLocale = (): I18nLocale => state.locale;

  return { t, setLocale, getLocale };
};

export default useI18n;
