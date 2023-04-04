import React, { useState } from 'react';
import * as S from './index.styled';

function StockButton({ stock }) {
  const [show, setShow] = useState(false);
  const handleMouseOver = () => setShow(true);
  const handleMouseOut = () => setShow(false);

  return (
    <S.Container>
      <S.Button
        className="btn"
        variant="outline-primary"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <S.Text>재고 상태</S.Text>
      </S.Button>
      {show && stock >= 5 && (
        <S.MessageBox>현재 재고는 {stock}개 입니다.</S.MessageBox>
      )}
      {show && stock < 5 && (
        <S.MessageBox>현재 재고는 5개 미만입니다.</S.MessageBox>
      )}
    </S.Container>
  );
}

export default StockButton;
