import React, { useEffect } from "react";
import * as S from "./index.styled";

function ReviewModal({ CloseModal, data }) {
  useEffect(() => {
    //랜더링 될 때, (modal이 켜질 때) 스크롤 방지
    document.body.style.overflow = "hidden"; //body 부분 hidden
    return () => {
      document.body.style.overflow = ""; // 꺼지면 초기화
    };
  }, []);

  // 이미지
  // 유저의 이름
  // 내용
  // 제품의 사진
  // 제품의 이름
  // 제품의 고유 번호

  return (
    <S.Review_Modal onClick={CloseModal}>
      <S.Review_Modal_Body onClick={(e) => e.stopPropagation()}>
        <S.Review_Modal_CloseBtn onClick={CloseModal}>✖</S.Review_Modal_CloseBtn>
        <S.flexContainer>
          <S.Review_Modal_Body_section1>
            <S.Review_Modal_ImagePrd src={data?.image}></S.Review_Modal_ImagePrd>
          </S.Review_Modal_Body_section1>
          <S.Review_Modal_Body_section2>
            <S.Review_Modal_InfoStarSection>
              <S.Review_Modal_InfoStar_userID>{data?.account}</S.Review_Modal_InfoStar_userID>
            </S.Review_Modal_InfoStarSection>
            <S.Review_Modal_ContentSection>
              <S.Review_Modal_Content>{data?.content}</S.Review_Modal_Content>
              <S.Review_Modal_BuyItemBox>
                <S.Review_Modal_BuyItemImage src={data?.image}></S.Review_Modal_BuyItemImage>
                <S.Review_Modal_BuyItemName>&nbsp;&nbsp;{data?.product}</S.Review_Modal_BuyItemName>
              </S.Review_Modal_BuyItemBox>
            </S.Review_Modal_ContentSection>
          </S.Review_Modal_Body_section2>
        </S.flexContainer>
      </S.Review_Modal_Body>
    </S.Review_Modal>
  );
}

export default ReviewModal;
