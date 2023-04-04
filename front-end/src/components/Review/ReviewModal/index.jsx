import React, { useState, useEffect } from 'react';
import * as S from './index.styled';
import ReviewUpdateModal from './updateIndex';
import { BROWSER_PATH } from '../../../constants/path';
import { useRecoilValue } from 'recoil';
import { jwtToken } from '../../../stores/auth';

function ReviewModal({ CloseModal, data, onDelete, onUpdate, setReviews }) {
  const token = useRecoilValue(jwtToken);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const maskedName =
    data.memberName.substring(0, 1) +
    '*'.repeat(data.memberName.length - 2) +
    data.memberName.substring(data.memberName.length - 1);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleDelete = () => {
    onDelete(data.id);
    CloseModal();
  };

  const handleUpdateClick = () => {
    setShowUpdateModal(true);
  };

  return (
    <>
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
                  작성자 : {maskedName}
                </S.Review_Modal_InfoStar_userID>
              </S.Review_Modal_InfoStarSection>
              <S.Review_Modal_ContentSection>
                <S.Review_Modal_Content>{data?.content}</S.Review_Modal_Content>
                <S.Review_Modal_BuyItemBox
                  to={`${BROWSER_PATH.DETAILS}/${data.productId}`}
                >
                  <S.Review_Modal_BuyItemImage
                    src={data?.productImage}
                    alt=""
                  ></S.Review_Modal_BuyItemImage>
                  <S.Review_Modal_BuyItemName>
                    &nbsp;&nbsp;{data?.productName}
                  </S.Review_Modal_BuyItemName>
                </S.Review_Modal_BuyItemBox>
                {token && data.memberId === token.memberId && (
                  <S.Review_Modal_ButtonSection>
                    <S.Review_Modal_Button onClick={handleDelete}>
                      삭제
                    </S.Review_Modal_Button>
                    &nbsp;&nbsp;
                    <S.Review_Modal_Button onClick={handleUpdateClick}>
                      수정
                    </S.Review_Modal_Button>
                  </S.Review_Modal_ButtonSection>
                )}
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
