import React from 'react';
import { useI18n } from '../../global/i18n';
import { useTheme } from '../../global/theme';

import dict from './i18n.d.yml';
import $ from './style.scss';

interface Props {
  useBrightnessModeControl?: boolean;
  useLocaleControl?: boolean;
  className?: string | string[];
  children?: React.ReactElement | React.ReactElement[];
}

const Footer: React.SFC<Props> = (props: Props) => {
  const {
    useBrightnessModeControl, useLocaleControl, children, className,
  } = props;
  const { t, getLocale, toggleLocale } = useI18n(dict);
  const { getTheme, toggleTheme } = useTheme();

  const changeLocale = () => {
    toggleLocale();
  };

  const changeBrightnessMode = () => {
    toggleTheme();
  };

  let integratedClassName = [$.footerContainer];
  if (className) {
    if (className instanceof Array) {
      integratedClassName = integratedClassName.concat(className);
    } else {
      integratedClassName.push(className);
    }
  }

  return (
    <footer className={integratedClassName.join(' ')}>
      <section className={$.copyrightSection}>
        <span className={$.copyrightText}>
          {`© 2020 ${t('지오')}.`}
        </span>
      </section>
      {
        useBrightnessModeControl && (
          <section className={$.brightnessSection}>
            <button className={$.controlButton} type="button" onClick={changeBrightnessMode}>
              <span>{t(getTheme() === 'dark' ? '밝게 보기' : '어둡게 보기')}</span>
            </button>
          </section>
        )
      }
      {
        useLocaleControl && (
          <section className={$.localeSection}>
            <button className={$.controlButton} type="button" onClick={changeLocale}>
              <span>{getLocale() === 'en' ? '한국어' : 'English'}</span>
            </button>
          </section>
        )
      }
      { children }
    </footer>
  );
};

Footer.defaultProps = {
  useBrightnessModeControl: false,
  useLocaleControl: true,
  children: undefined,
  className: undefined,
};

export default Footer;
