import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Product/Card';
import { CategoryNav, TargetNav } from '../../components/Product/FilterNav';
import NotFound from '../../components/Product/NotFound';

import * as S from './index.styled';

import { API_PATH } from '../../constants/path';
import Loading from '../../components/Loading';

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [params] = useSearchParams();
  const search = params.get('search') ?? undefined;
  const [category, setCategory] = useState('ALL');
  const [target, setTarget] = useState('ALL');

  const getCategoryParam = useCallback(async () => {
    const param = params.get('category');
    if (param !== null) {
      await setCategory(param.toLocaleUpperCase());
    }
  }, [params]);

  const getTargetParam = useCallback(async () => {
    const param = params.get('target');
    if (param !== null) {
      await setTarget(param.toLocaleUpperCase());
    }
  }, [params]);

  const getProductRequest = useCallback(async () => {
    setLoading(true);
    await axios
      .get(API_PATH.PRODUCT.BASE, {
        params: {
          search: search,
        },
      })
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, [search]);

  useEffect(() => {
    getCategoryParam();
  }, [getCategoryParam, params]);

  useEffect(() => {
    getTargetParam();
  }, [getTargetParam, params]);

  useEffect(() => {
    getProductRequest();
  }, [getProductRequest]);

  const handleCategoryClick = useCallback(async category => {
    setCategory(category);
  }, []);

  const handleTargetClick = useCallback(async target => {
    setTarget(target);
  }, []);

  const filteredData =
    category === 'ALL'
      ? product
      : product.filter(product => product.category === category);

  const CompleteFilteredData =
    target === 'ALL'
      ? filteredData
      : filteredData.filter(product => product.target === target);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <S.Container>
        <S.TextBox>
          <h1>🛍 Products</h1>
        </S.TextBox>
        <S.NavBar>
          <S.Toggle>
            <TargetNav selectedTarget={target} onClick={handleTargetClick} />
            <CategoryNav
              selectedCategory={category}
              onClick={handleCategoryClick}
            />
          </S.Toggle>
          <S.Count>
            <S.Text>{CompleteFilteredData.length} 상품</S.Text>
          </S.Count>
        </S.NavBar>
        {search !== undefined && <p>"{search}" 검색한 결과입니다.</p>}
        <S.Wrapper>
          {CompleteFilteredData.length === 0 ? (
            <NotFound />
          ) : (
            CompleteFilteredData.map(product => {
              return <Card key={product.id} product={product} />;
            })
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Product;
