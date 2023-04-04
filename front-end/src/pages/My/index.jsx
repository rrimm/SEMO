import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Profile from '../../components/My/Profile';
import Orders from '../../components/My/Orders';
import Loading from '../../components/Loading/index';

import * as S from './index.styled';

import { API_PATH, BROWSER_PATH } from '../../constants/path';
import { useRecoilValue } from 'recoil';
import { jwtToken } from '../../stores/auth';
import { useNavigate } from 'react-router-dom';

function My() {
  const navigate = useNavigate();
  const token = useRecoilValue(jwtToken);
  const [member, setMember] = useState({});
  const [option, setOption] = useState(0);
  const [loading, setLoading] = useState(false);

  const findMemberRequest = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`${API_PATH.MY.BASE}`, {
        params: {
          memberId: token.memberId,
        },
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then(response => {
        setMember(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        navigate(BROWSER_PATH.LOGIN);
      });
  }, [token, navigate]);

  useEffect(() => {
    findMemberRequest();
  }, [findMemberRequest, token]);

  const changeOption = number => {
    setOption(number);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      {option === 0 && (
        <S.Section>
          <S.NavWrapper>
            <S.SelectHeader>주문 / 배송</S.SelectHeader>
            <S.Header onClick={() => changeOption(1)}>회원 정보</S.Header>
            {/* <S.Header onClick={() => changeOption(2)}>주소정보</S.Header> */}
          </S.NavWrapper>
          <Orders />
        </S.Section>
      )}
      {option === 1 && (
        <S.Section>
          <S.NavWrapper>
            <S.Header onClick={() => changeOption(0)}>주문 / 배송</S.Header>
            <S.SelectHeader>회원 정보</S.SelectHeader>
            {/* <S.Header onClick={() => changeOption(2)}>주소정보</S.Header> */}
          </S.NavWrapper>
          <Profile
            name={member.name}
            email={member.email}
            phoneNumber={member.phoneNumber}
          />
        </S.Section>
      )}
      {/* {option === 2 && (
        <S.Section>
          <S.NavWrapper>
            <S.Header onClick={() => changeOption(0)}>회원정보</S.Header>
            <S.Header onClick={() => changeOption(1)}>주문/배송</S.Header>
            <S.SelectHeader>주소정보</S.SelectHeader>
          </S.NavWrapper>
          <Address />
        </S.Section>
      )} */}
    </S.Container>
  );
}

export default My;
