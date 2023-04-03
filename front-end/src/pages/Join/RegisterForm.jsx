import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Email from "./Email";
import Pw from "./Pw";
import PwCheck from "./PwCheck";
import Name from "./Name";
import Birth from "./Birth";
import Phone from "./Phone";

import { API_PATH, BROWSER_PATH } from "../../constants/path";
import { EMAIL_REGEX, PHONE_NUMBER_REGEX, BIRTHDAY_REGEX, PW_REGEX } from "../../utils/validate";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
    pwCheck: "",
    name: "",
    birth: "",
    phone: "",
  });

  const navigate = useNavigate();

  const [pwError, setPwError] = useState("");
  const [pwCheckError, setPwCheckError] = useState("");
  const [birthError, setBirthError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!PW_REGEX.test(formData.pw)) {
      setPwError("비밀번호를 숫자 + 영문자 조합으로 8자리~16자리 입력해주세요!");
      return;
    }

    if (formData.pw !== formData.pwCheck) {
      setPwCheckError("비밀번호가 일치하지 않습니다!");
      return;
    }

    if (!BIRTHDAY_REGEX.test(formData.birth)) {
      setBirthError("생년월일 형식이 올바르지 않습니다!");
      return;
    }

    if (!EMAIL_REGEX.test(formData.email)) {
      setEmailError("이메일 형식이 올바르지 않습니다!");
      return;
    }

    if (!PHONE_NUMBER_REGEX.test(formData.phone)) {
      alert("전화번호 형식이 올바르지 않습니다!");
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="join-form" onSubmit={handleSubmit}>
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
    </form>
  );
};

export default RegisterForm;
