import React from 'react';

import * as S from './index.styled';
import Card from '../Card';

import Kids from '../../../assets/Card/kids.png';
import Men from '../../../assets/Card/men.png';
import Women from '../../../assets/Card/women.png';

function Cards() {
  return (
    <S.Container>
      <S.Wrapper>
        <Card URL={'/product?target=women'} pic={Women} category={'Women'} />
        <Card URL={'/product?target=men'} pic={Men} category={'Men'} />
        <Card URL={'/product?target=kids'} pic={Kids} category={'Kids'} />
      </S.Wrapper>
    </S.Container>
  );
}
export default Cards;
