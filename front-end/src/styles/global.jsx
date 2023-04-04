import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { fontStyle } from './fonts';

const style = css`
  ${emotionReset}
  ${fontStyle}

  * {
    font-family: 'GmarketSans';
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
