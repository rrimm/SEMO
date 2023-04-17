import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin-left: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #807675;

  &:hover {
    color: #0f010d;
    font-weight: bold;
  }
`;

export { Container, StyledLink };
