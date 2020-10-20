import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useI18n } from 'hooks/i18n';
import { useTheme } from 'hooks/theme';
import { useFeature } from 'hooks/feature';
import { Feature, InternetExplorer, CSSVariable } from 'hooks/features';

import './style.scss';
import dict from './i18n.d.yml';

export const domain = 'https://www.wldh.org';

interface Props {
  title?: string
  description?: string
  isMain?: boolean
  thumbnailURL?: string
  useFavicoff?: boolean
  className?: string | string[]
  requiredFeatures?: Feature[]
  allowCrawling?: boolean
  children?: React.ReactElement | React.ReactElement[]
};

const Wrapper: React.FC<Props> = (props: Props) => {
  const {
    children, title, isMain, description, thumbnailURL, useFavicoff, className, requiredFeatures,
    allowCrawling,
  } = props;
  const { pathname } = useRouter();
  const { t, setLocale } = useI18n(dict);
  const { getTheme, setTheme } = useTheme();

  // Feature check
  const featureCheckTargets = requiredFeatures instanceof Array
    ? [...new Set([InternetExplorer, CSSVariable, ...requiredFeatures])]
    : [...new Set([InternetExplorer, CSSVariable, requiredFeatures])];
  const { printFCResult } = useFeature(featureCheckTargets);

  useEffect(() => {
    // Locale set
    setLocale(document.documentElement.lang === 'ko' ? 'ko' : 'en');

    // Theme set
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

    // Print Function Check Result
    printFCResult(document);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [/* DO ONLY ONCE */]);

  // Redefine meta information
  const fallbackTitle = title || t('제목 없음');
  const fallbackDescription = description || t('김지오의 홈페이지입니다.');

  const dispColor = getTheme() === 'dark' ? '#2b2b2b' : '#ffffff';
  const dispTitle = isMain ? t('반가워요!') : t('[[]] ᅍ', [fallbackTitle]);
  const metaTitle = isMain ? t('반가워요! - ㅈㅇ') : fallbackTitle;
  const metaDescription = fallbackDescription;
  const metaURL = `${domain}${pathname}`;
  const metaImage = thumbnailURL;
  const fullClassName = [].concat(className).filter(Boolean).join(' ');
  const robots = allowCrawling ? 'noimageindex' : 'noindex,nofollow';

  // Render
  return (
    <>
      <Head>
        <meta name="theme-color" content={dispColor} />
        <meta name="robots" content={robots} />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:url" content={metaURL} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:description" content={metaDescription} />
        <title>{dispTitle}</title>
        <link href={useFavicoff ? '/favicoff.ico' : '/favicon.ico'} rel="shortcut icon" />
      </Head>
      <div className={fullClassName}>{children}</div>
    </>
  );
};

Wrapper.defaultProps = {
  title: undefined,
  description: undefined,
  isMain: false,
  thumbnailURL: '/images/banner-index.png',
  useFavicoff: false,
  className: '',
  requiredFeatures: undefined,
  allowCrawling: true,
  children: undefined,
};

export default Wrapper;
