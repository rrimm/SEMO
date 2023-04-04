import React from 'react';
import { useNavigate } from 'react-router-dom';

import { House, RotateLeft } from '../../components/svg/index';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as S from './index.styled';

import Image from '../../assets/NotFound/pic.png';

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <S.Container>
        <S.Spin src={Image} alt="Not Found" />
      </S.Container>
      <S.Container>
        <S.Text>This is not the web page you are looking for</S.Text>
      </S.Container>
      <S.ButtonContainer>
        <Stack direction="row" spacing={2}>
          <Button variant="text" onClick={goBack} startIcon={<RotateLeft />}>
            <S.ButtonText>Back</S.ButtonText>
          </Button>
          <Button variant="text" href="/" startIcon={<House />}>
            <S.ButtonText>Home</S.ButtonText>
          </Button>
        </Stack>
      </S.ButtonContainer>
    </div>
  );
}
export default NotFound;
