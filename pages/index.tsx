import React from 'react';
import Link from 'next/link';
import useI18n from 'hooks/i18n';
import Wrapper from 'wrap/default';
import PreparingBlock from 'sectional/PreparingBlock';
import FunctionalFooter from 'sectional/FunctionalFooter';
import ModarkbulSwitch from 'interactable/ModarkbulSwitch';
import AsideLinks from 'page-specific/AsideLinks';
import Resume from 'page-specific/Resume';

import $ from './index.scss';
import dict from './index.d.yml';

/* React Components */
const Index: React.FC = () => {
  const { t } = useI18n(dict);

  /* Render */
  return (
    <Wrapper
      isMain
      requiredFeatures={[]}
      className={$.front}
    >
      <header className={$.header}>
        <Link href="/">
          <h1 title={t('첫 페이지로 이동')}>
            <img src="/images/logo-fit.png" alt="Jio Gim Logo" />
            <span>Jio Gim</span>
          </h1>
        </Link>
        <ModarkbulSwitch className={$.modarkbul} />
      </header>
      <main>
        <AsideLinks />
        <PreparingBlock className={$.preparingBlock} />
        {/* <Resume /> */}
      </main>
      <FunctionalFooter />
    </Wrapper>
  );
};

export default Index;
