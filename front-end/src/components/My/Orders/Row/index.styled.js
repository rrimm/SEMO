import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Line = styled.div`
  background-color: black;
  width: 60vw;
  height: 1px;
`;
const ProductList = styled.ul`
  display: flex;
  list-style: none;
  margin: 1.5vh 0;
  padding: 0px;
  width: 60vw;
  text-align: center;
  align-items: center;
`;

const OrderInfo = styled.li`
  width: 20%;
`;

const OrderSummary = styled.li`
  width: 20%;
`;

const OrderPrice = styled.li`
  width: 15%;
`;

const OrderStatus = styled.li`
  width: 10%;
`;

const ProdLink = styled(Link)`
  color: black;
`;

const ButtonArea = styled.li`
  width: 10%;
`;

const StatusArea = styled.li`
  width: 20%;
`;

export {
  Container,
  Line,
  ProductList,
  OrderInfo,
  OrderSummary,
  ProdLink,
  OrderPrice,
  OrderStatus,
  ButtonArea,
  StatusArea,
};
