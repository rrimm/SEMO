import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;

  background-color: #f8f8f8;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  padding-top: 10%;
  padding-bottom: 30%;

  background: linear-gradient(
    90deg,
    #e5cdce,
    #ede3d7 15%,
    #0f010d 35%,
    #e5cdce 50%,
    #ede3d7 65%,
    #0f010d 85%,
    #e5cdce
  );
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 3.5s linear infinite;
  background-size: 200% 100%;

  @keyframes gradient {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
`;

export { Container, Wrapper, Text };
