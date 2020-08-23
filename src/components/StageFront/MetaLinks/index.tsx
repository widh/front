import React from 'react';
import MetaAnchor from './MetaAnchor';
import { useI18n } from '../../../global/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

const MetaLinks: React.SFC = () => {
  const { t } = useI18n(dict);

  return (
    <nav className={$.metaLinks}>
      <h2>{t('링크')}</h2>
      <ul>
        <li>
          <MetaAnchor
            iconHref="/images/tistory.svg"
            linkHref="https://blog.wldh.org/"
            linkLabel={t('블로그')}
            invertOnDark
          />
        </li>
        <li>
          <MetaAnchor
            iconHref="/images/github.svg"
            linkHref="https://github.com/wldh-g/"
            linkLabel={t('GitHub')}
            invertOnDark
          />
        </li>
        <li>
          <MetaAnchor
            iconHref="/images/linkedin.png"
            linkHref="https://www.linkedin.com/in/wldh/"
            linkLabel={t('LinkedIn')}
          />
        </li>
        <li>
          <MetaAnchor
            iconHref="/images/instagram.png"
            linkHref="https://www.instagram.com/with_jio"
            linkLabel={t('Instagram')}
          />
        </li>
        <li>
          <MetaAnchor
            iconHref="/images/twitter.svg"
            linkHref="https://twitter.com/wldh_aa"
            linkLabel={t('트위터')}
          />
        </li>
        <li>
          <MetaAnchor
            iconHref="/images/facebook.svg"
            linkHref="https://fb.me/wldh.aa"
            linkLabel={t('Facebook')}
          />
        </li>
        <li>
          <MetaAnchor
            iconHref="/images/keybase.svg"
            linkHref="https://keybase.io/wldh/pgp_keys.asc"
            linkLabel={t('PGP 열쇠')}
          />
        </li>
        <li>
          <MetaAnchor
            iconHref="/images/steam.svg"
            linkHref="https://steamcommunity.com/id/shilto"
            linkLabel={t('Steam ID')}
            invertOnDark
          />
        </li>
      </ul>
    </nav>
  );
};

export default MetaLinks;
