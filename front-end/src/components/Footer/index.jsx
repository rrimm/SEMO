import React from 'react';
import { useRecoilValue } from 'recoil';

import { isLogin } from '../../stores/auth';
import { BROWSER_PATH } from '../../constants/path';
import { TARGET } from '../../constants/category';

import * as S from './index.styled';

function Footer() {
  const hasLogin = useRecoilValue(isLogin);

  return (
    <S.Container>
      <S.Content>
        <S.ShopHeader>SEMO</S.ShopHeader>
        <S.Text>COPYRIGHT (C) Project ALL RIGHTS RESERVED.</S.Text>
      </S.Content>
      <S.Content>
        <S.Header>Product</S.Header>
        <S.Text>
          <S.StyledLink to={`${BROWSER_PATH.PRODUCT}?target=${TARGET.WOMEN}`}>
            For Women
          </S.StyledLink>
        </S.Text>
        <S.Text>
          <S.StyledLink to={`${BROWSER_PATH.PRODUCT}?target=${TARGET.MEN}`}>
            For Men
          </S.StyledLink>
        </S.Text>
        <S.Text>
          <S.StyledLink to={`${BROWSER_PATH.PRODUCT}?target=${TARGET.KIDS}`}>
            For Kids
          </S.StyledLink>
        </S.Text>
      </S.Content>
      <S.Content>
        <S.Header>Company</S.Header>
        {hasLogin ? (
          <>
            <S.Text>
              <S.StyledLink to={BROWSER_PATH.CART}>Cart</S.StyledLink>
            </S.Text>
            <S.Text>
              <S.StyledLink to={BROWSER_PATH.MY}>MyPage</S.StyledLink>
            </S.Text>
          </>
        ) : (
          <>
            <S.Text>
              <S.StyledLink to={BROWSER_PATH.LOGIN}>Login</S.StyledLink>
            </S.Text>
            <S.Text>
              <S.StyledLink to={BROWSER_PATH.JOIN}>Join</S.StyledLink>
            </S.Text>
          </>
        )}
      </S.Content>
      <S.Content>
        <S.Header>SUPPORT & CONTACT</S.Header>
        <S.Text>FAQs</S.Text>
        <S.Text>Size Guide</S.Text>
        <S.Text>02-1234-5678</S.Text>
        <S.Text>help@project.com</S.Text>
      </S.Content>
    </S.Container>
  );
}
export default Footer;
