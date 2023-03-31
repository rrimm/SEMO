import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 15px;
  padding: 10px;
  margin: 0 20px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background-color: #e5cdce;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-style: none;
  margin: 10px 40px;
  cursor: pointer;
`;

const MessageBox = styled.div`
  background-color: #ede3d7;
  padding: 7px 10px;
  border-radius: 5px;
`;

export { Container, Button, CloseButton, MessageBox };
