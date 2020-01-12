import React, { useState } from 'react';
import { useTranslation } from '../misc/i18n';
import ImageDescriptors from '../misc/imageDescriptors';
import BackStage from '../components/BackStage';

const Moved: React.FC = () => {
  const [rem, setRem] = useState(0);
  const [t] = useTranslation();

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
