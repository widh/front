// Managing JavaScript, CSS Features & Versions

/* Feature Disclaimer */
export const WFeatureDisclaimer = (
  msgEN: string, msgKR: string, btnEN?: string, btnKR?: string, urlEN?: string, urlKR?: string,
) : string => {
  let anchor = '';
  if (btnEN && btnKR && urlEN && urlEN.length > 0) {
    anchor = `<div><a href="${urlEN}">${btnEN}`;
    if (urlKR && urlKR.length > 0) {
      anchor += `</a><br><a href="${urlKR}">`;
    } else {
      anchor += '<br>';
    }
    anchor += `${btnKR}</a></div>`;
  }
  return `<div id="browser-disclaimer"><div><div><em>${msgEN}</em><br><em>${msgKR}</em></div>${anchor}</div></div><link href="/static/styles/browser-disclaimer.min.css" rel="stylesheet" />`;
};

/* Type Definition */
export type WFeature = () => boolean;

export interface WFeatures {
  [key: string]: WFeature
};

/* Features */
const Features: WFeatures = {
  includes: () => true, /* Checked by Wrapper */
  promise: () => !!Promise,
  cssVar: () => true, /* Checked by Wrapper */
  cssFilter: () => !!(CSS && CSS.supports('filter', 'blur(0px)')),
};

export default Features;
