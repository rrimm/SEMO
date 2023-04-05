import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  text-align: left;
  margin-top: 5vh;
`;

const NavBar = styled.div`
  display: flex;
  margin-top: 7vh;
  flex-direction: row;
  width: 75vw;
  height: 100px;
`;

const Toggle = styled.div`
  width: 80%;
`;

const Count = styled.div`
  width: 20%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Text = styled.p`
  display: table-cell;
  float: right;
`;

export { Container, TextBox, NavBar, Toggle, Count, Wrapper, Text };
