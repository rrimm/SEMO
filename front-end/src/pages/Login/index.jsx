import { useEffect } from "react";
import "./index.styled.css";
import LoginForm from "./LoginForm";

function Login() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="centered-container">
      <LoginForm />
    </div>
  );
}
export default Login;
