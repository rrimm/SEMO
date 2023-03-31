import { Global, css } from "@emotion/react";

import { fontStyle } from "./fonts";

const style = css`
  ${fontStyle}

  body {
    font-family: "MICEGothic_Bold";
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
