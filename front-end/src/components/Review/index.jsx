import React, { useState, useEffect } from 'react';
import * as S from './index.styled';
import ReviewListTitle from './ReviewTitle';
import ReviewListItem from './ReviewContent';
import ReviewModal from './ReviewModal';
import BoardPage from './ReviewPage';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { jwtToken } from '../../stores/auth';
import { API_PATH, BROWSER_PATH } from '../../constants/path';

const categories = [
  'ALL',
  'HAT',
  'TOP',
  'OUTER',
  'BAG',
  'PANT',
  'SHOES',
  'BASIC',
];
const categoryLabels = {
  ALL: '전체',
  HAT: '모자',
  TOP: '상의',
  OUTER: '아우터',
  BAG: '가방',
  PANT: '하의',
  SHOES: '신발',
  BASIC: '기본',
};

function ReviewList(props) {
  const token = useRecoilValue(jwtToken);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null); //json 데이터 가져오기 위한 useState
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const onUpdate = updatedReview => {
    setReviews(
      reviews.map(review => {
        if (review.id === updatedReview.id) {
          return updatedReview;
        }
        return review;
      }),
    );
  };

  const onDelete = async reviewId => {
    try {
      await axios.delete(API_PATH.REVIEW.AUTH, {
        params: {
          reviewId: reviewId,
        },
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = Number(params.get('page')) || 1;
    const category = params.get('category') || 'ALL';
    setCurrentPage(page);
    setSelectedCategory(category);

    axios
      .get(`${API_PATH.REVIEW.BASE}?page=${page}&category=${category}`)
      .then(response => {
        setReviews(response.data);
      });
  }, [location.search, selectedCategory]);

  const handleCategoryButtonClick = category => {
    setSelectedCategory(category);
    setCurrentPage(1);
    navigate(`${BROWSER_PATH.REVIEW}?page=1&category=${category}`);
  };

  const filteredContents =
    selectedCategory === 'ALL'
      ? reviews
      : reviews.filter(content => content.productCategory === selectedCategory);

  const contentsPerPage = 10; // 페이지당 보여줄 컨텐츠 개수

  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;
  const currentContents = filteredContents.slice(
    indexOfFirstContent,
    indexOfLastContent,
  );

  const openModal = content => {
    setModalContent(content);
    setModal(true);
  };

  const reviewItems = currentContents.map(review => {
    const maskedName =
      review.memberName.substring(0, 1) +
      '*'.repeat(review.memberName.length - 2) +
      review.memberName.substring(review.memberName.length - 1);
    return (
      <ReviewListItem
        key={review.id}
        image={review.productImage}
        category={review.productCategory}
        productName={review.productName}
        content={review.content}
        account={maskedName}
        openModal={() => openModal(review)}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    );
  });

  return (
    <S.Container>
      <S.Review_list>
        <ReviewListTitle />
        <S.CategoryButtonContainer>
          {categories.map(category => (
            <S.CategoryButton
              key={category}
              active={selectedCategory === category}
              onClick={() => handleCategoryButtonClick(category)}
            >
              {categoryLabels[category]}
            </S.CategoryButton>
          ))}
        </S.CategoryButtonContainer>
        {modal && modalContent && (
          <ReviewModal
            CloseModal={() => setModal(false)}
            data={modalContent}
            onDelete={onDelete}
            onUpdate={onUpdate}
            setReviews={setReviews}
          />
        )}
        {reviewItems.length > 0 ? (
          reviewItems
        ) : (
          <S.Review_NotFound>
            "죄송합니다. 입력하신 카테고리에 맞는 리뷰를 찾을 수 없습니다."
          </S.Review_NotFound>
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
