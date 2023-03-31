import React from "react";
import SizeButton from "./Button/SizeButton";
import StockButton from "./Button/StockButton";
import DeliveryButton from "./Button/DeliveryButton";
import CartButton from "./Button/CartButton";
import SizeCheck from "./SizeCheck";
import * as S from "./index.styled";

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
        <div>{info}</div>
        <br />
        <S.BottomLine>사이즈 선택</S.BottomLine>
        <S.Text>
          <SizeCheck />
        </S.Text>
      </ul>
      <CartButton productId={id} />
      <br />
      <SizeButton />
      <StockButton stock={stock} />
      <DeliveryButton />
    </div>
  );
};

export default OrderContainer;
