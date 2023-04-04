import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
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

export { Container, StyledLink };
