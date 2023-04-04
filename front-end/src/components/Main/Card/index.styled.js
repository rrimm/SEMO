import styled from '@emotion/styled';

const Container = styled.div`
  padding-bottom: 10vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Header = styled.h1`
  position: absolute;
  color: #f8f8f8;
  font-size: 2rem;
  margin-top: 40vh;
  text-shadow: 1px 1px 2px black;
  z-index: 1;
`;

const Pic = styled.img`
  width: 20vw;
  height: 55vh;
  background-color: #f8f8f8;
  border-radius: 7px;
  transition: all 0.5s;
  filter: brightness(0.7);
  &: hover {
    filter: brightness(1);
    transform: scale(1.05);
  }
`;

export { Container, Wrapper, Header, Pic };
