import React from 'react';
import StockButton from './Button/StockButton';
import DeliveryButton from './Button/DeliveryButton';
import CartButton from './Button/CartButton';
import * as S from './index.styled';

const OrderContainer = ({ name, price, id, info, stock }) => {
  const formatPrice = Number(price).toLocaleString();
  return (
    <div>
      <ul>
        <S.List>
          <h4>{name}</h4>
        </S.List>
        <S.List>{formatPrice}원</S.List>
        <br />
        <S.List>
          <div>
            <S.BottomLine>제품 번호 : {id}</S.BottomLine>
          </div>
        </S.List>
        <br />
        <S.Info>{info}</S.Info>
        <br />
        <CartButton productId={id} />
        <S.BottomLine />
      </ul>
      <br />
      <StockButton stock={stock} />
      <DeliveryButton />
    </div>
  );
};

export default OrderContainer;
