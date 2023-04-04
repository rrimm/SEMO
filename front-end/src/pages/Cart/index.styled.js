import styled from '@emotion/styled';
import { Button } from '@mui/material';

const Container = styled.div`
  margin: 5vh 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  width: 70vw;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BoldLine = styled.div`
  background-color: black;
  margin-top: 2vh;
  width: 70vw;
  height: 2px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  font-size: 17px;
  font-weight: bold;
  margin: 50px;
  width: 160px;
  height: 60px;
`;

export { Container, Wrapper, Header, BoldLine, ButtonWrapper, StyledButton };
