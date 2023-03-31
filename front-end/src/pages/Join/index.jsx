import RegisterForm from "./RegisterForm";
import "./index.styled.css";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLogin, jwtToken } from "../../stores/auth";
import { BROWSER_PATH } from "../../constants/path";
import { useEffect } from "react";

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
    <div className="center-container">
      <RegisterForm />
    </div>
  );
}

export default Join;
