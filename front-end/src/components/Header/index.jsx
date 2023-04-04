import React from 'react';
import * as S from './index.styled';
import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';
import User from './User';

function Header() {
  return (
    <>
      <S.Container>
        <Logo />
        <Nav />
        <Search />
        <User />
      </S.Container>
    </>
  );
}

export default Header;
