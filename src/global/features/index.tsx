import InternetExplorer from './InternetExplorer';
import CSSVariable from './CSS.variable';
import StringIncludes from './String.Includes';

export { InternetExplorer, CSSVariable, StringIncludes };

export type Feature = {
  name: string;
  checker: FeatureChecker;
};

export type FeatureCheckResultBasic = boolean;
export type FeatureCheckResultAdvanced = {
  importance: number;
  fn: Feature;
  pass: boolean;
  infoEn: string;
  infoKo: string;
  linkKo: string;
  linkEn: string;
};

export type FeatureChecker = (() => FeatureCheckResultBasic) | (() => FeatureCheckResultAdvanced);
