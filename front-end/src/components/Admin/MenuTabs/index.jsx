import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./index.styled";
import { BROWSER_PATH } from "../../../constants/path";
import MemberAdmin from "../MemberAdmin";
import ProductAdmin from "../ProductAdmin";

function MenuTabs() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (path === BROWSER_PATH.ADMIN) {
      navigate("/admin/member", { replace: true });
    }
  }, [path, navigate]);

  let element;
  if (path === "/admin/member") { 
    element = <MemberAdmin />;
  } 
  if (path === "/admin/product") {
    element = <ProductAdmin />;
  }

  return (
    <>
      <S.Container>
        <S.StyledLink to="/admin/member">
          <S.Text>회원 관리</S.Text>
        </S.StyledLink>
        <S.StyledLink to="/admin/product">
          <S.Text>상품 관리</S.Text>
        </S.StyledLink>
      </S.Container>
      {element}
    </>
  );
}

export default MenuTabs;
