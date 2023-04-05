import React from 'react';

import { Link } from 'react-router-dom';
import { BROWSER_PATH } from '../../../constants/path';
import * as S from './index.styled';

function Card({ product }) {
  const formatPrice = Number(product.price).toLocaleString();
  return (
    <S.Container>
      <Link to={`${BROWSER_PATH.DETAILS}/${product.id}`}>
        <S.Image src={product.image} alt=""></S.Image>
      </Link>
      <div>
        <S.Wrapper>
          <S.Text>{product.name}</S.Text>
          <S.Text>{formatPrice}원</S.Text>
        </S.Wrapper>
      </div>
    </S.Container>
  );
}
export default Card;
