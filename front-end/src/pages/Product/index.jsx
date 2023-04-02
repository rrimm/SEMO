import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import Card from "../../components/Product/Card";
import { CategoryNav, TargetNav } from "../../components/FilterNav";
import NotFound from "../../components/Product/NotFound";

import "./index.styled.css";

import { API_PATH } from "../../constants/path";
import Loading from "../../components/Loading";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [params] = useSearchParams();
  const search = params.get("search") ?? undefined;
  const [category, setCategory] = useState("ALL");
  const [target, setTarget] = useState("ALL");

  const getCategoryParam = useCallback(async () => {
    const param = params.get("category");
    if (param !== null) {
      await setCategory(param.toLocaleUpperCase());
    }
  }, [params]);

  const getTargetParam = useCallback(async () => {
    const param = params.get("target");
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
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
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

  const handleCategoryClick = useCallback(async (category) => {
    setCategory(category);
  }, []);

  const handleTargetClick = useCallback(async (target) => {
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
        {search !== undefined && <p>"{search}" 검색한 결과입니다.</p>}
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
    </>
  );
};

export default Product;
