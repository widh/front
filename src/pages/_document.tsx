import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { WFeatureDisclaimer } from '../assets/features';

class WDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Language Configuration */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (navigator.languages) {
                  document.documentElement.lang = navigator.languages.includes('ko') ? 'ko' : 'en';
                } else {
                  document.documentElement.lang = navigator.language.indexOf('ko') > -1 ? 'ko' : 'en';
                }
              `,
            }}
          />
        </Head>
        <body>

          {/* No Javascript Environment Alert */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: WFeatureDisclaimer(
                'JavaScript is now disabled. Please turn it on for full page rendering.',
                'JavaScript가 꺼져 있습니다. 완전한 페이지 표시를 위해 JavaScript를 켜 주세요.',
              ),
            }}
          />

          {/* Main Body */}
          <Main />

          {/* Next.js */}
          <NextScript />

        </body>
      </Html>
    );
  }
};

export default WDocument;
