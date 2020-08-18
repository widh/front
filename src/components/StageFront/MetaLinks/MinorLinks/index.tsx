import React from 'react';
import Link from 'next/link';
import { useI18n } from '../../../global/i18n';

import $ from './style.scss';

/* Properties */
interface Props {
  hrefs: string[],
  labels: string[],
}

/* React Components */
const MinorLinks: React.SFC<Props> = (props: Props) => {
  const { hrefs, labels } = props;
  const { t } = useI18n('front');

  /* Render */
  return (
    <>
      <h4>{t('miliTitle')}</h4>
      <ul className={$.mili}>
        {hrefs.map((href, idx) => {
          let innerHTML;
          if (href[0] === '/') {
            innerHTML = (
              <Link href={href}>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a className={$.anchor}>{labels[idx]}</a>
              </Link>
            );
          } else {
            innerHTML = (
              <a className={$.anchor} href={href}>{labels[idx]}</a>
            );
          }
          return (<li className={$.item} key={href}>{innerHTML}</li>);
        })}
      </ul>
    </>
  );
};

export default MinorLinks;
