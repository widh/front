import CSSFilter from './CSS.filter';
import CSSVariable from './CSS.variable';
import Failure from './Failure';
import InternetExplorer from './InternetExplorer';
import StringIncludes from './String.Includes';

export {
  CSSFilter, CSSVariable, Failure, InternetExplorer, StringIncludes,
};

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
