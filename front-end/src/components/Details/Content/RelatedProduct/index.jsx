import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import * as S from './index.styled';
import { API_PATH, BROWSER_PATH } from '../../../../constants/path';
import { useParams } from 'react-router-dom';

function RelatedProduct() {
  const [data, setData] = useState([]);
  const param = useParams();

  const relatedProductsRequest = useCallback(async () => {
    await axios
      .get(`${API_PATH.PRODUCT.RELATED}/${param.id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [param]);

  useEffect(() => {
    relatedProductsRequest();
  }, [relatedProductsRequest]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisible] = useState(3);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - numVisible);
    }
  };

  const handleNextClick = () => {
    if (currentIndex + numVisible < data.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const visibleData = data.slice(currentIndex, currentIndex + numVisible);

  return (
    <S.Container>
      <S.Button onClick={handlePrevClick}>
        <BsChevronLeft />
      </S.Button>
      {data &&
        visibleData.map(product => (
          <S.ImageContainer key={product.id}>
            <S.StyledLink to={`${BROWSER_PATH.DETAILS}/${product.id}`}>
              <S.Image src={product.image} alt="carousel-thumbnail" />
              <S.Text>
                {product.name}
                <br />
                {Number(product.price).toLocaleString()}원
              </S.Text>
            </S.StyledLink>
          </S.ImageContainer>
        ))}
      <S.Button onClick={handleNextClick}>
        <BsChevronRight />
      </S.Button>
    </S.Container>
  );
}

export default RelatedProduct;
