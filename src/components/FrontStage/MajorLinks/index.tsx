import React from 'react';
import { useTranslation, Link } from '../../../misc/i18n';
import Features from '../../../misc/features';

import $ from './style.scss';

/* Properties */
interface Props {
  hrefs: string[],
  labels: string[],
}

/* React Components */
const MajorLinks: React.SFC<Props> = (props: Props) => {
  const { hrefs, labels } = props;
  const [t] = useTranslation();

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
