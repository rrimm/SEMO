import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 5%;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 3%;
`;

const ButtonText = styled.p`
  font-size: 1.5rem;
`;

const Text = styled.p`
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  text-shadow: 10px 5px 5px block;
`;

const Spin = styled.img`
  display: block;
  width: 25%;
  height: auto;

  animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Container, ButtonContainer, ButtonText, Text, Spin };
