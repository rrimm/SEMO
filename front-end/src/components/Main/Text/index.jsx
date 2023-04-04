import React from 'react';

import * as S from './index.styled';

function Text() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header> About SEMO </S.Header>
      </S.Wrapper>
      <S.Wrapper>
        <S.Text>
          SEMO는 이 프로젝트를 통해 성장하고자 하는 열정과 도전 정신을
          표현했습니다.
        </S.Text>
        <S.Text>
          프론트엔드 개발에 React를 활용하였고, 백엔드 개발에 spring boot를
          활용하였습니다.
        </S.Text>
        <S.Text>
          형상관리 도구로 Git을 활용함으로써 코드를 효율적으로 관리하고
          협업하였습니다.
        </S.Text>
        <S.Text>
          프로젝트의 유지보수성을 높이고 생산성을 높이기 위해 기본적인 아키텍처
          디자인 설계를 위한 Spring Web Layer를 구현했습니다.
        </S.Text>
        <S.Text>
          개발 시 기본적인 컨벤션 규칙을 준수하였고, 객체지향의 SOLID원칙을
          지키며 비즈니스 로직을 구현하려 노력하였습니다.
        </S.Text>
        <S.SmallText>
          SEMO는 총 7인으로 이루어져 있으며
          <br />
          작업 기간은 23년 3월부터 4월까지 진행하였습니다.
        </S.SmallText>
      </S.Wrapper>
    </S.Container>
  );
}
export default Text;
