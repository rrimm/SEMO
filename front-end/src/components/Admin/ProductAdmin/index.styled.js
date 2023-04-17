import styled from "@emotion/styled";

const Text = styled.div`
  margin: 30px;
  text-align: center;
  padding: 10px;
  border-collapse: collapse;
  font-size: 21px;
  border-bottom: 1px solid #ede3d7;
`;

const Info = styled.div`
  margin: -30px 0 0 500px;
  font-size: 12px;
  text-align: left;
`;
const ProductTable = styled.table`
  margin: 10px;
  width: 80%;
  height: 40%;
  text-align: center;
  border-collapse: collapse;
  border-bottom: 1px solid #807675;
  border-top: 1px solid #807675;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
`;

const StyledTh = styled.th`
  text-align: center;
  border-bottom: 1px solid #807675;
  border-top: 1px solid #807675;
  font-size: 18px;
  padding: 5px 0;
`;

const ProductTd = styled.td`
  text-align: center;
  border-bottom: 1px solid #807675;
  border-top: 1px solid #807675;
`;

const ProductlistTable = styled.table`
  margin: 30px 0;
  width: 75%;
  text-align: center;
  border-collapse: collapse;
  border-bottom: 1px solid #807675;
  border-top: 1px solid #807675;
`;

const ProductlistContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const ProductlistTd = styled.td`
  width: 13.3%;
  text-align: center;
  border-bottom: 1px solid #807675;
  border-top: 1px solid #807675;
`;

const Footer = styled.td`
  text-align: center;
  border-bottom: 1px solid #807675;
  border-top: 1px solid #807675;
`;

const Button = styled.button`
  background: #0f010d;
  color: white;
  padding: 7px 15px;
  margin: 0 5px;
  border-style: none;

  &:hover {
    background: #cbc2b6;
    color: #0f010d;
    font-weight: bold;
  }
`;

const ChangeButton = styled.button`
  background: #807675;
  color: white;
  margin: 0 5px;
  border-style: none;
  padding: 7px 15px;

  &:hover {
    background: #cbc2b6;
    color: #0f010d;
    font-weight: bold;
  }
`;

export {
  Text,
  Info,
  ProductTable,
  ProductContainer,
  StyledTh,
  ProductTd,
  ProductlistTable,
  ProductlistContainer,
  ProductlistTd,
  Footer,
  Button,
  ChangeButton,
};
