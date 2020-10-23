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

  const classes = [];
  if (className) classes.push(className);

  return (
    <section className={classes.join(' ')}>
      <blockquote>Be eigenius!</blockquote>
      <div className={$.nameCard}>
        <span className={$.bigName}>{t('김지오')}</span>
        <span className={$.smallName}>{t('Jio Gim')}</span>
      </div>
      <div className={$.mailCard}>
        <span className={$.mail}>
          jio
          <i className={$.mailBlur1} />
          <i className={$.mailBlur2} />
          w
          <i className={$.mailBlur3} />
          h.org
        </span>
      </div>
      <div className={$.locationCard}>
        <span className={$.location}>{t('대한민국 경상북도 포항시')}</span>
        <span className={$.location}>{t('대한민국 울산광역시')}</span>
      </div>
    </section>
  );
};

Section.defaultProps = {
  className: null,
};

export default Section;
