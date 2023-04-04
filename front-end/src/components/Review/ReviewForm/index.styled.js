import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 40vw;
`;

const ColumnWrapper = styled.div`
  width: 50vw;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  width: 25vw;
  margin: 3vh 0;
`;

const Line = styled.div`
  background-color: black;
  width: 50vw;
  height: 1px;
  margin: 1vh 0;
`;

const Pic = styled.img`
  height: 25vh;
`;

const Header = styled.h4`
  width: 7.5vw;
  margin-right: 3vw;
`;

const TextArea = styled.textarea`
  margin-top: 22px;
  height: 75px;
  width: 100%;
`;

const TextCount = styled.h5`
  display: flex;
  justify-content: flex-end;
  width: 50vw;
  margin: 1px 0 5px 0;
`;

const Info = styled.h4``;

export {
  Container,
  Wrapper,
  RowWrapper,
  ColumnWrapper,
  ButtonWrapper,
  Line,
  Pic,
  Header,
  TextArea,
  TextCount,
  Info,
};
