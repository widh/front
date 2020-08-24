import React from 'react';
import CommonFooter from '../CommonFooter';

import $ from './style.scss';

interface Props {
  header: string;
  detail?: string;
  suggestion?: string;
  children?: React.ReactElement | React.ReactElement[];
};

const StageBack: React.FC<Props> = (props: Props) => {
  const {
    header, detail, children, suggestion,
  } = props;

  return (
    <div className={$.back}>
      <header className={$.backHeader}>
        <h1 dangerouslySetInnerHTML={{ __html: header }} />
        <h2 dangerouslySetInnerHTML={{ __html: detail }} />
        <span dangerouslySetInnerHTML={{ __html: suggestion }} />
      </header>
      <main className={$.backMain}>{children}</main>
      <CommonFooter useBrightnessModeControl />
    </div>
  );
};

StageBack.defaultProps = {
  detail: undefined,
  suggestion: undefined,
  children: undefined,
};

export default StageBack;
