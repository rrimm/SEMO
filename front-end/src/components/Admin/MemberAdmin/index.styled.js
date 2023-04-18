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

const MemberTable = styled.table`
  margin: 10px;
  width: 20%;
  height: 40%;
  text-align: center;
  border-collapse: collapse;
  border-bottom: 1px solid #807675;
  border-top: 1px solid #807675;
`;

const MemberContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
`;
const StyledTh = styled.th`
  text-align: center;
  border-bottom: 1px solid #807675;
  font-size: 18px;
  padding: 5px 0;
`;
const MemberTd = styled.td`
  width: 33%;
  text-align: center;
`;

const MemberlistTable = styled.table`
  margin: 30px 0;
  width: 50%;
  text-align: center;
  border-collapse: collapse;
  border-bottom: 1px solid #807675;
  border-top: 1px solid #807675;
`;

const MemberlistContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const MemberlistTh = styled.th`
  width: 25%;
  text-align: center;
  border: 1px solid #807675;
`;

const MemberlistTd = styled.td`
  width: 25%;
  text-align: center;
  border-bottom: 1px solid #807675;
  border-top: 1px solid #807675;
`;

const Footer = styled.td`
  text-align: center;
`;

const Button = styled.button`
  background: #0f010d;
  color: white;
  border-style: none;
  padding: 7px 15px;

  &:hover {
    background: #ede3d7;
    color: #0f010d;
    font-weight: bold;
    border-style: none;
  }
`;

export {
  Text,
  Info,
  MemberTable,
  MemberContainer,
  StyledTh,
  MemberTd,
  MemberlistTable,
  MemberlistContainer,
  MemberlistTh,
  MemberlistTd,
  Footer,
  Button,
};
