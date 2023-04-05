import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  box-sizing: border-box;
  align-content: center;
  position: flex;
  width: 100%;
  height: 50px;
  display: block;
  background-color: #d9d9d9;
  border: 2px solid #ffffff;
  border-radius: 15px;
  /*border-bottom: 2px solid #ffffff;*/
  margin: 15px 10px;
  padding: 0px 10px;

  &: focus {
    outline: 1px solid #ffffff;
  }
`;

export { Container, Label, Input };
