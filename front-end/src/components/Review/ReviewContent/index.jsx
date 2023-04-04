import React from 'react';
import * as S from './index.styled';

const ReviewListItem = ({
  productName,
  content,
  account,
  image,
  openModal,
}) => {
  const MAX_CONTENT_LENGTH = 100;

  const onClick = () => {
    openModal({ productName, content, account, image });
  };

  const truncatedContent =
    content.length > MAX_CONTENT_LENGTH
      ? content.substr(0, MAX_CONTENT_LENGTH) + '...'
      : content;
  return (
    <S.Review_list_item onClick={onClick}>
      <S.Review_list_item_detail1>
        <S.Review_list_item_image src={image}></S.Review_list_item_image>
      </S.Review_list_item_detail1>
      <S.Review_list_item_detail2>
        <S.Review_list_item_BuyItem>{productName}</S.Review_list_item_BuyItem>
        <S.Review_list_item_ContentWrite>
          {truncatedContent}
        </S.Review_list_item_ContentWrite>
        <S.Review_list_item_ContentID>{account}</S.Review_list_item_ContentID>
      </S.Review_list_item_detail2>
    </S.Review_list_item>
  );
};
export default ReviewListItem;
