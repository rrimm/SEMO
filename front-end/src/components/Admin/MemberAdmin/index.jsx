import React, { useState, useEffect, useCallback } from "react";
import * as S from "./index.styled";
import axios from "axios";
import { API_PATH } from "../../../constants/path";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { jwtToken } from "../../../stores/auth";

function MemberAdmin({ id, name, email }) {
  const [data, setData] = useState([]);
  const param = useParams();
  const token = useRecoilValue(jwtToken);

  const readRequest = useCallback(async () => {
    await axios
      .get(`${API_PATH.ADMIN.MEMBER}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [param]);

  const removeRequest = async (member_id) => {
    await axios
      .delete(`${API_PATH.ADMIN.MEMBER}/delete/${member_id}`, {
        params: {
          member_id: token.member_id,
        },
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    readRequest();
  }, [readRequest]);

  return (
    <div>
          <S.Text>회원 리스트</S.Text>
    <S.MemberlistContainer>
      <S.MemberlistTable>
        <thead>
        <tr>
          <S.StyledTh>회원 ID</S.StyledTh>
          <S.StyledTh>회원 이름</S.StyledTh>
          <S.StyledTh>회원 이메일</S.StyledTh>
          <S.StyledTh>회원 관리</S.StyledTh>
        </tr>
        </thead>
        <tbody>
        {data.map((member) => (
              <tr key={member.id}>
                <S.MemberlistTd>{member.id}</S.MemberlistTd>
                <S.MemberlistTd>{member.name}</S.MemberlistTd>
                <S.MemberlistTd>{member.email}</S.MemberlistTd>
                <S.MemberlistTd>
                <S.Button onClick={() => removeRequest(member.id)}>삭제</S.Button>
                </S.MemberlistTd>
              </tr>
            ))}
        </tbody>
      </S.MemberlistTable>
    </S.MemberlistContainer>
    </div>
  );
}

export default MemberAdmin;