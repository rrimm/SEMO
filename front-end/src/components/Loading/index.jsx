import React from 'react';

import LoadingAnimation from './Animation';
import * as S from './index.styled';

function Loading() {
  return (
    <S.Container>
      <S.Wrapper>
        <LoadingAnimation />
      </S.Wrapper>
      <S.Wrapper>
        <S.Text>New content is being imported.</S.Text>
      </S.Wrapper>
    </S.Container>
  );
}
export default Loading;
