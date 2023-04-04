import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { NavRow, Row } from '../../components/Cart/Row';
import NotFound from '../../components/Cart/NotFound';
import Payment from '../../components/Cart/Payment';
import * as S from './index.styled';

import { jwtToken } from '../../stores/auth';
import { API_PATH, BROWSER_PATH } from '../../constants/path';

function Cart() {
  const navigate = useNavigate();
  const token = useRecoilValue(jwtToken);
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`${API_PATH.CART.BASE}`, {
        params: {
          memberId: token.memberId,
        },
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        navigate(BROWSER_PATH.LOGIN);
        console.error(error);
      });
  }, [token, navigate]);

  const paymentRequest = async () => {
    const filterCarts = await data.carts
      .filter(cart => cart.checked)
      .map(cart => ({
        cartId: cart.cartId,
        memberId: token.memberId,
        productId: cart.productId,
        quantity: cart.quantity,
      }));
    console.log(JSON.stringify(filterCarts));
    await axios
      .post(API_PATH.MY.ORDER, JSON.stringify(filterCarts), {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        navigate(BROWSER_PATH.MY);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, [getData]);

  const goProduct = () => {
    navigate(BROWSER_PATH.PRODUCT);
  };

  if (loading) {
    return <h1>로딩중</h1>;
  }

  return (
    <S.Container>
      <S.Header>🛒 장바구니</S.Header>
      <S.Wrapper>
        <S.BoldLine />
        <NavRow />
        {data.size === 0 ? (
          <NotFound />
        ) : (
          data.carts.map(cart => {
            return <Row key={cart.cartId} cart={cart} />;
          })
        )}
        {data.size !== 0 && (
          <>
            <Payment
              price={data.price}
              courierFee={data.courierFee}
              empty={data.empty}
            />
            <S.ButtonWrapper>
              <S.StyledButton
                variant={'contained'}
                color={'inherit'}
                onClick={goProduct}
              >
                계속 쇼핑하기
              </S.StyledButton>
              <S.StyledButton
                variant={'contained'}
                color={'success'}
                onClick={paymentRequest}
              >
                구매하기
              </S.StyledButton>
            </S.ButtonWrapper>
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
export default Cart;
