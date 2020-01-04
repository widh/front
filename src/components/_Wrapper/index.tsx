import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { WFeature, WFeatureDisclaimer } from '../../assets/Features';

/* Constants */
const browserDisclaimerHTML = WFeatureDisclaimer(
  'This web browser does not support web standard, so this page will not be rendered as intended or work properly on this browser.',
  '이 웹 브라우저는 웹 표준을 지원하지 않기 때문에, 이 페이지는 이 브라우저에서 온전하게 보이거나 작동하지 않습니다.',
  'Learn More',
  '자세히 알아보기',
  'https://browser-update.org/update.html#co',
);

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

  // Determine meta information
  const realTitle = main ? 'Annyeong! The world of wldh.' : `${title} ～ Wowldh.`;
  const metaTitle = main ? 'The world of wldh, Annyeong!' : title;
  const metaDescription = description || 'Jio Gim\'s personal homepage, the world of wldh.';
  const metaURL = `https://www.wldh.org${pathname}`;
  const metaImage = image || '/images/banner-index.png';

  // Initialize features
  let featureList: WFeature[] = [() => !!String.prototype.includes];
  if (requiredFeatures) featureList = featureList.concat(requiredFeatures);

  // Check features
  useEffect(() => {
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
          document.body.innerHTML = `${browserDisclaimerHTML}${document.body.innerHTML}`;
        }
      }
    }
  }, [featureList]);

  // Render
  return (
    <div className={className}>
      <Head>

        {/* Modarkbul - dark/light theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (
                (!document.cookie.includes("modarkbul") && window.matchMedia("(prefers-color-scheme: dark)").matches)
                || (document.cookie.includes("modarkbul=dark"))
              ) {
                document.documentElement.style.setProperty("background-color", "#000000");
                document.documentElement.dataset.theme = "dark";
                document.documentElement.style.setProperty("color", "#ffffff");
              } else {
                document.documentElement.style.setProperty("background-color", "#ffffff");
                document.documentElement.dataset.theme = "light";
                document.documentElement.style.setProperty("color", "#000000");
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

        {/* Internet Explorer Check */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function () {
                var agent = navigator.userAgent.toLowerCase();
                if (
                  (navigator.appName === "Netscape" && agent.indexOf("trident") !== -1)
                  || agent.indexOf("msie") !== -1
                ) {
                  document.body.innerHTML = '${browserDisclaimerHTML}' + document.body.innerHTML;
                }
              };
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
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap"
          rel="stylesheet"
        />

      </Head>

      {/* No Javascript Environment Alert */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: WFeatureDisclaimer(
            'JavaScript is now disabled. Please turn it on for full page rendering.',
            'JavaScript가 꺼져 있습니다. 완전한 페이지 표시를 위해 JavaScript를 켜 주세요.',
          ),
        }}
      />

      {/* Real Body */}
      {children}
    </div>
  );
};

export default Wrapper;
