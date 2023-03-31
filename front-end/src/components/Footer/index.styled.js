import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  // position: absolute;

  width: 100%;
  height: 250px;

  background-color: #f8f8f8;

  z-index: 999;
`;

const Content = styled.div`
  float: left;
  width: 22.5%;
  height: 250px;
  padding-top: 3vh;
  padding-left: 2.4%;
`;

const Text = styled.p`
  color: #0f010d;
`;

const StyledLink = styled(Link)`
  color: #0f010d;
  text-decoration: none;
  opacity: 0.5;
  &: hover {
    opacity: 1;
  }
`;

export { Container, Content, Text, StyledLink };
