import React, { useState, useEffect } from "react";
import * as S from "./index.styled";
import ReviewUpdateModal from "./updateIndex";
import { BROWSER_PATH } from "../../../constants/path";

function ReviewModal({ CloseModal, data, onDelete, onUpdate, setReviews }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    //랜더링 될 때, (modal이 켜질 때) 스크롤 방지
    document.body.style.overflow = "hidden"; //body 부분 hidden
    return () => {
      document.body.style.overflow = ""; // 꺼지면 초기화
    };
  }, []);

  const handleDelete = () => {
    //데이터 삭제 기능
    onDelete(data.id);
    CloseModal();
  };

  const handleUpdateClick = () => {
    // 데이터 수정 폼 모달 열기
    setShowUpdateModal(true);
  };

  return (
    <>
      <S.Review_Modal onClick={CloseModal}>
        <S.Review_Modal_Body onClick={(e) => e.stopPropagation()}>
          <S.Review_Modal_CloseBtn onClick={CloseModal}>✖</S.Review_Modal_CloseBtn>
          <S.flexContainer>
            <S.Review_Modal_Body_section1>
              {data.reviewImage ? (
                <S.Review_Modal_ImagePrd src={data?.reviewImage}></S.Review_Modal_ImagePrd>
              ) : (
                <S.Review_Modal_ImagePrd src={data?.productImage}></S.Review_Modal_ImagePrd>
              )}
            </S.Review_Modal_Body_section1>
            <S.Review_Modal_Body_section2>
              <S.Review_Modal_InfoStarSection>
                <S.Review_Modal_InfoStar_userID>작성자 : {data?.memberEmail}</S.Review_Modal_InfoStar_userID>
              </S.Review_Modal_InfoStarSection>
              <S.Review_Modal_ContentSection>
                <S.Review_Modal_Content>{data?.content}</S.Review_Modal_Content>
                <S.Review_Modal_BuyItemBox to={`${BROWSER_PATH.DETAILS}/${data.productId}`}>
                  <S.Review_Modal_BuyItemImage src={data?.productImage} alt=""></S.Review_Modal_BuyItemImage>
                  <S.Review_Modal_BuyItemName>&nbsp;&nbsp;{data?.productName}</S.Review_Modal_BuyItemName>
                </S.Review_Modal_BuyItemBox>
                <S.Review_Modal_ButtonSection>
                <S.Review_Modal_Button onClick={handleDelete}>삭제</S.Review_Modal_Button>
                &nbsp;&nbsp;
                <S.Review_Modal_Button onClick={handleUpdateClick}>수정</S.Review_Modal_Button>
                </S.Review_Modal_ButtonSection>
              </S.Review_Modal_ContentSection>
            </S.Review_Modal_Body_section2>
          </S.flexContainer>
        </S.Review_Modal_Body>
      </S.Review_Modal>
      {showUpdateModal && (
        <ReviewUpdateModal
          CloseModal={() => setShowUpdateModal(false)}
          data={data}
          onUpdate={onUpdate}
          onDelete={onDelete}
          setReviews={setReviews}
        />
      )}
    </>
  );
}

export default ReviewModal;
