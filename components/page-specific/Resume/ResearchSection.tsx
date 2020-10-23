import React from 'react';
import { useI18n } from 'hooks/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

interface Props {
  className?: string;
};

const Section: React.FC<Props> = (props: Props) => {
  const { className } = props;
  const { t } = useI18n(dict);

  const classes = [$.section];
  if (className) classes.push(className);

  return (
    <section className={classes.join(' ')}>

    </section>
  );
};

Section.defaultProps = {
  className: null,
};

export default Section;
