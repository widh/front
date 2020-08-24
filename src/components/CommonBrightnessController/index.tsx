import React from 'react';
import { useI18n } from '../../global/i18n';
import { useTheme } from '../../global/theme';

import dict from './i18n.d.yml';
import $ from './style.scss';

interface Props {
  className?: string;
}

const BrightnessController: React.SFC<Props> = (props: Props) => {
  const { className } = props;
  const { t } = useI18n(dict);
  const { toggleTheme, getTheme } = useTheme();

  const toggleMode = () => {
    toggleTheme();
  };

  const classNameFormulated = className.length > 0 ? `${$.modarkbul} ${className}` : $.modarkbul;

  return (
    <div
      className={classNameFormulated}
      onKeyPress={toggleMode}
      onClick={toggleMode}
      role="switch"
      aria-checked={getTheme() === 'dark'}
      aria-label={t('밝기 모드 전환 (체크 시 어두운 모드)')}
      tabIndex={-1}
      title={t('밝기 모드 전환')}
    >
      <svg
        className={[$.icon, $.moon].join(' ')}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30.457 30.457"
      >
        <path d="M29.693,14.49c-0.469-0.174-1-0.035-1.32,0.353c-1.795,2.189-4.443,3.446-7.27,3.446c-5.183,0-9.396-4.216-9.396-9.397 c0-2.608,1.051-5.036,2.963-6.835c0.366-0.347,0.471-0.885,0.264-1.343c-0.207-0.456-0.682-0.736-1.184-0.684 C5.91,0.791,0,7.311,0,15.194c0,8.402,6.836,15.238,15.238,15.238c8.303,0,14.989-6.506,15.219-14.812 C30.471,15.118,30.164,14.664,29.693,14.49z" />
      </svg>
      <div className={$.container}>
        <div className={$.border}>
          <label className={getTheme() === 'dark' ? $.dark : ''} htmlFor={$.isDark}>
            <input name={$.isDark} type="checkbox" id={$.isDark} checked={getTheme() === 'dark'} readOnly />
          </label>
        </div>
      </div>
      <svg
        className={[$.icon, $.sun].join(' ')}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 457.32 457.32"
      >
        <path d="M228.66,112.692c-63.945,0-115.968,52.022-115.968,115.967c0,63.945,52.023,115.968,115.968,115.968 s115.968-52.023,115.968-115.968C344.628,164.715,292.605,112.692,228.66,112.692z" />
        <path d="M401.429,228.66l42.467-57.07c2.903-3.9,3.734-8.966,2.232-13.59c-1.503-4.624-5.153-8.233-9.794-9.683 l-67.901-21.209l0.811-71.132c0.056-4.862-2.249-9.449-6.182-12.307c-3.934-2.858-9.009-3.633-13.615-2.077l-67.399,22.753 L240.895,6.322C238.082,2.356,233.522,0,228.66,0c-4.862,0-9.422,2.356-12.235,6.322l-41.154,58.024l-67.4-22.753 c-4.607-1.555-9.682-0.781-13.615,2.077c-3.933,2.858-6.238,7.445-6.182,12.307l0.812,71.132l-67.901,21.209 c-4.641,1.45-8.291,5.059-9.793,9.683c-1.503,4.624-0.671,9.689,2.232,13.59l42.467,57.07l-42.467,57.07 c-2.903,3.9-3.734,8.966-2.232,13.59c1.502,4.624,5.153,8.233,9.793,9.683l67.901,21.208l-0.812,71.132 c-0.056,4.862,2.249,9.449,6.182,12.307c3.934,2.857,9.007,3.632,13.615,2.077l67.4-22.753l41.154,58.024 c2.813,3.966,7.373,6.322,12.235,6.322c4.862,0,9.422-2.356,12.235-6.322l41.154-58.024l67.399,22.753 c4.606,1.555,9.681,0.781,13.615-2.077c3.933-2.858,6.238-7.445,6.182-12.306l-0.811-71.133l67.901-21.208 c4.641-1.45,8.291-5.059,9.794-9.683c1.502-4.624,0.671-9.689-2.232-13.59L401.429,228.66z M228.66,374.627 c-80.487,0-145.968-65.481-145.968-145.968S148.173,82.692,228.66,82.692s145.968,65.48,145.968,145.967 S309.147,374.627,228.66,374.627z" />
      </svg>
    </div>
  );
};

BrightnessController.defaultProps = {
  className: '',
};

export default BrightnessController;
