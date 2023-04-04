import React from 'react';
import * as S from './index.styled';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <S.Container>
      <S.StyledLink to={'/product'}>Product</S.StyledLink>
      <S.StyledLink to={'/review'}>Review</S.StyledLink>
    </S.Container>
  );
}
export default Nav;
