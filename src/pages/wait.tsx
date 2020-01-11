import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import moment from 'moment';
import BackStage from '../components/BackStage';
import ImageDescriptors from '../assets/imageDescriptors';

const Wait: React.FC = () => {
  const [now, setNow] = useState((new Date()).getTime());
  const msg = useRef('');
  const { query } = useRouter();
  const [t, i18n] = useTranslation();

  /* Internationalization */
  i18n.addResources('en', 'wait', {
    title: 'Hum... Not Yet.',
    detail: 'The page is not published yet.',
    message: 'Would you wait a while for the publish time coming?',
    opentime: 'Open time:',
    opened: 'The link is now opened:',
    unknown: 'The open time is unknown.',
    retry: 'Retry?',
  });
  i18n.addResources('ko', 'wait', {
    title: '음... 아직이에요.',
    detail: '페이지가 아직 공개되지 않았어요.',
    message: '때가 되면 찾으시는 곳으로 가실 수 있을 테니, 조금만 기다려주시겠어요?',
    opentime: '공개 시각:',
    opened: '페이지 공개 시각이에요:',
    unknown: '공개 시각을 알 수 없어요.',
    retry: '다시 가보실래요?',
  });
  useEffect(() => {
    moment.locale(document.documentElement.lang);
    setNow(new Date().getTime());
  }, []);

  /* Main Function */
  if (query.time && query.time.length > 0) {
    const timeUTC = Number.parseInt(
      (typeof query.time === 'string') ? query.time : query.time[0],
      10,
    );
    if (timeUTC > now) {
      const time = moment(timeUTC);
      msg.current = `${t('wait:opentime')}<br />&#9;<span id="open-time">${time.format('LLLL')} (${time.fromNow()})</span>`;
      setTimeout(() => {
        setNow(new Date().getTime());
      }, 1000);
    } else if (query.link && query.link.length > 0) {
      const link = `go.wldh.org/${query.link}`;
      msg.current = `${t('wait:opened')}&ensp;<a data-mono="slide" href="https://${link}">${link}</a>`;
    }
  } else if (query.link && query.link.length > 0) {
    const link = `go.wldh.org/${query.link}`;
    msg.current = `${t('wait:unknown')}<br>${t('wait:retry')} <br />&#9;⇒&ensp;<a data-mono="slide" href="https://${link}">${link}</a>`;
  }

  /* Render */
  return (
    <BackStage
      title={t('wait:title')}
      detailedTitle={t('wait:detail')}
      message={t('wait:message')}
      image={ImageDescriptors.gEnterprise}
    >
      <span dangerouslySetInnerHTML={{ __html: msg.current }} />
    </BackStage>
  );
};

export default Wait;
export const config = { amp: 'true' };
