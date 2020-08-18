import React from 'react';
import Wrapper from '../wrap';
import MetaLinks from './MetaLinks';
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
    <Wrapper
      isMain
      requiredFeatures={[]}
      classList={$.front}
    >
      <header className={$.header}>
        <h1>
          <img src="/images/logo-fit.png" alt="Jio Gim Logo" />
          <span>Jio Gim</span>
        </h1>
        <BrightnessController className={$.modarkbul} />
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
