import React from "react";

import * as S from "./index.styled";

function NotFound() {
  return (
    <S.Container>
      <S.Header>장바구니가 비어있습니다.</S.Header>
      <S.Icon>🛒</S.Icon>
    </S.Container>
  );
}
export default NotFound;
