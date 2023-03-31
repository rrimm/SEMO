import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { NavRow, Row } from "../../components/Cart/Row";
import NotFound from "../../components/Cart/NotFound";
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

  if (loading) {
    return <h1>로딩중</h1>;
  }

  return (
    <S.Container>
      <h3>장바구니</h3>
      <S.BoldLine />
      <NavRow />
      {data.length === 0 ? (
        <NotFound />
      ) : (
        data.map((cart) => {
          return <Row key={cart.cartId} cart={cart} />;
        })
      )}
    </S.Container>
  );
}
export default Cart;
