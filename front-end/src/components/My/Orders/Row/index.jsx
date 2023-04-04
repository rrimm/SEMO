import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { API_PATH, BROWSER_PATH } from '../../../../constants/path';
import { jwtToken } from '../../../../stores/auth';

import * as S from './index.styled';

function Row({ order }) {
  const navigate = useNavigate();
  const formatPrice = Number(order.price).toLocaleString();
  const totalFormatPrice = Number(
    order.quantity * order.price,
  ).toLocaleString();
  const token = useRecoilValue(jwtToken);

  const orderCancelRequest = async () => {
    await axios
      .put(
        API_PATH.MY.ORDER,
        {
          orderId: order.orderId,
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        },
      )
      .then(() => {
        alert('주문이 취소되었습니다.');
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const addReview = () => {
    navigate(`${BROWSER_PATH.REVIEW_FORM}?orderId=${order.orderId}`);
  };

  return (
    <>
      <S.ProductList>
        <S.OrderInfo>
          {order.orderDate}/{order.orderId}
        </S.OrderInfo>
        <S.OrderSummary>
          <S.ProdLink
            to={`${BROWSER_PATH.DETAILS}/${order.productId}`}
            target={'_blank'}
          >
            {order.productName}
          </S.ProdLink>
          /{order.quantity}개
        </S.OrderSummary>
        <S.OrderPrice>{formatPrice}원</S.OrderPrice>
        <S.OrderPrice>{totalFormatPrice}원</S.OrderPrice>
        <S.OrderStatus>{order.status}</S.OrderStatus>
        {order.status === '결제' && (
          <>
            <S.ButtonArea>
              <Button variant={'outlined'} onClick={addReview}>
                리뷰 작성
              </Button>
            </S.ButtonArea>
            <S.ButtonArea>
              <Button
                variant={'outlined'}
                color={'warning'}
                onClick={orderCancelRequest}
              >
                결제 취소
              </Button>
            </S.ButtonArea>
          </>
        )}
        {order.status === '주문확정' && (
          <S.StatusArea>
            <p>리뷰 작성 완료</p>
          </S.StatusArea>
        )}
      </S.ProductList>
      <S.Line />
    </>
  );
}

function NavRow() {
  return (
    <>
      <S.ProductList>
        <S.OrderInfo>주문일/주문 번호</S.OrderInfo>
        <S.OrderSummary>상품 정보/구매 개수</S.OrderSummary>
        <S.OrderPrice>제품 가격</S.OrderPrice>
        <S.OrderPrice>결제 금액</S.OrderPrice>
        <S.OrderStatus>주문 상태</S.OrderStatus>
        <S.ButtonArea></S.ButtonArea>
      </S.ProductList>
      <S.Line />
    </>
  );
}
export { Row, NavRow };
