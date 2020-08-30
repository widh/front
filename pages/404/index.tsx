import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useI18n } from 'hooks/i18n';
import Wrapper from 'wrap/default';
import StageBack from 'templates/StageBack';

import $ from './style.scss';
import dict from './i18n.d.yml';

const NotFound: React.FC = () => {
  const { t } = useI18n(dict);
  const { link, src, path } = useRouter().query;
  const [showGuide, setGuideVisibility] = useState(false);
  const [guideLink, setGuideLink] = useState(<></>);
  const [guideLinkURL, setGuideLinkURL] = useState('/');
  const [homeLinkURL, setHomeLinkURL] = useState('/');

  useEffect(() => {
    const parsedLink = link.toString() || '';
    const parsedSrc = src.toString() || '';
    const parsedPath = path.toString() || '';

    let reqText = '';
    let reqURL = '';
    let showLink = false;

    if (parsedSrc.length > 0) {
      // Not found in some wow service
      setHomeLinkURL(`https://${parsedSrc}.wldh.org/`);
      if (
        parsedLink.length === 0
        && parsedPath.length > 0 && parsedPath[0] === '/'
      ) {
        reqText = `${parsedSrc}.wldh.org${parsedPath}`;
        reqURL = `https://${parsedSrc}.wldh.org${parsedPath}`;
        showLink = true;
      } else if (parsedLink.length > 0 && parsedPath.length === 0) {
        reqText = `${parsedSrc}.wldh.org/${parsedLink}`;
        reqURL = `https://${parsedSrc}.wldh.org/${parsedLink}`;
        showLink = true;
      }
    } else if (
      parsedSrc.length === 0
      && parsedLink.length === 0
      && parsedPath.length === 0
      && window.location.href !== 'https://www.wldh.org/404'
      && window.location.href !== 'https://www.wldh.org/404.html'
    ) {
      // Not found in www service
      reqText = `www.wldh.org${window.location.pathname}`;
      reqURL = `https://www.wldh.org${window.location.pathname}`;
      showLink = true;
    }

    if (showLink) {
      setGuideVisibility(true);
      setGuideLink(<a className={$.linkBody} href={reqURL}>{decodeURIComponent(reqText)}</a>);
      setGuideLinkURL(reqURL);
    } else {
      setGuideVisibility(false);
    }
  }, [link, src, path]);

  return (
    <Wrapper
      title={t('어... 모르겠어요.')}
      description={t('찾으시는 페이지가 존재하지 않아요.')}
      thumbnailURL="/images/banner-404.png"
      useFavicoff
      allowCrawling={false}
      requiredFeatures={[]}
    >
      <StageBack
        header={t('어... 모르겠어요.')}
        detail={t('찾으시는 페이지가 존재하지 않아요.')}
      >
        {
          showGuide && (
            <>
              <div className={$.linkGuide}>
                <span className={$.linkGuideHeader}>{`${t('가려던 페이지')}:`}</span>
                {guideLink}
              </div>
              <br />
              <a className={$.retry} href={guideLinkURL}>
                {t('전에는 이런 적이 없었는데... 다시 한 번 시도해보시겠어요?')}
              </a>
            </>
          )
        }
        <a className={$.goToHome} href={homeLinkURL}>
          {showGuide ? t('아니면 여기를') : t('여기를')}
          &nbsp;
          {t('눌러서 첫 페이지로 가시겠어요?')}
        </a>
      </StageBack>
    </Wrapper>
  );
};

export default NotFound;
