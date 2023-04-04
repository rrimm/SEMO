import React from 'react';

import * as S from './index.styled';

function TextButton({ category }) {
  return (
    <S.Container>
      <S.Text>{category}</S.Text>
    </S.Container>
  );
}
export default TextButton;
