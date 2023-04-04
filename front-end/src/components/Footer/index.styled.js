import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 250px;

  background-color: #f8f8f8;

  z-index: 999;
`;

const Content = styled.div`
  float: left;
  width: 22.5%;
  height: 250px;
  padding-top: 3vh;
  padding-left: 2.4%;
`;

const ShopHeader = styled.h1`
  font-size: 2.3rem;
`;

const Header = styled.h2`
  font-size: 1.8rem;
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 1.3rem;
  color: #0f010d;
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  text-decoration: none;
  color: #0f010d;
  opacity: 0.5;
  &: hover {
    opacity: 1;
  }
`;

export { Container, Content, ShopHeader, Header, Text, StyledLink };
