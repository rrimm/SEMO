import React, { useState, useEffect } from "react";
import * as S from "./index.styled";
import ReviewListTitle from "./ReviewTitle";
import ReviewListItem from "./ReviewContent";
import ReviewModal from "./ReviewModal";
import BoardPage from "./ReviewPagenation";
import reviewData from "../../assets/Review/reviewData.json";
import { useNavigate, useLocation } from "react-router-dom";
import { CATEGORY } from "../../constants/category";

const categories = ["all", "hat", "top", "outer", "bag", "pant", "shoes", "basic"];
const categoryLabels = {
  all: "전체",
  hat: "모자",
  top: "상의",
  outer: "아우터",
  bag: "가방",
  pant: "하의",
  shoes: "신발",
  basic: "기본",
};

function ReviewList(props) {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null); //json 데이터 가져오기 위한 useState
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = Number(params.get("page")) || 1;
    const category = params.get("category") || CATEGORY.ALL;
    setCurrentPage(page);
    setSelectedCategory(category);
  }, [location.search]);

  const handleCategoryButtonClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    navigate(`/review?page=1&category=${category}`);
  };

  const filteredContents =
    selectedCategory === CATEGORY.ALL
      ? reviewData.reviews
      : reviewData.reviews.filter((content) => content.product_type === selectedCategory);

  const contentsPerPage = 10; // 페이지당 보여줄 컨텐츠 개수

  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;
  const currentContents = filteredContents.slice(indexOfFirstContent, indexOfLastContent);

  const openModal = (content) => {
    setModalContent(content);
    setModal(true);
  };

  const reviewItems = currentContents.map((content) => (
    <ReviewListItem
      key={content.id}
      image={content.image}
      product={content.product}
      content={content.content}
      account={content.account}
      openModal={() => openModal(content)} // 모달 열기
    />
  ));

  return (
    <S.Container>
      <S.Review_list>
        <ReviewListTitle />
        <S.CategoryButtonContainer>
          {categories.map((category) => (
            <S.CategoryButton
              key={category}
              active={selectedCategory === category}
              onClick={() => handleCategoryButtonClick(category)}
            >
              {categoryLabels[category]}
            </S.CategoryButton>
          ))}
          {/* <ReviewSearch/> */}
        </S.CategoryButtonContainer>
        {modal && modalContent && <ReviewModal CloseModal={() => setModal(false)} data={modalContent} />}
        {reviewItems.length > 0 ? (
          reviewItems
        ) : (
          <S.Review_NotFound>"죄송합니다. 입력하신 카테고리에 맞는 리뷰를 찾을 수 없습니다."</S.Review_NotFound>
        )}
        <BoardPage
          totalContents={filteredContents.length}
          contentsPerPage={contentsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </S.Review_list>
    </S.Container>
  );
}

export default ReviewList;
