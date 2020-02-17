import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import atob from 'atob';
import ImageDescriptors from '../misc/imageDescriptors';
import BackStage from '../components/BackStage';
import { useI18n } from '../misc/i18n';

const Wait: React.FC = () => {
  const [now, setNow] = useState((new Date()).getTime());
  const msg = useRef('');
  const { query } = useRouter();
  const { t, i18n } = useI18n('wait');

  useEffect(() => {
    moment.locale(document.documentElement.lang);
    setNow(new Date().getTime());
  }, []);

  /* Main Function */
  /* eslint-disable no-empty */
  const getReason = () => {
    let ret = '';
    if (query.reason && query.reason.length > 0) {
      try {
        const reason = JSON.parse(decodeURIComponent(atob(query.reason.toString())));
        ret = `${t('wait:reason')}<br />&#9;${reason[i18n.language.substring(0, 2)]}<br /><br />`;
      } finally {}
    }
    return ret;
  };
  if (query.time && query.time.length > 0) {
    const timeUTC = Number.parseInt(
      (typeof query.time === 'string') ? query.time : query.time[0],
      10,
    );
    if (timeUTC > now) {
      const time = moment(timeUTC);
      msg.current = `${getReason()}${t('wait:opentime')}<br />&#9;<span id="open-time">${time.format('LLLL')} (${time.fromNow()})</span>`;
      setTimeout(() => {
        setNow(new Date().getTime());
      }, 1000);
    } else if (query.link && query.link.length > 0) {
      const link = `go.wldh.org/${query.link}`;
      msg.current = `${t('wait:opened')}&ensp;<a data-mono="slide" href="https://${link}">${link}</a>`;
    }
  } else if (query.link && query.link.length > 0) {
    const link = `go.wldh.org/${query.link}`;
    msg.current = `${getReason()}${t('wait:unknown')}<br />${t('wait:retry')}<br />&#9;⇒&ensp;<a data-mono="slide" href="https://${link}">${link}</a>`;
  } else {
    msg.current = getReason().trim();
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
