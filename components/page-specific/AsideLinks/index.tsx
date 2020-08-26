import React from 'react';
import ButtonlikeAnchor from 'interactable/ButtonlikeAnchor';
import { useI18n } from 'hooks/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

const AsideLinks: React.SFC = () => {
  const { t } = useI18n(dict);

  return (
    <nav className={$.metaLinks}>
      <h2>{t('링크')}</h2>
      <ul>
        <li>
          <ButtonlikeAnchor
            iconHref="/images/tistory.svg"
            linkHref="https://blog.wldh.org/"
            linkLabel={t('블로그')}
            invertOnDark
          />
        </li>
        <li>
          <ButtonlikeAnchor
            iconHref="/images/github.svg"
            linkHref="https://github.com/wldh-g/"
            linkLabel={t('GitHub')}
            invertOnDark
          />
        </li>
        <li>
          <ButtonlikeAnchor
            iconHref="/images/linkedin.png"
            linkHref="https://www.linkedin.com/in/wldh/"
            linkLabel={t('LinkedIn')}
          />
        </li>
        <li>
          <ButtonlikeAnchor
            iconHref="/images/instagram.png"
            linkHref="https://www.instagram.com/with_jio"
            linkLabel={t('Instagram')}
          />
        </li>
        <li>
          <ButtonlikeAnchor
            iconHref="/images/twitter.svg"
            linkHref="https://twitter.com/wldh_aa"
            linkLabel={t('트위터')}
          />
        </li>
        <li>
          <ButtonlikeAnchor
            iconHref="/images/facebook.svg"
            linkHref="https://fb.me/wldh.aa"
            linkLabel={t('Facebook')}
          />
        </li>
        <li>
          <ButtonlikeAnchor
            iconHref="/images/keybase.svg"
            linkHref="https://keybase.io/wldh/pgp_keys.asc"
            linkLabel={t('PGP 열쇠')}
          />
        </li>
        <li>
          <ButtonlikeAnchor
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

export default AsideLinks;
