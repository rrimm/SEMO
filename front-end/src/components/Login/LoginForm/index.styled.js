import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const WrapperLabel = styled.dlv`
  display: block;
  font-weight: bold;
`;

const Inline = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const InlineSpan = styled.div`
  position: flex;
  display: inline-block;
  align-content: center;
  font-size: 10px;
  margin-right: 10px;
`;

const JoinButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-left: 55px;
  color: blue;
  position: flex;
  width: 80px;
  height: 20px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-size: 17px;

  &: hover {
    color: #2acaea;
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  box-sizing: border-box;
  text-decoration-style: bold;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 12px;
  display: block;
  position: flex;
  width: 72px;
  height: 52px;
  margin: 0 auto;
  background: #807675;
  border: 1px solid #807675;
  border-radius: 18px;
  font-size: 19px;
  color: #ffffff;
  align-items: center;

  &: hover {
    background: #e5cdce;
    cursor: pointer;
  }
`;

export {
  Container,
  Label,
  Wrapper,
  WrapperLabel,
  Inline,
  InlineSpan,
  JoinButton,
  SubmitButton,
};
