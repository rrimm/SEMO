import React from 'react';
import * as S from './index.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function ReviewSearch() {
  return (
    <S.Review_list_search>
      <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />
      <S.Review_list_searchInput type="text" placeholder="search" />
      <S.Review_list_searchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </S.Review_list_searchIcon>
    </S.Review_list_search>
  );
}
export default ReviewSearch;
