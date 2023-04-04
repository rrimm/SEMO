import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 20vw;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  color: #0f010d;
  text-decoration: none;
`;

export { Container, StyledLink };
