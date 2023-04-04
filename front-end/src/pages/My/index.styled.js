import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50vw;
  height: 10vh;
  margin-top: 5vh;
  background-color: #f8f8f8;

  flex-direction: row;
`;

const Header = styled.p`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 100%;
  color: gray;
  cursor: pointer;
`;

const SelectHeader = styled.p`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 100%;
  color: black;
  cursor: pointer;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export { Container, NavWrapper, Header, SelectHeader, Section };
