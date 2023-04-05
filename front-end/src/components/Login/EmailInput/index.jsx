import React from 'react';

import * as S from './index.styled';

function EmailInput({ value, onChange }) {
  return (
    <S.Container>
      <S.Label>Email</S.Label>
      <S.Input
        type="text"
        id="inputEmail"
        value={value}
        onChange={onChange}
        placeholder="이메일"
        required
      />
    </S.Container>
  );
}

export default EmailInput;
