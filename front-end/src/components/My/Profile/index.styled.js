import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

const NavWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const NavHeader = styled.p`
  color: gray;
  cursor: pointer;
`;

const NavSelectHeader = styled.p`
  color: black;
`;

const Line = styled.div`
  background-color: black;
  margin-top: -1.5vh;
  margin-bottom: 5vh;
  width: 50vw;
  height: 1px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 50vw;
  height: 50vh;
  flex-direction: row;

  border-radius: 10px;
`;

const Section = styled.div`
  width: 50%;
  height: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

const TextSection = styled.div`
  flex-direction: column;
  margin-left: 10%;
  margin-bottom: 10%;
`;

const Header = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 3vh;
`;

const ThinText = styled.h4`
  opacity: 0.5;
`;

const Text = styled.p``;
export {
  Container,
  NavWrapper,
  NavHeader,
  NavSelectHeader,
  Line,
  Wrapper,
  Section,
  StyledForm,
  TextSection,
  ThinText,
  Header,
  Text,
};
