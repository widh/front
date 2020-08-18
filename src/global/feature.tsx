import React, {
  createContext, useReducer, useContext, Dispatch,
} from 'react';
import { Feature, FeatureCheckResultAdvanced } from './features';

interface FeatureRecordStruct {
  checked: FeatureCheckResultAdvanced[]
};

const initialFeatureCheckContext: FeatureRecordStruct = { checked: [] };
const FCContext = createContext<FeatureRecordStruct>(initialFeatureCheckContext);

type FCAction = { type: 'CHECK_FEATURE'; checkedFn: FeatureCheckResultAdvanced[]; };
const fcReducer = (state: FeatureRecordStruct, action: FCAction): FeatureRecordStruct => {
  switch (action.type) {
    case 'CHECK_FEATURE':
      return {
        ...state,
        checked: state.checked.concat(action.checkedFn),
      };
    default:
      return state;
  }
};

type FCDispatch = Dispatch<FCAction>;
const FCDispatchContext = createContext<FCDispatch | undefined>(undefined);

interface Props { children: React.ReactElement | React.ReactElement[] }
export const FeatureChecked: React.SFC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(fcReducer, initialFeatureCheckContext);
  return (
    <FCDispatchContext.Provider value={dispatch}>
      <FCContext.Provider value={state}>
        {children}
      </FCContext.Provider>
    </FCDispatchContext.Provider>
  );
};

const state = { checked: [] };

export const useFeature = (fn: Feature | Feature[], alert = true) => {
  // const state = useContext(FCContext);
  // const dispatch = useContext(FCDispatchContext);

  const results: FeatureCheckResultAdvanced[] = [];
  let isPassed = true;

  if (fn) {
    const findFnInContext = (fnName: string): boolean => {
      let fnFound = false;
      for (let j = 0; j < state.checked.length; j += 1) {
        if (state.checked[j].fn.name === fnName) {
          fnFound = true;
        }
      }
      return fnFound;
    };

    // Confirm that the fn is not checked
    const target: Feature[] = [];
    if (fn instanceof Array) {
      for (let i = 0; i < fn.length; i += 1) {
        if (!findFnInContext(fn[i].name)) {
          target.push(fn[i]);
        }
      }
    } else if (!findFnInContext(fn.name)) {
      target.push(fn);
    }

    // Check each functions
    let maxImportance = 0;
    let maxInfoKo = '이 웹 브라우저는 웹 표준을 지원하지 않기 때문에, 이 페이지는 이 브라우저에서 온전하게 보이거나 작동하지 않습니다.';
    let maxInfoEn = 'This browser does not support the web standard, so this page will not be rendered or not work properly on this browser.';
    let maxLinkKo = 'https://browser-update.org/update.html';
    let maxLinkEn = 'https://browser-update.org/update.html';
    for (let i = 0; i < target.length; i += 1) {
      let result = null;
      try {
        result = target[i].checker();
      } catch {
        result = false;
      }
      if (typeof result === 'object') {
        results.push(result);
        isPassed = isPassed && result.pass;
        if (result.importance > maxImportance) {
          maxInfoKo = result.infoKo;
          maxInfoEn = result.infoEn;
          maxLinkKo = result.linkKo;
          maxLinkEn = result.linkEn;
          maxImportance = result.importance;
        }
      } else {
        results.push({
          pass: result,
          importance: 0,
          fn: target[i],
          infoEn: `A test(${i}: ${target[i].name}) failed.`,
          infoKo: `테스트(${i}: ${target[i].name})에 실패했습니다.`,
          linkEn: null,
          linkKo: null,
        });
      }
    }
    state.checked = [...results, ...state.checked];

    // Make log
    /* eslint-disable no-console */
    if (target.length > 0) {
      console.groupCollapsed(`Feature Check Log (${isPassed ? 'passed' : 'failed'})`);
      for (let i = 0; i < results.length; i += 1) {
        console.log(results[i]);
      };
      console.groupEnd();
    }

    // Make alert
    if (!isPassed && alert) {
      const isAlertFormLoaded = document.getElementById('feature-alert-form');
      const isAlertStyleLoaded = document.getElementById('feature-alert-style');
      if (isAlertFormLoaded === null) {
        const koInfo = document.createElement('em');
        koInfo.classList.add('i18n-ko');
        koInfo.textContent = maxInfoKo;
        const enInfo = document.createElement('em');
        enInfo.classList.add('i18n-en');
        enInfo.textContent = maxInfoEn;
        const formWrap = document.createElement('div');
        formWrap.className = 'feature-alert-text';
        formWrap.appendChild(koInfo);
        formWrap.appendChild(enInfo);
        const twoWrap = document.createElement('div');
        twoWrap.appendChild(formWrap);
        if (maxLinkKo !== null || maxLinkEn !== null) {
          const koButton = document.createElement('button');
          koButton.classList.add('i18n-ko');
          koButton.textContent = '더 알아보기';
          koButton.onclick = function koAlert() { window.location.href = maxLinkKo; };
          const enButton = document.createElement('button');
          enButton.classList.add('i18n-en');
          enButton.textContent = 'Learn More';
          enButton.onclick = function enAlert() { window.location.href = maxLinkEn; };
          const buttonWrap = document.createElement('div');
          buttonWrap.className = 'feature-alert-buttons';
          buttonWrap.appendChild(koButton);
          buttonWrap.appendChild(enButton);
          twoWrap.appendChild(buttonWrap);
        }
        const formChild = document.createElement('div');
        formChild.id = 'feature-alert-form';
        formChild.appendChild(twoWrap);
        document.body.insertBefore(formChild, document.body.firstChild);
      }
      if (isAlertStyleLoaded === null) {
        const styleChild = document.createElement('link');
        styleChild.id = 'feature-alert-style';
        styleChild.href = '/styles/feature-alert.min.css';
        styleChild.rel = 'stylesheet';
        document.head.appendChild(styleChild);
      }
    }
  }

  const saveFCResult = () => {
    // dispatch({ type: 'CHECK_FEATURE', checkedFn: results });
  };

  return { isPassed, results, saveFCResult };
};

export default useFeature;
