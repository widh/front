import React from 'react';
import Link from 'next/link';
import { useI18n } from 'hooks/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

/* Properties */
interface Props {
  iconHref?: string;
  iconLabel?: string;
  linkLabel: string;
  linkHref: string;
  disabled?: boolean;
  invertOnDark?: boolean;
};

/* React Components */
const ButtonlikeAnchor: React.SFC<Props> = (props: Props) => {
  const {
    iconHref, iconLabel, linkLabel, linkHref, disabled, invertOnDark,
  } = props;
  const { t } = useI18n(dict);

  const iconLabelFallback = iconLabel || `${linkLabel} ${t('아이콘')}`;
  const linkHrefSwitched = disabled ? '#' : linkHref;
  const linkLabelSwitched = disabled ? `${linkLabel} ${t('(비활성화됨)')}` : linkLabel;

  const makeBlur = () => {
    (document.activeElement as HTMLElement).blur();
    return !disabled;
  };

  const wrapperClassName = [$.metaButton, disabled ? $.metaButtonDisabled : undefined]
    .filter(Boolean).join(' ');
  const invertClass = invertOnDark ? $.inverted : '';

  /* Render */
  return (
    <Link href={linkHrefSwitched}>
      <a href={linkHrefSwitched} onClick={makeBlur} className={wrapperClassName}>
        {
          iconHref && (
            <div className={$.iconContainer}>
              <img className={invertClass} src={iconHref} alt={iconLabelFallback} />
            </div>
          )
        }
        <span className={$.labelContainer}>
          {linkLabelSwitched}
        </span>
      </a>
    </Link>
  );
};

ButtonlikeAnchor.defaultProps = {
  iconHref: undefined,
  iconLabel: undefined,
  disabled: false,
  invertOnDark: false,
};

export default ButtonlikeAnchor;
