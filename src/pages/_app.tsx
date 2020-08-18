import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { I18nEnabled } from '../global/i18n';
import { ThemeEnabled } from '../global/theme';
import { FeatureChecked } from '../global/feature';

/* eslint-disable react/jsx-props-no-spreading */
const WApp = ({ Component, pageProps }: AppProps) => (
  <I18nEnabled>
    <ThemeEnabled>
      <FeatureChecked>
        <Head>

          {/* Common Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        </Head>
        <Component {...pageProps} />
      </FeatureChecked>
    </ThemeEnabled>
  </I18nEnabled>
);

export default WApp;
