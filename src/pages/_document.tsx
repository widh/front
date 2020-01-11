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
                document.documentElement.lang = navigator.language.indexOf('ko') > -1 ? 'ko' : 'en';
              `,
            }}
          />

          {/* Internet Explorer Check */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', function () {
                  var agent = navigator.userAgent.toLowerCase();
                  if (
                    (navigator.appName === "Netscape" && agent.indexOf("trident") !== -1)
                    || agent.indexOf("msie") !== -1
                  ) {
                    document.body.innerHTML = '${
                      WFeatureDisclaimer(
                        'Internet Explorer is an old browser, does not support modern web technologies. This page will not be rendered as intended or work properly.',
                        'Internet Explorer는 현대 웹 기술을 지원하지 않는 낡은 브라우저입니다. 이 페이지는 Internet Explorer에서 온전하게 보이거나 작동하지 않습니다.',
                        'Learn More',
                        '더 알아보기',
                        'https://techcommunity.microsoft.com/t5/windows-it-pro-blog/the-perils-of-using-internet-explorer-as-your-default-browser/ba-p/331732',
                        'http://newslabit.hankyung.com/article/201902192484G',
                      )
                    }' + document.body.innerHTML;
                  }
                });
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
