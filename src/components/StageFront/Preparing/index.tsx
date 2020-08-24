import React from 'react';
import { useI18n } from '../../../global/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

const Preparing: React.SFC = () => {
  const { t } = useI18n(dict);

  return (
    <div className={$.preparingContainer}>
      <div className={$.preparingIcon}>
        ⚠
      </div>
      <span>{t('이 부분의 내용은 준비하고 있습니다. 이번 여름이 지나기 전에는 채워질 겁니다.')}</span>
    </div>
  );
};

export default Preparing;
