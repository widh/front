import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BackStage from '../components/BackStage';
import ImageDescriptors from '../assets/imageDescriptors';

const Moved: React.FC = () => {
  const [rem, setRem] = useState(0);
  const [t, i18n] = useTranslation();

  /* Internationalization */
  i18n.addResources('en', 'moved', {
    title: 'Moved!',
    detail: '{{0}} is my new homepage.',
    message: 'If the page does not change automatically, press {{0}}here{{1}} to go to the new URL.',
    asecond: 'a second',
    seconds: '{{0}} seconds',
    newurl: 'You\'ll be taken to the new homepage in {{0}}.',
  });
  i18n.addResources('ko', 'moved', {
    title: '이사했어요!',
    detail: '새 홈페이지는 {{0}}에요.',
    message: '자동으로 페이지가 바뀌지 않으면 {{0}}여기{{1}}를 눌러서 이동할 수 있어요.',
    asecond: '1초',
    seconds: '{{0}}초',
    newurl: '{{0}} 후 새 홈페이지로 이동합니다.',
  });

  /* Main Function */
  const waitfor = 10;
  let msg = t('moved:message', ['<a href="https://www.wldh.org/">', '</a>']);

  if (rem <= waitfor) {
    if (rem === waitfor) {
      window.location.replace('https://www.wldh.org/');
    } else {
      const timestr = (rem === waitfor - 1) ? t('moved:asecond') : t('moved:seconds', [waitfor - rem]);
      msg = t('moved:newurl', [timestr]);
      setTimeout(() => {
        setRem(rem + 1);
      }, 1000);
    }
  }

  /* Render */
  return (
    <BackStage
      title={t('moved:title')}
      detailedTitle={t('moved:detail', ['<a href="https://www.wldh.org/"><b>wldh.org</b></a>'])}
      message={msg}
      image={ImageDescriptors.gShiratsuyu}
    />
  );
};

export default Moved;
export const config = { amp: 'true' };
