import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import NotFound from '../../../components/My/NotFound';
import { API_PATH } from '../../../constants/path';
import { jwtToken } from '../../../stores/auth';
import Loading from '../../Loading';

import * as S from './index.styled';
import { Row, NavRow } from './Row';

function Orders() {
  const token = useRecoilValue(jwtToken);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getOrdersRequest = async () => {
      setLoading(true);
      await axios
        .get(API_PATH.MY.ORDER, {
          params: {
            memberId: token.memberId,
          },
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        })
        .then(response => {
          setOrder(response.data);
          setLoading(false);
        });
    };

    getOrdersRequest();
  }, [token]);

  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.Header>주문 / 배송</S.Header>
      <S.BoldLine />
      <NavRow />
      {order.length === 0 ? (
        <NotFound />
      ) : (
        order.map(order => {
          return <Row key={order.orderId} order={order} />;
        })
      )}
    </S.Container>
  );
}
export default Orders;
