import React, { useState, useEffect } from "react";
import * as S from "./index.styled";
import ReviewListTitle from "./ReviewTitle";
import ReviewListItem from "./ReviewContent";
import ReviewModal from "./ReviewModal";
import BoardPage from "./ReviewPagenation";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const categories = ["ALL", "HAT", "TOP", "OUTER", "BAG", "PANT", "SHOES", "BASIC"];
const categoryLabels = {
  ALL: "전체",
  HAT: "모자",
  TOP: "상의",
  OUTER: "아우터",
  BAG: "가방",
  PANT: "하의",
  SHOES: "신발",
  BASIC: "기본",
};

function ReviewList(props) {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null); //json 데이터 가져오기 위한 useState
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const onUpdate = (updatedReview) => {
    setReviews(reviews.map(review => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      }
      return review;
    }));
  };

  const onDelete = async (reviewId) => {
    try {
      await axios.delete(`/review/${reviewId}`);

      // 리뷰 목록 다시 불러오기
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = Number(params.get("page")) || 1;
    const category = params.get("category") || "ALL"
    setCurrentPage(page);
    setSelectedCategory(category);

    axios.get(`/review?page=${page}&category=${category}`).then((response) => {
      setReviews(response.data);
    });

  }, [location.search, selectedCategory]);

  const handleCategoryButtonClick =(category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    navigate(`/review?page=1&category=${category}`);
  };

  const filteredContents =
    selectedCategory === "ALL"
      ? reviews
      : reviews.filter((content) => content.category === selectedCategory);

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
      category={content.category}
      product={content.product.name}
      content={content.content}
      account={content.member.email}
      openModal={() => openModal(content)} // 모달 열기
      onUpdate={onUpdate} //업데이트 전달.
      onDelete = {onDelete} //삭제 전달.
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
        {modal && modalContent && <ReviewModal CloseModal={() => setModal(false)} data={modalContent} onDelete = {onDelete} onUpdate={onUpdate} setReviews={setReviews}/>}
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
