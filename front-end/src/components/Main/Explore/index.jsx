import React from 'react';

import * as S from './index.styled';

import Github from '../../../assets/Explore/github.png';
import People from '../../../assets/Explore/dev.jpg';

function Explore() {
  return (
    <S.Container>
      <S.Header>Explore SEMO</S.Header>
      <S.Wrapper>
        <S.StyledA
          href={'https://github.com/MultiProject23/SEMO'}
          target={'_blank'}
          rel="noreferrer"
        >
          <S.Text>Github</S.Text>
          <S.Pic src={Github}></S.Pic>
        </S.StyledA>
        <S.StyledLink to={'/people'} target={'_blank'}>
          <S.Text>구성원</S.Text>
          <S.Pic src={People}></S.Pic>
        </S.StyledLink>
      </S.Wrapper>
    </S.Container>
  );
}
export default Explore;
