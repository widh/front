import React from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../_Wrapper';
import MajorLinks from './MajorLinks';
import MinorLinks from './MinorLinks';
import Features from '../../assets/features';
import VectorImages, { WVectorImageDOMConverter } from '../../assets/vectorImages';

import $ from './style.scss';

/* React Components */
const FrontStage: React.SFC = () => {
  const [t, i18n] = useTranslation();

  /* Internationalization */
  i18n.addResources('en', 'front', {
    title: 'The Space of Jio Gim',
    subtitle: 'Welcome to Jio\'s Personal Homepage.',
    index: 'Index',
    lBlog: 'Blog',
    lProjects: 'Projects',
    lResume: 'Resume',
    lGithub: 'GitHub',
    lInsta: 'Instagram',
    lFb: 'Facebook',
    lTwit: 'Twitter',
    lLin: 'LinkedIn',
    lSteam: 'Steam',
  });
  i18n.addResources('ko', 'front', {
    title: '김지오의 공간',
    subtitle: '지오의 개인 홈페이지에 어서오세요.',
    index: '둘러보기',
    lBlog: '블로그',
    lProjects: '프로젝트',
    lResume: '이력',
    lGithub: 'GitHub',
    lInsta: 'Instagram',
    lFb: 'Facebook',
    lTwit: 'Twitter',
    lLin: 'LinkedIn',
    lSteam: 'Steam',
  });
  console.log("mnte");

  /* Render */
  return (
    <Wrapper
      main
      requiredFeatures={[
      ]}
      className={$.wrapper}
    >
      <header>
        <h1>{t('front:title')}</h1>
        <h2>{t('front:subtitle')}</h2>
      </header>
      <main>
        <section>
          <h3>{t('front:index')}</h3>
          <nav>
            <MajorLinks
              hrefs={[
                'https://blog.wldh.org',
                '/projects',
                '/resume',
                'https://github.com/wldh-g/',
              ]}
              labels={[
                t('front:lBlog'),
                t('front:lProjects'),
                t('front:lResume'),
                t('front:lGithub'),
              ]}
            />
            <MinorLinks
              hrefs={[
                'https://www.instagram.com/with_jio/',
                'https://www.facebook.com/wldh.aa',
                'https://twitter.com/wldh_aa',
                'https://www.linkedin.com/in/wldh/',
                'https://steamcommunity.com/id/2_shakki',
              ]}
              labels={[
                t('front:lInsta'),
                t('front:lFb'),
                t('front:lTwit'),
                t('front:lLin'),
                t('front:lSteam'),
              ]}
            />
          </nav>
        </section>
      </main>
      <footer>

      </footer>
    </Wrapper>
  );
};

export default FrontStage;
