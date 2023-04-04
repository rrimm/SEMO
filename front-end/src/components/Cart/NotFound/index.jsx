import React from 'react';

import * as S from './index.styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BROWSER_PATH } from '../../../constants/path';

function NotFound() {
  const navigate = useNavigate();

  const goProduct = () => {
    navigate(BROWSER_PATH.PRODUCT);
  };

  return (
    <S.Container>
      <S.Header>장바구니가 비어있습니다.</S.Header>
      <S.Icon>🛒</S.Icon>
      <Button
        variant={'contained'}
        color={'inherit'}
        size={'large'}
        onClick={goProduct}
      >
        쇼핑 하러가기
      </Button>
    </S.Container>
  );
}
export default NotFound;
