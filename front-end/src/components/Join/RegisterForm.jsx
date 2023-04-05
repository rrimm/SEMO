import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Email from './Email';
import Pw from './Pw';
import PwCheck from './PwCheck';
import Name from './Name';
import Birth from './Birth';
import Phone from './Phone';

import { API_PATH, BROWSER_PATH } from '../../constants/path';
import { CLIENT_ERROR_MESSAGE } from '../../constants/message';

import {
  EMAIL_REGEX,
  PHONE_NUMBER_REGEX,
  BIRTHDAY_REGEX,
  PW_REGEX,
} from '../../utils/validate';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
    pwCheck: '',
    name: '',
    birth: '',
    phone: '',
  });

  const navigate = useNavigate();

  const [pwError, setPwError] = useState('');
  const [pwCheckError, setPwCheckError] = useState('');
  const [birthError, setBirthError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!PW_REGEX.test(formData.pw)) {
      setPwError(CLIENT_ERROR_MESSAGE.INVALID_PASSWORD.FORMAT);
      return;
    }

    if (formData.pw !== formData.pwCheck) {
      setPwCheckError(CLIENT_ERROR_MESSAGE.INVALID_PASSWORD.CONFIRM);
      return;
    }

    if (!BIRTHDAY_REGEX.test(formData.birth)) {
      setBirthError(CLIENT_ERROR_MESSAGE.INVALID_BIRTH);
      return;
    }

    if (!EMAIL_REGEX.test(formData.email)) {
      setEmailError(CLIENT_ERROR_MESSAGE.INVALID_EMAIL.BASE);
      return;
    }

    if (!PHONE_NUMBER_REGEX.test(formData.phone)) {
      alert(CLIENT_ERROR_MESSAGE.INVALID_PHONE_NUMBER.BASE);
      return;
    }

    await axios
      .post(API_PATH.AUTH.JOIN, {
        email: formData.email,
        password: formData.pw,
        name: formData.name,
        birth: formData.birth,
        phone: formData.phone,
      })
      .then(() => {
        navigate(BROWSER_PATH.LOGIN, { replace: true });
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <from className="join-form" onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <Email handleChange={handleChange} value={formData.email} />
      <p>{emailError}</p>
      <Pw handleChange={handleChange} value={formData.pw} />
      <p>{pwError}</p>
      <PwCheck handleChange={handleChange} value={formData.pwCheck} />
      <p>{pwCheckError}</p>
      <Name handleChange={handleChange} value={formData.name} />
      <Birth handleChange={handleChange} value={formData.birth} />
      <p>{birthError}</p>
      <Phone handleChange={handleChange} value={formData.phone} />
      <button type="submit" className="register" onSubmit={handleSubmit}>
        가입하기
      </button>
    </from>
  );
};

export default RegisterForm;
