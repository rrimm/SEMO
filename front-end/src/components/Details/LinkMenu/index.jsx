import React from "react";
import * as S from "./index.styled";

const LinkMenu = ({ category, target }) => {
  return (
    <S.Container>
      <>
        <S.StyledLink to={"/"}>HOME</S.StyledLink>
        <span>&nbsp;&gt;&nbsp;</span>
      </>
      <>
        <S.StyledLink to={`/product?target=${target}`}>{target}</S.StyledLink>
        <span>&nbsp;&gt;&nbsp;</span>
      </>
      <>
        <S.StyledLink to={`/product?category=${category}`}>{category}</S.StyledLink>
      </>
    </S.Container>
  );
};

export default LinkMenu;
