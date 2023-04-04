import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 2000px;
  background-color: white;
`;

const Review_list = styled.div`
  background-color: white;
  width: 60%;
  display: flex;
  flex-direction: column;
`;
const CategoryButtonContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4%;
  width: 60%;
`;
const CategoryButton = styled.button`
  background-color: ${({ active }) => (active ? '#edf4fb' : 'white')};
  color: ${({ active }) => (active ? '#1976d2' : '#807675')};
  border: 1px solid #ddd;
  border-radius: 1px;
  padding: 8px 12px;
  font-size: 11px;
  font-size: border;
  cursor: pointer;
  width: 15%;
  height: 55%;
  &:hover {
    background-color: ${({ active }) => (active ? '#edf4fb' : '#f5f5f5')};
  }
`;

const Review_NotFound = styled.div`
  border-top: 1px solid #807675;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  height: 40vh;
  line-height: 40vh;
`;

export {
  Container,
  Review_list,
  CategoryButtonContainer,
  CategoryButton,
  Review_NotFound,
};
