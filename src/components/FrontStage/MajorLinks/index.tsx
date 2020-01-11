import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Features from '../../../assets/features';

import $ from './style.scss';

/* Properties */
interface Props {
  hrefs: string[],
  labels: string[],
}

/* React Components */
const MajorLinks: React.SFC<Props> = (props: Props) => {
  const { hrefs, labels } = props;
  const [t, i18n] = useTranslation();

  /* Internationalization */
  i18n.addResources('en', 'front', {
    maliTitle: 'Major Links',
  });
  i18n.addResources('ko', 'front', {
    maliTitle: '주요 링크',
  });

  /* Render */
  return (
    <>
      <h4>{t('front:maliTitle')}</h4>
      <ul className={$.mali}>
        {hrefs.map((href, idx) => {
          let innerHTML;
          if (href[0] === '/') {
            innerHTML = (
              <Link href={href}>
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

export default MajorLinks;
