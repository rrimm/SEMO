import React, { useState, useEffect, useCallback } from "react";
import * as S from "./index.styled";
import axios from "axios";
import { API_PATH } from "../../../constants/path";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";


function ProductAdmin({ id, image, target, category, name, price }) {
  const [data, setData] = useState([]);
  const param = useParams();

const readRequest = useCallback(async () => {
  await axios
    .get(`${API_PATH.ADMIN.PRODUCT}`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}, [param]);

useEffect(() => {
  readRequest();
}, [readRequest]);

const [actionMode, setActionMode] = useState(0);
const handleUpdateForm = (e) => {
  if (actionMode === 0) {
    setActionMode(1);
  } else {
    setActionMode(0);
  }
};

if(actionMode===0){
  return (
  <div>
  <S.Text>상품 추가</S.Text>
<S.ProductContainer>
  <S.ProductTable>
<thead>
<tr>
<S.StyledTh>ID</S.StyledTh>
    <S.StyledTh>이미지</S.StyledTh>
    <S.StyledTh>분류</S.StyledTh>
    <S.StyledTh>카테고리</S.StyledTh>
    <S.StyledTh>상품명</S.StyledTh>
    <S.StyledTh>가격</S.StyledTh>
    <S.StyledTh></S.StyledTh>
</tr>
</thead>
<tbody>
<tr>
<S.ProductTd><input type="text"/></S.ProductTd>
<S.ProductTd><input type="file"/></S.ProductTd>
<S.ProductTd><input type="text"/></S.ProductTd>
<S.ProductTd><input type="text"/></S.ProductTd>
<S.ProductTd><input type="text"/></S.ProductTd>
<S.ProductTd><input type="text"/></S.ProductTd>
<S.ProductTd><S.Button>추가</S.Button></S.ProductTd>
</tr>
</tbody>
</S.ProductTable>
</S.ProductContainer>

<S.Text>상품 리스트</S.Text>
    <S.ProductlistContainer>
      <S.ProductlistTable>
        <thead>
        <tr>
          <S.StyledTh>ID</S.StyledTh>
          <S.StyledTh>이미지</S.StyledTh>
          <S.StyledTh>분류</S.StyledTh>
          <S.StyledTh>카테고리</S.StyledTh>
          <S.StyledTh>상품명</S.StyledTh>
          <S.StyledTh>가격</S.StyledTh>
          <S.StyledTh>상품 관리</S.StyledTh>
        </tr>
        </thead>
        <tbody>
        {data.map((product) => (
              <tr key={product.id}>
                <S.ProductlistTd>{product.id}</S.ProductlistTd>
                <S.ProductlistTd><S.Image src={product.image} alt=""></S.Image></S.ProductlistTd>
                <S.ProductlistTd>{product.target}</S.ProductlistTd>
                <S.ProductlistTd>{product.category}</S.ProductlistTd>
                <S.ProductlistTd>{product.name}</S.ProductlistTd>
                <S.ProductlistTd>{product.price}</S.ProductlistTd>
                <S.ProductlistTd>
                  <input type="checkbox"/>
                </S.ProductlistTd>
              </tr>
            ))}
        <tr>
        <td colSpan={6}>
        </td>
        <S.Footer><S.ChangeButton onClick={handleUpdateForm}>수정</S.ChangeButton>
        <S.Button >삭제</S.Button>
        </S.Footer>
        </tr>
        </tbody>
      </S.ProductlistTable>
    </S.ProductlistContainer>
</div>)
} 

if(actionMode===1){
  return(
  <div>
  <S.Text>상품 정보 수정</S.Text>
<S.ProductContainer>
  <S.ProductTable>
<thead>
<tr>
<S.StyledTh>ID</S.StyledTh>
    <S.StyledTh>이미지</S.StyledTh>
    <S.StyledTh>분류</S.StyledTh>
    <S.StyledTh>카테고리</S.StyledTh>
    <S.StyledTh>상품명</S.StyledTh>
    <S.StyledTh>가격</S.StyledTh>
    <S.StyledTh></S.StyledTh>
</tr>
</thead>
<tbody>
<tr>
<S.ProductTd><input type="text"/></S.ProductTd>
<S.ProductTd><input type="file"/></S.ProductTd>
<S.ProductTd><input type="text"/></S.ProductTd>
<S.ProductTd><input type="text"/></S.ProductTd>
<S.ProductTd><input type="text"/></S.ProductTd>
<S.ProductTd><input type="text"/></S.ProductTd>
<S.ProductTd><S.Button >수정</S.Button></S.ProductTd>
</tr>
</tbody>
</S.ProductTable>
</S.ProductContainer>

<S.Text>상품 리스트</S.Text>
    <S.ProductlistContainer>
      <S.ProductlistTable>
        <thead>
        <tr>
          <S.StyledTh>ID</S.StyledTh>
          <S.StyledTh>이미지</S.StyledTh>
          <S.StyledTh>분류</S.StyledTh>
          <S.StyledTh>카테고리</S.StyledTh>
          <S.StyledTh>상품명</S.StyledTh>
          <S.StyledTh>가격</S.StyledTh>
          <S.StyledTh>상품 관리</S.StyledTh>
        </tr>
        </thead>
        <tbody>
        {data.map((data, index) => (
              <tr key={index}>
                <S.ProductlistTd>{data.id}</S.ProductlistTd>
                <S.ProductlistTd>{data.image}</S.ProductlistTd>
                <S.ProductlistTd>{data.target}</S.ProductlistTd>
                <S.ProductlistTd>{data.category}</S.ProductlistTd>
                <S.ProductlistTd>{data.name}</S.ProductlistTd>
                <S.ProductlistTd>{data.price}</S.ProductlistTd>
                <S.ProductlistTd>
                  <input type="checkbox"/>
                </S.ProductlistTd>
              </tr>
            ))}
        <tr>
        <td colSpan={6}>
        </td>
        <S.Footer>
          <S.ChangeButton onClick={handleUpdateForm}>수정</S.ChangeButton>
        <S.Button >삭제</S.Button></S.Footer>
        </tr>
        </tbody>
      </S.ProductlistTable>
    </S.ProductlistContainer>
</div>
  );
}
}
  
export default ProductAdmin;