import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Line = styled.div`
  background-color: black;
  width: 70vw;
  height: 1px;
`;

const ProductList = styled.ul`
  display: flex;
  list-style: none;
  margin: 1vh 0;
  padding: 0px;
  width: 70vw;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`;

const Index = styled.li`
  width: 10%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Pic = styled.img`
  width: 150px;
`;

const Name = styled.li`
  font-family: 'GmarketSans';
`;

const Quantity = styled.li`
  width: 10%;
`;

const Price = styled.li`
  width: 20%;
`;

const EachPrice = styled.li`
  width: 20%;
`;

const OrderManagement = styled.li`
  width: 10%;
`;

const Button = styled.span`
  margin: 0 15%;
  cursor: pointer;
`;

export {
  Container,
  ProductList,
  Index,
  Wrapper,
  StyledLink,
  Pic,
  Name,
  Quantity,
  Price,
  EachPrice,
  OrderManagement,
  Line,
  Button,
};
