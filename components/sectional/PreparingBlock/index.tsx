import React from 'react';
import { useI18n } from 'hooks/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

interface Props {
  className?: string | string[]
};

const PreparingBlock: React.FC<Props> = (props: Props) => {
  const { className } = props;
  const { t } = useI18n(dict);

  const fullClassName = [$.preparingContainer].concat(className).filter(Boolean).join(' ');

  return (
    <div className={fullClassName}>
      <div className={$.preparingIcon}>
        ⚠
      </div>
      <span>{t('이 부분의 내용은 작성하고 있습니다.')}</span>
    </div>
  );
};

PreparingBlock.defaultProps = {
  className: '',
};

export default PreparingBlock;
