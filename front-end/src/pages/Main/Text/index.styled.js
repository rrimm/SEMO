import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  margin-top: 20vh;
`;

const Wrapper = styled.div`
  width: 50vh;
`;

const Header = styled.h2``;

const Text = styled.p`
  font-weight: bold;
`;

const SmallText = styled.h5`
  opacity: 0.7;
`;

export { Container, Wrapper, Header, Text, SmallText };
