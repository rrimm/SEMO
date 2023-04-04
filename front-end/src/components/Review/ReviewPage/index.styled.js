import styled from '@emotion/styled';

const BoardPageContainer = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 4%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #807675;
`;

const BoardPageButton = styled.button`
  border: none;
  margin: 0 5px;
  font-size: 15px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  background-color: ${({ active }) => (active ? '#ede3d7' : 'transparent')};
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  &:disabled {
    color: black;
    cursor: default;
  }
`;

export { BoardPageContainer, BoardPageButton };
