import styled from "@emotion/styled";

const Button = styled.button`
  background-color: white;
  border-color: black;
  color: black;
  border-radius: 0;
  margin: 25px 25px 15px 25px;
  width: 45px;
  height: 45px;
  text-align: center;
  font-size: 20px;
`;

const SelectedButton = styled.button`
  background-color: black;
  border-color: black;
  color: white;
  border-radius: 0;
  margin: 25px 25px 15px 25px;
  width: 45px;
  height: 45px;
  text-align: center;
  font-size: 20px;
`;

export { Button, SelectedButton };
