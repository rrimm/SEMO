import React from 'react';

import * as S from './index.styled';

function PwInput({ value, onChange }) {
  return (
    <S.Container>
      <S.Label>Password</S.Label>
      <S.Input
        type="password"
        id="inputPw"
        value={value}
        onChange={onChange}
        placeholder="비밀번호"
        required
      />
    </S.Container>
  );
}

export default PwInput;
