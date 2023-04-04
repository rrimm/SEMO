import React from 'react';

import * as S from './index.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEquals } from '@fortawesome/free-solid-svg-icons';

function Payment({ price, courierFee }) {
  const courierPrice = 3000;
  const formatPrice = Number(price).toLocaleString();
  let totalFormatPrice = price;

  if (courierFee) {
    totalFormatPrice = Number(price + courierPrice).toLocaleString();
  } else {
    totalFormatPrice = Number(price).toLocaleString();
  }

  if (price === 0) {
    return (
      <S.Container>
        <S.Text>
          결제 금액 &nbsp;
          <S.Price>0</S.Price> 원 &nbsp;
          <FontAwesomeIcon icon={faPlus} />
          &nbsp; 총 배송비 &nbsp;
          <S.Price>0</S.Price>
          &nbsp;원 &nbsp;
          <FontAwesomeIcon icon={faEquals} />
          &nbsp; 총 주문 금액 &nbsp;
          <S.Price>0</S.Price> 원
        </S.Text>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Text>
        결제 금액 &nbsp;
        <S.Price>{formatPrice}</S.Price> 원 &nbsp;
        <FontAwesomeIcon icon={faPlus} />
        &nbsp; 총 배송비 &nbsp;
        {courierFee ? <S.Price>3,000</S.Price> : <S.Price>0</S.Price>}
        &nbsp;원 &nbsp;
        <FontAwesomeIcon icon={faEquals} />
        &nbsp; 총 주문 금액 &nbsp;
        <S.Price>{totalFormatPrice}</S.Price> 원
      </S.Text>
    </S.Container>
  );
}
export default Payment;
