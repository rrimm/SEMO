import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as S from './index.styled';

function Page({ children }) {
  return (
    <S.PageContainer>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.PageContainer>
  );
}
export default Page;
