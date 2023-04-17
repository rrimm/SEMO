import React from 'react';
import * as S from './index.styled';
import { BROWSER_PATH } from '../../../constants/path';

const LinkMenu = ({ category, target }) => {
  return (
    <S.Container>
      <>
        <S.StyledLink to={BROWSER_PATH.BASE}>HOME</S.StyledLink>
        <span>&nbsp;&gt;&nbsp;</span>
      </>
      <>
        <S.StyledLink to={`${BROWSER_PATH.PRODUCT}?target=${target}`}>
          {target}
        </S.StyledLink>
        <span>&nbsp;&gt;&nbsp;</span>
      </>
      <>
        <S.StyledLink to={`${BROWSER_PATH.PRODUCT}?category=${category}`}>
          {category}
        </S.StyledLink>
      </>
    </S.Container>
  );
};

export default LinkMenu;
