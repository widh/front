import React from 'react';
import { AppProps } from 'next/app';
import { I18nEnabled } from 'hooks/i18n';
import { ThemeEnabled } from 'hooks/theme';
import { FeatureChecked } from 'hooks/feature';

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
