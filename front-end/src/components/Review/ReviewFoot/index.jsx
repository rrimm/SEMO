import React from 'react';
import * as S from './index.styled';
import BoardPage from '../ReviewPageNation';

function ReviewListFooter() {
  return (
    <S.Review_list_footer>
      <S.Review_list_footer_paging>
        <BoardPage maxPage="15" pageLimit="10" />
      </S.Review_list_footer_paging>
    </S.Review_list_footer>
  );
}
export default ReviewListFooter;
