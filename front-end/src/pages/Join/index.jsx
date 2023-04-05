import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import RegisterForm from '../../components/Join/RegisterForm';

import { isLogin, jwtToken } from '../../stores/auth';
import { BROWSER_PATH } from '../../constants/path';

import './index.styled.css';
import * as S from './index.styled';

function Join() {
  const auth = useRecoilValue(isLogin);
  const token = useRecoilValue(jwtToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth || token) {
      navigate(BROWSER_PATH.BASE);
    }
  }, [auth, token, navigate]);

  return (
    <S.Container>
      <RegisterForm />
    </S.Container>
  );
}

export default Join;
