import React from 'react';
import CarouselGallery from 'interactable/CarouselGallery';
import { useI18n } from 'hooks/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

const Resume: React.FC = () => {
  const { t } = useI18n(dict);

  const albumList = null;

  return (
    <article className={$.resumeContainer}>
      <section className={$.carouselGallery}>
        <CarouselGallery />
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
        <h3>Education</h3>
        <div className={$.educationBlockContainer}>
          <div className={$.educationBlockHeading}>
            <div className={$.educationEmblemContainer}>
              <img src="./images/postech-emblem.png" alt={t('POSTECH 엠블럼')} />
            </div>
            <span>{t('POSTECH (포항공과대학교)')}</span>
          </div>
          <div className={$.educationBlockBody}>
            <div className={$.educationBlockDetail}>
              <div className={$.educationDegree}>
                <span>{t('Undergraduate Student')}</span>
              </div>
              <div className={$.educationLocation}>
                <span>{t('Pohang, Republic of Korea')}</span>
              </div>
              <div className={$.educationPeriod}>
                <span>{t('Feb 2016 - Feb 2020')}</span>
              </div>
            </div>
            <ul className={$.educationBlockItems}>
              <li><span>Majored in Creative IT Engineering</span></li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h3>{t('렌더링 시각')}</h3>
        <div className={$.renderTimeContainer}>
          {t('이 문서의 내용은 [[]] 기준으로 렌더링된 것입니다.', [(new Date()).toLocaleString()])}
        </div>
      </section>
    </article>
  );
};

export default Resume;
