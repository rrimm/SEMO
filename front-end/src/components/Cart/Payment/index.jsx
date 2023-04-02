import React, { useCallback, useEffect, useState } from "react";

import * as S from "./index.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEquals } from "@fortawesome/free-solid-svg-icons";

function Payment({ data }) {
  const [price, setPrice] = useState(0);

  const getPrice = useCallback(async () => {
    data.map((product) => {
      if (product.checked) {
        return setPrice((price) => price + product.productPrice * product.quantity);
      }
      return setPrice((price) => price);
    });
  }, [data]);

  useEffect(() => {
    getPrice();
  }, [getPrice, data]);

  return (
    <S.Container>
      <S.Text>
        결제 금액 &nbsp;
        <S.Price>{price}</S.Price> 원 &nbsp;
        <FontAwesomeIcon icon={faPlus} />
        &nbsp; 총 배송비 &nbsp;
        <S.Price>3000</S.Price> 원 &nbsp;
        <FontAwesomeIcon icon={faEquals} />
        &nbsp; 총 주문 금액 &nbsp;
        <S.Price>{price + 3000}</S.Price> 원
      </S.Text>
    </S.Container>
  );
}
export default Payment;
