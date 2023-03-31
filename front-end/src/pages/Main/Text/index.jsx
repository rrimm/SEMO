import React from "react";

import * as S from "./index.styled";

function Text() {
  return (
    <S.Container>
      <S.Header> About 4Team </S.Header>
      <S.Wrapper>
        <S.Text>
          이곳은 $(4팀)이 React로 의류 쇼핑몰을 구현한 사이트입니다.
          <br />
          작업 기간은 23년 3월부터 4월까지 진행하였습니다.
        </S.Text>
        <S.SmallText>$(4팀)은 총 7인으로 이루어져 있습니다.</S.SmallText>
      </S.Wrapper>
    </S.Container>
  );
}
export default Text;
