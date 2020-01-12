import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ImageDescriptors from '../misc/imageDescriptors';
import BackStage from '../components/BackStage';
import { useI18n } from '../misc/i18n';

const NotFound: React.SFC = () => {
  const [linkPlaceholder, setLink] = useState(<></>);
  const routeLink = useRouter().query.link;
  const { t } = useI18n('404');

  /* Main function */
  useEffect(() => {
    const parsedLink = routeLink || '';

    let reqText = '';
    let reqURL = '';

    if (parsedLink && parsedLink.length > 0) {
      reqText = `go.wldh.org/${parsedLink}`;
      reqURL = `https://go.wldh.org/${parsedLink}`;
    } else {
      reqText = `www.wldh.org${window.location.pathname}`;
      reqURL = `https://www.wldh.org${window.location.pathname}`;
    }

    setLink(<a data-mono="slide" href={reqURL}>{reqText}</a>);

    const tpSpan: HTMLElement = document.querySelector('[data-visible="transparent"]');
    if (tpSpan) tpSpan.dataset.visible = 'opaque';
  }, [routeLink]);

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
      </span>
    </BackStage>
  );
};

export default NotFound;
export const config = { amp: 'true' };
