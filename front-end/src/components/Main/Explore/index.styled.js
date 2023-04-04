import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20vh 0;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 5vh;
`;

const StyledA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  filter: brightness(0.8);
  transition: all 0.5s;

  &: hover {
    filter: brightness(1);
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  filter: brightness(0.8);
  transition: all 0.5s;

  &: hover {
    filter: brightness(1);
    transform: scale(1.1);
  }
`;

const Header = styled.h2`
  font-size: 1.8rem;
`;

const Pic = styled.img`
  position: relative;
  width: 20vw;
  height: 40vh;
  margin: 0 2vw;

  border-radius: 10px;
`;

const Text = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 5vw;
  height: 4vh;
  border-radius: 3px;
  background-color: #f8f8f8;

  margin-top: 30vh;
  color: black;
  z-index: 1;
`;

export { Container, Wrapper, StyledA, StyledLink, Header, Pic, Text };
