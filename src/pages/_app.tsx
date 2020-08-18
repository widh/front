import React from 'react';
import { AppProps } from 'next/app';
import { I18nEnabled } from '../global/i18n';
import { ThemeEnabled } from '../global/theme';
import { FeatureChecked } from '../global/feature';

/* eslint-disable react/jsx-props-no-spreading */
const WApp = ({ Component, pageProps }: AppProps) => (
  <I18nEnabled>
    <ThemeEnabled>
      <FeatureChecked>
        <Component {...pageProps} />
      </FeatureChecked>
    </ThemeEnabled>
  </I18nEnabled>
);

export default WApp;
