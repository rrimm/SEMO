import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 10px;
  margin: 0 20px;
  &:hover {
    border: none;
  }
`;
const Text = styled.div`
  color: black;
`;

const MessageBox = styled.div`
  background-color: #ede3d7;
  padding: 7px 10px;
  border-radius: 5px;
`;

export { Container, Button, MessageBox, Text };
