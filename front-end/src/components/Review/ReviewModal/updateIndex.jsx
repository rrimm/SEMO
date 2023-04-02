import React, { useState, useEffect } from "react";
import * as S from "./index.styled";
import axios from "axios";

function ReviewUpdateModal({ CloseModal, data, onUpdate, setReviews }) {
  const [content, setContent] = useState(data.content);

  useEffect(() => {
    //랜더링 될 때, (modal이 켜질 때) 스크롤 방지
    document.body.style.overflow = "hidden"; //body 부분 hidden
    return () => {
      document.body.style.overflow = ""; // 꺼지면 초기화
    };
  }, []);

  const handleUpdateClick = async () => { //수정 로직
    try {
        const response = await axios.put(`/review/${data.id}`, { content });
        onUpdate(response.data);

        window.location.reload();

        CloseModal();
      } catch (error) {
        console.error(error);
      }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <S.Review_Modal onClick={CloseModal}>
    <S.Review_Modal_Body onClick={(e) => e.stopPropagation()}>
      <S.Review_Modal_CloseBtn onClick={CloseModal}>✖</S.Review_Modal_CloseBtn>
      <S.flexContainer>
        <S.Review_Modal_Body_section1>
          <S.Review_Modal_ImagePrd src={data?.image} alt=""></S.Review_Modal_ImagePrd>
        </S.Review_Modal_Body_section1>
        <S.Review_Modal_Body_section2>
          <S.Review_Modal_InfoStarSection>
            <S.Review_Modal_InfoStar_userID>작성자 : {data?.member.email}</S.Review_Modal_InfoStar_userID>
          </S.Review_Modal_InfoStarSection>
          <S.Review_Modal_ContentTextarea
              value={content}
              onChange={handleContentChange}
              placeholder="리뷰를 작성해주세요."
            />
          <S.Review_Modal_ContentSection>
            <S.Review_Modal_BuyItemBox>
              <S.Review_Modal_BuyItemImage src={data?.product.image} alt=""></S.Review_Modal_BuyItemImage>
              <S.Review_Modal_BuyItemName>&nbsp;&nbsp;{data?.product.name}</S.Review_Modal_BuyItemName>
            </S.Review_Modal_BuyItemBox>
            <S.Review_Modal_UpdateButton onClick={handleUpdateClick}>수정</S.Review_Modal_UpdateButton>
          </S.Review_Modal_ContentSection>
        </S.Review_Modal_Body_section2>
      </S.flexContainer>
    </S.Review_Modal_Body>
  </S.Review_Modal>
);
}

export default ReviewUpdateModal;