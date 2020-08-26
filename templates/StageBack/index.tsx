import React from 'react';
import FunctionalFooter from 'sectional/FunctionalFooter';

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
        {detail && (<h2 dangerouslySetInnerHTML={{ __html: detail }} />)}
        {suggestion && (<span dangerouslySetInnerHTML={{ __html: suggestion }} />)}
      </header>
      <main className={$.backMain}>{children}</main>
      <FunctionalFooter useBrightnessModeControl />
    </div>
  );
};

StageBack.defaultProps = {
  detail: undefined,
  suggestion: undefined,
  children: undefined,
};

export default StageBack;
