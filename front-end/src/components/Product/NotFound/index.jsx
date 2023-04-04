import React from 'react';

import * as S from './index.styled';

function NotFound() {
  return (
    <S.Container>
      <S.Text>
        죄송합니다. 입력하신 검색어에 맞는 상품을 찾을 수 없습니다.
      </S.Text>
    </S.Container>
  );
}
export default NotFound;
