import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField } from '@mui/material';

import * as S from './index.styled';

function Search() {
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  const getValue = e => {
    setValue(e.target.value);
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      navigate(`/product?search=${value}`);
      e.target.value = null;
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <TextField
          fullWidth
          id="value"
          label="제품명을 입력하세요."
          variant="standard"
          onChange={getValue}
          onKeyUp={handleOnKeyPress}
        />
      </S.Wrapper>
    </S.Container>
  );
}
export default Search;
