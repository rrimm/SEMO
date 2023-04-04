import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background-color: #0f010d;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  width: 100%;
  margin: 20px 0px;
`;

const CloseButton = styled.button`
  background-color: #807675;
  color: white;
  font-size: 20px;
  padding: 15px;
  border-style: none;
  margin: 10px 30px;
`;

const ToCartButton = styled.button`
  background-color: #807675;
  color: white;
  font-size: 20px;
  padding: 15px;
  border-style: none;
  margin: 10px 35px 10px 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MessageContainer = styled.div`
  color: #0f010d;
  height: 100px;
  font-size: 20px;
  text-align: center;
  padding: 40px 0;
`;

export {
  Button,
  CloseButton,
  ToCartButton,
  MessageContainer,
  ButtonContainer,
  StyledLink,
};
