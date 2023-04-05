import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20vw;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #0f010d;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.4rem;
  &: hover {
    transform: scale(1.1);
  }
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  color: #0f010d;
  text-decoration: none;
  font-size: 1.4rem;
  transition: all 0.3s;
  cursor: pointer;
  margin: 0;
  &: hover {
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  background-color: #e5cdce;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  opacity: 0.66;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, Wrapper, StyledLink, Text };
