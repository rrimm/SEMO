import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import Card from "../../components/Product/Card";
import { CategoryNav, TargetNav } from "../../components/FilterNav";
import NotFound from "../../components/Product/NotFound";

import "./index.styled.css";

import { API_PATH } from "../../constants/path";
import Loading from "../../components/Loading";

// 제품의 고유 번호, 대표 이미지, 태그1, 태그2, 제품 이름, 가격

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(undefined);
  const [category, setCategory] = useState("ALL");
  const [target, setTarget] = useState("ALL");

  const getProductRequest = useCallback(async () => {
    await axios
      .get(API_PATH.PRODUCT.BASE, {
        params: {
          search: search,
        },
      })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);

  const getSearchParam = useCallback(async () => {
    const param = params.get("search");
    if (param !== null) {
      setSearch(param);
    }
  }, [params]);

  const getCategoryParam = useCallback(async () => {
    const param = params.get("category").toLocaleUpperCase();
    if (param !== null) {
      setCategory(param);
    }
  }, [params]);

  const getTargetParam = useCallback(async () => {
    const param = params.get("target").toLocaleUpperCase();
    if (param !== null) {
      setTarget(param);
    }
  }, [params]);

  useEffect(() => {
    setLoading(true);
    getSearchParam();
    getTargetParam();
    getCategoryParam();
    getProductRequest();
    setLoading(false);
  }, [getProductRequest, getSearchParam, getTargetParam, getCategoryParam]);

  const handleCategoryClick = useCallback((category) => {
    setCategory(category);
  }, []);

  const handleTargetClick = useCallback((target) => {
    setTarget(target);
  }, []);

  const filteredData = category === "ALL" ? product : product.filter((product) => product.category === category);

  const CompleteFilteredData =
    target === "ALL" ? filteredData : filteredData.filter((product) => product.target === target);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="Container">
        <div className="TextBox">
          <h1>Products</h1>
        </div>
        <div className="NavBar">
          <div className="Toggle">
            <TargetNav selectedTarget={target} onClick={handleTargetClick} />
            <CategoryNav selectedCategory={category} onClick={handleCategoryClick} />
          </div>
          <div className="Count">
            <p className="Text">{CompleteFilteredData.length} 상품</p>
          </div>
        </div>
        <div className="Wrapper">
          {CompleteFilteredData.length === 0 ? (
            <NotFound />
          ) : (
            CompleteFilteredData.map((product) => {
              return <Card key={product.id} product={product} />;
            })
          )}
        </div>
      </div>
      <></>
    </>
  );
};

export default Product;
