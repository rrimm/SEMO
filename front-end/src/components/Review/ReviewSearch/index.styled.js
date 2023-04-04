import styled from '@emotion/styled';

const Review_list_search = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 5%;
  justify-content: right;
  align-items: center;
  // border-top : 1px solid #807675;
`;

const Review_list_searchInput = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

const Review_list_searchIcon = styled.span`
  margin-right: 30px;
  cursor: pointer;
`;

export { Review_list_search, Review_list_searchInput, Review_list_searchIcon };
