import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  margin-top: 20vh;
`;

const Wrapper = styled.div`
  align-items: flex-start;
  width: 75vh;
`;

const Header = styled.h2``;

const Text = styled.p`
  font-size: 15px;
  margin-top: -5px;
`;

const SmallText = styled.h5`
  opacity: 0.7;
`;

export { Container, Wrapper, Header, Text, SmallText };
