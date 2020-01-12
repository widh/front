import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useI18n } from '../../misc/i18n';
import { WFeature, WFeatureDisclaimer } from '../../misc/features';

import './style.scss';

/* React Component */
interface Props {
  title?: string
  description?: string
  main?: boolean
  image?: string
  favicoff?: boolean
  className?: string
  requiredFeatures?: WFeature[]
  children: React.ReactElement | React.ReactElement[]
};

const Wrapper: React.SFC<Props> = (props: Props) => {
  const {
    children, title, main, description, image, favicoff, className, requiredFeatures,
  } = props;
  const { pathname } = useRouter();
  const { t } = useI18n('common');

  // Determine meta information
  const realTitle = main ? t('realTitleMain') : t('realTitleSub', [title]);
  const metaTitle = main ? t('metaTitle') : title;
  const metaDescription = description || t('metaDescription');
  const metaURL = `https://www.wldh.org${pathname}`;
  const metaImage = image || '/static/images/banner-index.png';

  // Feature Detection
  useEffect(() => {
    // Initialize features
    let featureList: WFeature[] = [
      () => !!String.prototype.includes,
      () => !!(CSS && CSS.supports('color', 'var(--a)')),
    ];
    if (requiredFeatures) featureList = featureList.concat(requiredFeatures);

    // Check features
    for (let i = 0; i < featureList.length; i += 1) {
      try {
        if (!featureList[i]()) {
          throw new Error(`A result of feature test ${i} was false.`);
        } else if (i === featureList.length - 1) {
          /* eslint-disable no-console */
          console.info('This browser supports wldh.');
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.info(`This browser does not support wldh. [index=${i}]`);
        console.error(e);
        if (!document.getElementById('browser-disclaimer')) {
          document.body.innerHTML = `${WFeatureDisclaimer(
            'This browser does not support web standard, so this page will not be rendered as intended or work properly on this browser.',
            '이 웹 브라우저는 웹 표준을 지원하지 않기 때문에, 이 페이지는 이 브라우저에서 온전하게 보이거나 작동하지 않습니다.',
            'Learn More',
            '자세히 알아보기',
            'https://browser-update.org/update.html',
          )}${document.body.innerHTML}`;
        }
      }
    }
  }, [requiredFeatures]);

  // Render
  return (
    <div className={className}>
      <Head>

        {/* Modarkbul - dark/light theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (
                (!document.cookie.indexOf("modarkbul") > -1 && window.matchMedia("(prefers-color-scheme: dark)").matches)
                || (document.cookie.indexOf("modarkbul=dark") > -1)
              ) {
                document.documentElement.dataset.theme = "dark";
                document.documentElement.style.setProperty("background-color", "#000000");
              } else {
                document.documentElement.dataset.theme = "light";
                document.documentElement.style.setProperty("background-color", "#ffffff");
              }
            `,
          }}
        />

        {/* Document Domain Configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.domain && document.domain.indexOf('wldh.org') > -1) {
                document.domain = 'wldh.org';
              }
            `,
          }}
        />

        {/* Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="noimageindex" />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:url" content={metaURL} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:description" content={metaDescription} />
        <title>{realTitle}</title>

        {/* Styles */}
        <link
          href={favicoff ? '/favicoff.ico' : '/favicon.ico'}
          rel="shortcut icon"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap&subset=korean"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Mono&display=swap"
          rel="stylesheet"
        />

      </Head>

      {/* Real Body */}
      {children}

      {/* No Javascript Environment Alert */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: WFeatureDisclaimer(
            'JavaScript is now disabled. Please turn it on for full page rendering.',
            'JavaScript가 꺼져 있습니다. 완전한 페이지 표시를 위해 JavaScript를 켜 주세요.',
          ),
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
    </div>
  );
};

export default Wrapper;
