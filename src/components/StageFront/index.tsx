import React from 'react';
import Wrapper from '../wrap';
import MetaLinks from './MetaLinks';
import Resume from './Resume';
import Footer from '../CommonFooter';
import useI18n from '../../global/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

/* React Components */
const FrontStage: React.SFC = () => {
  const { t } = useI18n(dict);

  /* Render */
  return (
    <Wrapper
      isMain
      requiredFeatures={[]}
      classList={$.front}
    >
      <header>
        <h1 className={$.hidden}>{t('title')}</h1>
        <h2>{t('subtitle')}</h2>
        <em className={$.acnt}>{t('underConstruction')}</em>
        <em className={$.acnt}>{t('langNotify')}</em>
      </header>
      <main>
        <MetaLinks />
        <Resume />
      </main>
      <Footer />
    </Wrapper>
  );
};

export default FrontStage;
