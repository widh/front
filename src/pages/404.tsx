import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ImageDescriptors from '../misc/imageDescriptors';
import BackStage from '../components/BackStage';
import { useI18n } from '../misc/i18n';

const NotFound: React.SFC = () => {
  const [linkPlaceholder, setLink] = useState(<></>);
  const routeLink = useRouter().query.link;
  const routeSrc = useRouter().query.src;
  const { t } = useI18n('404');

  /* Main function */
  useEffect(() => {
    const parsedLink = routeLink || '';
    const parsedSrc = routeSrc || '';

    let reqText = '';
    let reqURL = '';
    let showLink = false;

    if (parsedSrc === 'go') {
      reqText = `${parsedSrc}.wldh.org/${parsedLink}`;
      reqURL = `https://${parsedSrc}.wldh.org/${parsedLink}`;
      showLink = true;
    } else if (parsedSrc === 'www') {
      window.location.replace(`https://www.wldh.org/${parsedLink}`);
    } else if (
      parsedLink.length === 0
      && window.location.href !== 'https://www.wldh.org/404'
      && window.location.href !== 'https://www.wldh.org/404.html'
    ) {
      reqText = `www.wldh.org${window.location.pathname}`;
      reqURL = `https://www.wldh.org${window.location.pathname}`;
      showLink = true;
    }

    if (showLink) {
      setLink(<a data-mono="slide" href={reqURL}>{reqText}</a>);
      const tpSpan: HTMLElement = document.querySelector('[data-visible="transparent"]');
      if (tpSpan) tpSpan.dataset.visible = 'opaque';
    }
  }, [routeLink, routeSrc]);

  /* Render */
  return (
    <BackStage
      title={t('404:title')}
      detailedTitle={t('404:detail')}
      message={t('404:message')}
      image={ImageDescriptors.gIsland}
      metaImage="/static/images/banner-404.png"
      favicoff
    >
      <span data-visible="transparent">
        {t('404:requrl')}
        <br />
        &ensp;&ensp;&ensp;
        {linkPlaceholder}
        <br />
        <br />
        <a data-alt href="https://www.wldh.org/">{t('404:orgohome')}</a>
      </span>
    </BackStage>
  );
};

export default NotFound;
export const config = { amp: 'true' };
