// Managing JavaScript, CSS Features & Versions

/* Feature Disclaimer */
export const WFeatureDisclaimer = (
  msgEN: string, msgKR: string, btnEN?: string, btnKR?: string, url?: string,
) : string => {
  const anchor = url && url.length > 0 ? `<div><a href="${url}">${btnEN}<br>${btnKR}</a></div>` : '';
  return `<div id="browser-disclaimer"><div><div><em>${msgEN}</em><br><em>${msgKR}</em></div>${anchor}</div></div><link href="/styles/browser-disclaimer.min.css" rel="stylesheet" />`;
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
  cssVar: () => !!(CSS && CSS.supports('color', 'var(--a)')),
  cssFilter: () => !!(CSS && CSS.supports('filter', 'blur(0px)')),
};

export default Features;
