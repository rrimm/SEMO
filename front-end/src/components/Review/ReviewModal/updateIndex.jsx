import React, { useState, useEffect } from 'react';
import * as S from './index.styled';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { jwtToken } from '../../../stores/auth';
import { API_PATH } from '../../../constants/path';
import { DIRECTIVE } from '../../../constants/message';

function ReviewUpdateModal({ CloseModal, data, onUpdate, setReviews }) {
  const token = useRecoilValue(jwtToken);
  const [content, setContent] = useState(data.content);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleUpdateClick = async () => {
    try {
      const response = await axios.put(
        API_PATH.REVIEW.AUTH,
        {
          id: data.id,
          content: content,
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        },
      );
      onUpdate(response.data);
      window.location.reload();
      CloseModal();
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.data.message);
      }
      console.error(error);
    }
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  return (
    <S.Review_Modal onClick={CloseModal}>
      <S.Review_Modal_Body onClick={e => e.stopPropagation()}>
        <S.Review_Modal_CloseBtn onClick={CloseModal}>
          ✖
        </S.Review_Modal_CloseBtn>
        <S.flexContainer>
          <S.Review_Modal_Body_section1>
            {data.reviewImage ? (
              <S.Review_Modal_ImagePrd
                src={data?.reviewImage}
              ></S.Review_Modal_ImagePrd>
            ) : (
              <S.Review_Modal_ImagePrd
                src={data?.productImage}
              ></S.Review_Modal_ImagePrd>
            )}
          </S.Review_Modal_Body_section1>
          <S.Review_Modal_Body_section2>
            <S.Review_Modal_InfoStarSection>
              <S.Review_Modal_InfoStar_userID>
                작성자 : {data?.memberEmail}
              </S.Review_Modal_InfoStar_userID>
            </S.Review_Modal_InfoStarSection>
            <S.Review_Modal_ContentTextarea
              value={content}
              onChange={handleContentChange}
              placeholder={DIRECTIVE.REVIEW.CONTENT}
            />
            <S.Review_Modal_ContentSection>
              <S.Review_Modal_BuyItemBox>
                <S.Review_Modal_BuyItemImage
                  src={data?.productImage}
                  alt=""
                ></S.Review_Modal_BuyItemImage>
                <S.Review_Modal_BuyItemName>
                  &nbsp;&nbsp;{data?.productName}
                </S.Review_Modal_BuyItemName>
              </S.Review_Modal_BuyItemBox>
              <S.Review_Modal_ButtonSection>
                <S.Review_Modal_Button onClick={handleUpdateClick}>
                  수정
                </S.Review_Modal_Button>
              </S.Review_Modal_ButtonSection>
            </S.Review_Modal_ContentSection>
          </S.Review_Modal_Body_section2>
        </S.flexContainer>
      </S.Review_Modal_Body>
    </S.Review_Modal>
  );
}

export default ReviewUpdateModal;
