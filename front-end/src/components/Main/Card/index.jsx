import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './index.styled';

function Card({ URL, pic, category }) {
  return (
    <S.Container>
      <Link to={URL}>
        <S.Wrapper>
          <S.Header>For {category}</S.Header>
          <S.Pic src={pic} />
        </S.Wrapper>
      </Link>
    </S.Container>
  );
}

export default Card;
