import React from 'react';
import { useI18n } from '../../global/i18n';

import dict from './i18n.d.yml';
import $ from './style.scss';

interface Props {
  useBrightnessModeControl?: boolean
}

const Footer: React.SFC<Props> = (props: Props) => {
  const {
    useBrightnessModeControl, // TODO
  } = props;
  const { t } = useI18n(dict);

  return (
    <footer>
      <section className={$.copyrightSection}>
        <span className={$.copyrightText}>
          {`© 2020 ${t('지오')}.`}
        </span>
      </section>
    </footer>
  );
};

Footer.defaultProps = {
  useBrightnessModeControl: false,
};

export default Footer;
