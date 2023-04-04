import React from 'react';
import * as S from './index.styled';

function ReviewListType() {
  return (
    // 사용안함
    <S.Review_list_type>
      <S.Review_list_type_all href="#"> 전체 리뷰 </S.Review_list_type_all>
      <S.DivideLine>|</S.DivideLine>
      <S.Review_list_type_photo href="#"> 포토 리뷰 </S.Review_list_type_photo>
    </S.Review_list_type>
  );
}
export default ReviewListType;
