import styled from '@emotion/styled';

const Review_list_type = styled.div`
  //background-color: #F2F2C1;
  background-color: #ffffff;
  display: flex;
  width: 100%;
  height: 2%;
  justify-content: left;
  align-items: center;
  //font-weight: bold;
  //padding-left: 5%;
  user-select: none;
`;

const Review_list_type_all = styled.a`
  text-decoration-line: none;
  display: flex;
  width: 10%;
  justify-content: center;
  align-items: center;
  color: #807675;
  font-weight: bold;
  &:hover {
    color: #0f010d;
  }
`;

const Review_list_type_photo = styled.a`
  text-decoration-line: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1%;
  color: #807675;
  font-weight: bold;
  &:hover {
    color: #0f010d;
  }
`;

const DivideLine = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  cursor: default;
`;

export {
  Review_list_type,
  Review_list_type_all,
  Review_list_type_photo,
  DivideLine,
};
