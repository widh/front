import React from 'react';
import Link from 'next/link';
import MetaLinks from './MetaLinks';
import Preparing from './Preparing';
import Resume from './Resume';
import Footer from '../CommonFooter';
import BrightnessController from '../CommonBrightnessController';
import useI18n from '../../global/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

/* React Components */
const FrontStage: React.SFC = () => {
  const { t } = useI18n(dict);

  /* Render */
  return (
    <div className={$.front}>
      <header className={$.header}>
        <Link href="/">
          <h1 title={t('첫 페이지로 이동')}>
            <img src="/images/logo-fit.png" alt="Jio Gim Logo" />
            <span>Jio Gim</span>
          </h1>
        </Link>
        <BrightnessController className={$.modarkbul} />
      </header>
      <main>
        <MetaLinks />
        <Preparing />
        {/* <Resume /> */}
      </main>
      <Footer />
    </div>
  );
};

export default FrontStage;
