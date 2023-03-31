import React from "react";
import * as S from "./index.styled";

  function SizeGuide() {
    return (
      <S.TableOption>
        <thead>
        <tr>
          <S.StyledTh>사이즈</S.StyledTh>
          <S.StyledTh>수치</S.StyledTh>
          <S.StyledTh>가슴둘레</S.StyledTh>
        </tr>
        </thead>
        <tbody>
        <tr>
          <S.StyledTd>XS</S.StyledTd>
          <S.StyledTd>80</S.StyledTd>
          <S.StyledTd>80</S.StyledTd>
          
        </tr>
        <tr>
          <S.StyledTd>S</S.StyledTd>
          <S.StyledTd>85</S.StyledTd>
          <S.StyledTd>85</S.StyledTd>
        </tr>
        <tr>
          <S.StyledTd>M</S.StyledTd>
          <S.StyledTd>90</S.StyledTd>
          <S.StyledTd>90</S.StyledTd>
        </tr>
        <tr>
          <S.StyledTd>L</S.StyledTd>
          <S.StyledTd>95</S.StyledTd>
          <S.StyledTd>95</S.StyledTd>
        </tr>
        </tbody>
      </S.TableOption>
    )}

export default SizeGuide;