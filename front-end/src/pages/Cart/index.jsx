import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { NavRow, Row } from "../../components/Cart/Row";
import NotFound from "../../components/Cart/NotFound";
import Payment from "../../components/Cart/Payment";
import * as S from "./index.styled";

import { jwtToken } from "../../stores/auth";
import { API_PATH, BROWSER_PATH } from "../../constants/path";

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
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        navigate(BROWSER_PATH.LOGIN);
        console.error(error);
      });
  }, [token, navigate]);

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
        {data.length === 0 ? (
          <NotFound />
        ) : (
          data.map((cart) => {
            return <Row key={cart.cartId} cart={cart} />;
          })
        )}
        {data.length !== 0 && (
          <>
            {/* TODO: 서버측에서 총 결제금액을 받아오고 배송비의 추가 유무를 확인하는 API 구현 */}
            <Payment data={data} />
            <S.ButtonWrapper>
              <S.StyledButton variant={"contained"} color={"inherit"} onClick={goProduct}>
                계속 쇼핑하기
              </S.StyledButton>
              {/* TODO: 선택된 제품만 결제하는 API 구현 */}
              <S.StyledButton variant={"contained"} color={"success"}>
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
