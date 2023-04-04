import React, { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import * as S from './index.styled';

import { jwtToken } from '../../../stores/auth';
import { API_PATH, BROWSER_PATH } from '../../../constants/path';
import { MEMBER_RULE } from '../../../constants/rule';
import { CLIENT_ERROR_MESSAGE } from '../../../constants/message';

function NavRow() {
  return (
    <S.Container>
      <S.ProductList>
        <S.Index>제품선택</S.Index>
        <S.Wrapper>제품명</S.Wrapper>
        <S.Quantity>수량</S.Quantity>
        <S.Price>판매가</S.Price>
        <S.EachPrice>금액 합계</S.EachPrice>
        <S.OrderManagement>주문관리</S.OrderManagement>
      </S.ProductList>
      <S.Line />
    </S.Container>
  );
}

function Row({ cart }) {
  const [checked, setChecked] = useState(cart.checked);
  const token = useRecoilValue(jwtToken);

  const formatPrice = Number(cart.productPrice).toLocaleString();
  const formatTotalPrice = Number(
    cart.productPrice * cart.quantity,
  ).toLocaleString();

  const plusQuantity = async () => {
    if (cart.quantity === MEMBER_RULE.CART.MAX_QUANTITY) {
      alert(CLIENT_ERROR_MESSAGE.INVALID_CART.QUANTITY.MAX);
      return;
    }
    updateQuantityRequest(cart.quantity + 1);
  };

  const minusQuantity = async () => {
    if (cart.quantity === MEMBER_RULE.CART.MIN_QUANTITY) {
      alert(CLIENT_ERROR_MESSAGE.INVALID_CART.QUANTITY.MIN);
      return;
    }
    updateQuantityRequest(cart.quantity - 1);
  };

  const updateQuantityRequest = useCallback(
    async quantity => {
      await axios
        .put(
          `${API_PATH.CART.QUANTITY}`,
          {
            id: cart.cartId,
            quantity: quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          },
        )
        .then(() => {
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    [cart, token],
  );

  const updateCheckedRequest = async () => {
    await axios
      .put(
        `${API_PATH.CART.CHECK}`,
        {
          id: cart.cartId,
          checked: checked,
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        },
      )
      .then(() => {
        setChecked(!checked);
        window.location.reload();
      });
  };

  const removeRequest = async cart_id => {
    await axios
      .delete(`${API_PATH.CART.BASE}`, {
        params: {
          cartId: cart_id,
          memberId: token.memberId,
        },
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <S.Container>
      <S.ProductList>
        <S.Index>
          <Checkbox
            checked={checked}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            onClick={updateCheckedRequest}
          />
        </S.Index>
        <S.Wrapper>
          <S.StyledLink to={`${BROWSER_PATH.DETAILS}/${cart.productId}`}>
            <S.Pic src={cart.productImage} alt=""></S.Pic>
            <S.Name>{cart.productName}</S.Name>
          </S.StyledLink>
        </S.Wrapper>
        <S.Quantity>
          <S.Button onClick={() => minusQuantity()}>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </S.Button>
          {cart.quantity}
          <S.Button onClick={() => plusQuantity()}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </S.Button>
        </S.Quantity>
        <S.Price>{formatPrice}</S.Price>
        <S.EachPrice>{formatTotalPrice}</S.EachPrice>
        <S.OrderManagement>
          <Button
            variant="outlined"
            color="error"
            onClick={() => removeRequest(cart.cartId)}
          >
            삭제하기
          </Button>
        </S.OrderManagement>
      </S.ProductList>
      <S.Line />
    </S.Container>
  );
}

export { NavRow, Row };
