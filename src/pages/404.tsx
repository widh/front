import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import BackStage from '../components/BackStage';
import ImageDescriptors from '../assets/imageDescriptors';

const NotFound: React.SFC = () => {
  const [linkPlaceholder, setLink] = useState(<></>);
  const routeLink = useRouter().query.link;
  const [t, i18n] = useTranslation();

  /* Internationalization */
  i18n.addResources('en', '404', {
    title: 'Huh... I don\'t know.',
    detail: 'The page that you\'re looking for does not exist.',
    message: 'I\'ve never done this before...How about typing whole the URL again?',
    requrl: 'Requested URL:',
  });
  i18n.addResources('ko', '404', {
    title: '어... 모르겠어요.',
    detail: '찾으시는 페이지가 존재하지 않아요.',
    message: '전에는 이런 적이 없었는데... 다시 한 번 시도해보시겠어요?',
    requrl: '가려던 페이지:',
  });

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

    setLink(<a href={reqURL}>{reqText}</a>);

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
      metaImage="/images/banner-404.png"
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
