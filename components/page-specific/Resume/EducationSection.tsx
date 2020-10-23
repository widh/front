import React from 'react';
import { useI18n } from 'hooks/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

interface Props {
  className?: string;
};

const Section: React.FC<Props> = (props: Props) => {
  const { className } = props;
  const { t } = useI18n(dict);

  const classes = [$.section];
  if (className) classes.push(className);

  return (
    <section className={classes.join(' ')}>
      <h3>Education</h3>
      <div className={$.eduBlock}>
        <div className={$.eduTitle}>
          <div className={$.eduEmblem}>
            <img src="/images/postech-emblem.png" alt={t('POSTECH 엠블럼')} />
          </div>
          <span className={$.eduBigName}>{t('POSTECH')}</span>
          <span className={$.eduSmallName}>{t('포항공과대학교')}</span>
        </div>
        <div className={$.eduBody}>
          <div className={$.eduDegree}>
            <span>{t('Undergraduate Student')}</span>
          </div>
          <div className={$.eduPeriod}>
            <span>{t('Feb 2016 - Feb 2020')}</span>
          </div>
          <ul className={$.eduDetail}>
            <li><span>Majored in Creative IT Engineering</span></li>
          </ul>
        </div>
        <div className={$.eduBody}>
          <div className={$.eduDegree}>
            <span>{t('Graduate Student')}</span>
          </div>
          <div className={$.eduPeriod}>
            <span>{t('Feb 2020 -')}</span>
          </div>
          <ul className={$.eduDetail}>
            <li><span>Majoring in Mobile Networking, CSE</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

Section.defaultProps = {
  className: null,
};

export default Section;
