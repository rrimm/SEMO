import React from 'react';
import { PasswordForm } from './ChangeForm';
import Output from '../Output';

import * as S from './index.styled';

function Profile({ name, email, phoneNumber }) {
  return (
    <S.Container>
      <S.Header>회원정보 변경</S.Header>
      <S.Line />
      <S.Wrapper>
        <S.Section>
          <Output directive={'이름'} value={name} />
          <Output directive={'이메일'} value={email} />
          <Output directive={'전화번호'} value={phoneNumber} />
        </S.Section>
        <S.Section>
          <S.NavWrapper>
            <S.NavSelectHeader>비밀번호 변경</S.NavSelectHeader>
          </S.NavWrapper>
          <PasswordForm />
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
}
export default Profile;
