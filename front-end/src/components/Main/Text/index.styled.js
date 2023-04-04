import styled from '@emotion/styled';

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

const Header = styled.h1`
  font-size: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin-top: 10px;
`;

const SmallText = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 10px;
`;

export { Container, Wrapper, Header, Text, SmallText };
