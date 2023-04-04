import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
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
  justify-content: center;
`;

const TextSection = styled.div`
  flex-direction: column;
  margin-left: 10%;
  margin-bottom: 10%;
`;

const ThinText = styled.h4`
  opacity: 0.5;
`;

const Text = styled.p``;
export { Container, Line, Wrapper, Section, TextSection, ThinText, Text };
