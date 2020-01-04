import React, { useState } from 'react';
import BackStage from '../components/BackStage';
import ImageDescriptors from '../assets/ImageDescriptors';

const Moved: React.FC = () => {
  const [rem, setRem] = useState(0);

  const waitfor = 5;
  let msg = 'If the page does not change automatically, press <a href="https://www.wldh.org/">here</a> to go to the new URL.';

  if (rem <= waitfor) {
    if (rem === waitfor) {
      window.location.replace('https://www.wldh.org/');
    } else {
      const timestr = (rem === waitfor - 1) ? 'a second' : `${waitfor - rem} seconds`;
      msg = `You'll be taken to the new URL in ${timestr}`;
      setTimeout(() => {
        setRem(rem + 1);
      }, 1000);
    }
  }

  return (
    <BackStage
      title="Moved!"
      detailedTitle="<a href='https://www.wldh.org/'><b>wldh.org</b></a> is my new homepage."
      message={msg}
      image={ImageDescriptors.gShiratsuyu}
    />
  );
};

export default Moved;
