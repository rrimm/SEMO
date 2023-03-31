import React from "react";
import * as S from "./index.styled";

const ReviewListItem = ({ product, content, account, image, openModal }) => {
  const MAX_CONTENT_LENGTH = 100; // 최대 글자수

  const onClick = () => {
    // 클릭시 모달창 열기
    openModal({ product, content, account, image });
  };

  const truncatedContent =
    content.length > MAX_CONTENT_LENGTH ? content.substr(0, MAX_CONTENT_LENGTH) + "..." : content; //100글자 넘으면 ... 으로 표시.
  return (
    <S.Review_list_item onClick={onClick}>
      <S.Review_list_item_detail1>
        <S.Review_list_item_image src={image}></S.Review_list_item_image>
      </S.Review_list_item_detail1>
      <S.Review_list_item_detail2>
        <S.Review_list_item_BuyItem>{product}</S.Review_list_item_BuyItem>
        {/* <S.Review_list_item_ContentTitle>리뷰 제목</S.Review_list_item_ContentTitle> 제목 Data는 필요할거 같아서 냅둠*/}
        <S.Review_list_item_ContentWrite>{truncatedContent}</S.Review_list_item_ContentWrite>
        <S.Review_list_item_ContentID>{account}</S.Review_list_item_ContentID>
      </S.Review_list_item_detail2>
    </S.Review_list_item>
  );
};
export default ReviewListItem;
