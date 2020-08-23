import React from 'react';
import { useI18n } from '../../../global/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

const Resume: React.SFC = () => {
  const { t } = useI18n(dict);

  return (
    <article className={$.resumeContainer}>
      <section className={$.carouselGallery}>

      </section>
      <section>
        <blockquote>Be eigenius!</blockquote>
        <div className={$.nameCard}>
          <span className={$.namePanel}>{t('김지오')}</span>
          <span className={$.mailPanel}>
            jio
            <i className={$.mailBlur1} />
            <i className={$.mailBlur2} />
            w
            <i className={$.mailBlur3} />
            h.org
          </span>
        </div>
      </section>
      <h2>{t('소개')}</h2>
      <section>
        <h3></h3>
      </section>
      <section>
        <h3></h3>
      </section>
      <section>
        <h3></h3>
      </section>
      <section>
        <h3></h3>
      </section>
    </article>
  );
};

export default Resume;
