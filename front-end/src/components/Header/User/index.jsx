import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './index.styled';

import { API_PATH, BROWSER_PATH } from '../../../constants/path';
import { useRecoilValue } from 'recoil';
import { isLogin, jwtToken } from '../../../stores/auth';

function User() {
  const hasLogin = useRecoilValue(isLogin);
  const token = useRecoilValue(jwtToken);
  const [data, setData] = useState('');

  const cartQuantityRequest = useCallback(async () => {
    await axios
      .get(`${API_PATH.CART.QUANTITY}`, {
        params: {
          memberId: token.memberId,
        },
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        if (error.response.status === 401) {
          localStorage.clear();
          return;
        }
        console.error(error);
      });
  }, [token]);

  const logoutRequest = async () => {
    await axios
      .post(API_PATH.AUTH.LOGOUT, {
        token: token.refreshToken,
      })
      .then(() => {
        localStorage.clear();
        window.location.reload();
        alert('로그아웃 되었습니다!');
      })
      .error(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    cartQuantityRequest();
  }, [cartQuantityRequest]);

  if (hasLogin) {
    return (
      <S.Container>
        <S.StyledLink to={BROWSER_PATH.CART}>
          Cart
          <S.Wrapper>
            <span>{data.quantity}</span>
          </S.Wrapper>
        </S.StyledLink>
        <S.StyledLink to={BROWSER_PATH.MY}>MyPage</S.StyledLink>
        <S.Text onClick={logoutRequest}>Logout</S.Text>
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.StyledLink to={BROWSER_PATH.LOGIN}>Login</S.StyledLink>
      <S.StyledLink to={BROWSER_PATH.JOIN}>Join</S.StyledLink>
    </S.Container>
  );
}
export default User;
