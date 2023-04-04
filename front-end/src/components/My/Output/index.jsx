import React from 'react';

import * as S from './index.styled';

function Output({ directive, value }) {
  return (
    <S.Container>
      <S.TextSection>
        <S.ThinText>{directive}</S.ThinText>
        <S.Text>{value}</S.Text>
      </S.TextSection>
    </S.Container>
  );
}
export default Output;
