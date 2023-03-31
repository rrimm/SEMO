import React from "react";

import "./index.styled.css";
import { Link } from "react-router-dom";

// id : 제품의 고유 번호
// img : 제품의 대표 이미지
// name : 제품의 이름
// price : 제품의 가격
function Card({ product }) {
  const formatPrice = Number(product.price).toLocaleString();
  return (
    <div className="img-container">
      <Link to={`/details/${product.id}`}>
        <img className="image" src={product.image} alt=""></img>
      </Link>
      <div>
        <div className="text-container">
          <p className="text">{product.name}</p>
          <p className="text">{formatPrice}원</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
