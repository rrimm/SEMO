import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { fontStyle } from './fonts';

const style = css`
  ${emotionReset}
  ${fontStyle}

  * {
    font-family: 'GmarketSans';
  }

  h1 {
    font-size: 2.3rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.1rem;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
