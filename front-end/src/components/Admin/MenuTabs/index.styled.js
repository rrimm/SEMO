import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  // flex-direction: row;
  border-bottom: medium solid #807675;
  border-width: 1px;
`;

const Text = styled.div`
  color: #807675;
  font-size: 24px;
  margin: 10px 50px;
  padding: 5px 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #807675;

  &:hover {
    color: #0f010d;
    font-weight: bold;
  }
`;

export { Text, Container, StyledLink };
