import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 50px;
  border: none;
  cursor: pointer;
`;

const Text = styled.p`
  text-align: right;
  color: black;
  text-decoration-line: none;
`;

const Image = styled.img`
  width: 250px;
  height: 300px;
`;

const ImageContainer = styled.div`
  margin: 0 30px;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration-line: none;
`;

export { Button, Text, Image, ImageContainer, StyledLink, Container };
