import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { API_PATH } from '../../../constants/path';
import { jwtToken } from '../../../stores/auth';
import Loading from '../../Loading';
import Output from '../Output';
import Form from './ChangeForm';

import * as S from './index.styled';

function Address() {
  const token = useRecoilValue(jwtToken);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({});

  useEffect(() => {
    const getAddressRequest = async () => {
      setLoading(true);
      await axios
        .get(API_PATH.MY.ADDRESS, {
          params: {
            memberId: token.memberId,
          },
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        })
        .then(response => {
          setAddress(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
        });
    };

    getAddressRequest();
  }, [token]);

  if (loading) {
    return <Loading />;
  }

  // console.log(address);

  return (
    <S.Container>
      <h3>주소정보 변경</h3>
      <S.Line />
      <S.Wrapper>
        <S.Section>
          <Output directive={'수취인'} value={address[0].recipient} />
          <Output directive={'우편번호'} value={address[0].zipCode} />
          <Output directive={'주소'} value={address[0].info} />
        </S.Section>
        <S.Section>
          <Form
            nowAddress={address[0].info}
            nowRecipient={address[0].recipient}
            nowZipCode={address[0].zipCode}
          />
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
}
export default Address;
