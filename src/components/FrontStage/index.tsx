import React from 'react';
import Wrapper from '../_Wrapper';
import MajorLinks from './MajorLinks';
import MinorLinks from './MinorLinks';
import { useI18n } from '../../misc/i18n';

import $ from './style.scss';

const requiredFeatures = [];

/* React Components */
const FrontStage: React.SFC = () => {
  const { t } = useI18n('front');

  /* Render */
  return (
    <Wrapper
      main
      requiredFeatures={requiredFeatures}
      className={$.wrapper}
    >
      <header>
        <h1 className={$.hidden}>{t('title')}</h1>
        <h2>{t('subtitle')}</h2>
        <em className={$.acnt}>{t('underConstruction')}</em>
        <em className={$.acnt}>{t('langNotify')}</em>
      </header>
      <main>
        <section>
          <h3>{t('index')}</h3>
          <nav>
            <MajorLinks
              hrefs={[
                'https://blog.wldh.org',
                /* '/projects', */
                /* '/resume', */
                'https://github.com/wldh-g/',
              ]}
              labels={[
                t('lBlog'),
                /* t('lProjects'), */
                /* t('lResume'), */
                t('lGithub'),
              ]}
            />
            <MinorLinks
              hrefs={[
                'https://www.instagram.com/with_jio/',
                'https://www.facebook.com/wldh.aa',
                'https://twitter.com/wldh_aa',
                'https://www.linkedin.com/in/wldh/',
                'https://steamcommunity.com/id/avowaling',
              ]}
              labels={[
                t('lInsta'),
                t('lFb'),
                t('lTwit'),
                t('lLin'),
                t('lSteam'),
              ]}
            />
          </nav>
        </section>
      </main>
      <footer>&copy; wldh</footer>
    </Wrapper>
  );
};

export default FrontStage;
