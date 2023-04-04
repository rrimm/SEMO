import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

import { TextField, Button } from '@mui/material';
import * as S from './index.styled';

import { API_PATH } from '../../../../constants/path';
import { CLIENT_ERROR_MESSAGE } from '../../../../constants/message';
import { MEMBER_RULE } from '../../../../constants/rule';
import { jwtToken } from '../../../../stores/auth';

function PasswordForm() {
  const token = useRecoilValue(jwtToken);
  const [nowPassword, setNowPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');

  const getNowPassword = e => {
    setNowPassword(e.target.value);
  };

  const getNewPassword = e => {
    setNewPassword(e.target.value);
  };

  const getValidatePassword = e => {
    setValidatePassword(e.target.value);
  };

  const hasNowPassword = () => {
    return nowPassword !== '';
  };

  const hasNewPassword = () => {
    return newPassword !== '';
  };

  const validatePasswordByLength = password => {
    return (
      MEMBER_RULE.PASSWORD.MIN_LENGTH <= password.length &&
      password.length <= MEMBER_RULE.PASSWORD.MAX_LENGTH
    );
  };

  const equalsPassword = (pw1, pw2) => {
    return pw1 === pw2;
  };

  const logoutRequest = async () => {
    await axios
      .post(API_PATH.AUTH.LOGOUT, {
        token: token.refreshToken,
      })
      .then(() => {
        localStorage.clear();
        window.location.reload();
      })
      .error(error => {
        console.error(error);
      });
  };

  const updatePasswordRequest = async () => {
    await axios
      .put(
        API_PATH.MY.UPDATE.PASSWORD,
        {
          memberId: token.memberId,
          nowPassword: nowPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        },
      )
      .then(() => {
        logoutRequest();
        alert('비밀번호가 변경되었습니다. 다시 로그인해주세요!');
      })
      .error(error => {
        if (error.response.status === 400) {
          alert(error.response.data.message);
        }
        console.error(error);
      });
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField
          type={'password'}
          id="nowPassword"
          onChange={getNowPassword}
          label="현재 비밀번호"
          inputProps={{ maxLength: MEMBER_RULE.PASSWORD.MAX_LENGTH }}
          variant="standard"
        />
        {!validatePasswordByLength(nowPassword) && (
          <S.Warning>{CLIENT_ERROR_MESSAGE.INVALID_PASSWORD.LENGTH}</S.Warning>
        )}
        <TextField
          type={'password'}
          id="newPassword"
          onChange={getNewPassword}
          label="새 비밀번호"
          inputProps={{ maxLength: MEMBER_RULE.PASSWORD.MAX_LENGTH }}
          variant="standard"
        />
        {!validatePasswordByLength(newPassword) && (
          <S.Warning>{CLIENT_ERROR_MESSAGE.INVALID_PASSWORD.LENGTH}</S.Warning>
        )}
        {equalsPassword(nowPassword, newPassword) && (
          <S.Warning>{CLIENT_ERROR_MESSAGE.INVALID_PASSWORD.CHANGE}</S.Warning>
        )}
        <TextField
          type={'password'}
          id="validatePassword"
          onChange={getValidatePassword}
          label="새 비밀번호 재입력"
          inputProps={{ maxLength: MEMBER_RULE.PASSWORD.MAX_LENGTH }}
          variant="standard"
        />
        {!equalsPassword(newPassword, validatePassword) && (
          <S.Warning>{CLIENT_ERROR_MESSAGE.INVALID_PASSWORD.CONFIRM}</S.Warning>
        )}
      </S.StyledForm>
      {hasNowPassword() &&
      hasNewPassword() &&
      !equalsPassword(nowPassword, newPassword) &&
      equalsPassword(newPassword, validatePassword) &&
      validatePasswordByLength(nowPassword) &&
      validatePasswordByLength(newPassword) ? (
        <Button variant="outlined" onClick={updatePasswordRequest}>
          변경
        </Button>
      ) : (
        <Button disabled variant="outlined">
          변경
        </Button>
      )}
    </S.Container>
  );
}

export { PasswordForm };
