import { Global, css } from "@emotion/react";

import { fontStyle } from "./fonts";

const style = css`
  ${fontStyle}

  * {
    font-family: "GmarketSans";
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
