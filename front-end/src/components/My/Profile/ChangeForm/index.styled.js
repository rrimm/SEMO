import styled from '@emotion/styled';

const Container = styled.div``;

const StyledForm = styled.form`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin-bottom: 15px;
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

const Warning = styled.span`
  color: red;
  font-size: 6px;
`;

export { Container, StyledForm, TextSection, ThinText, Text, Warning };
