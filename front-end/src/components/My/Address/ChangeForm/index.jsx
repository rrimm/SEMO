import React, { useState } from 'react';
import axios from 'axios';

import { TextField, Button } from '@mui/material';
import * as S from './index.styled';

import { API_PATH } from '../../../../constants/path';
import { MEMBER_RULE } from '../../../../constants/rule';
import { CLIENT_ERROR_MESSAGE } from '../../../../constants/message';

function Form({ nowRecipient, nowZipCode, nowAddress }) {
  const [recipient, setRecipient] = useState('');
  const [zipCode, setZicCode] = useState('');
  const [address, setAddress] = useState('');

  const getRecipient = e => {
    setRecipient(e.target.value);
  };

  const getZipCode = e => {
    setZicCode(e.target.value);
  };

  const getAddress = e => {
    setAddress(e.target.value);
  };

  const isNull = data => {
    return data === '';
  };

  const isNullValidate = (recipient, zipCode, address) => {
    return !isNull(recipient) || !isNull(zipCode) || !isNull(address);
  };

  const isValidateEqualsData = () => {
    return (
      equalsData(nowAddress, address) ||
      equalsData(nowRecipient, recipient) ||
      equalsData(nowZipCode, zipCode)
    );
  };

  const equalsData = (data1, data2) => {
    return data1 === data2;
  };

  const validateLength = (data, MIN_LENGTH, MAX_LENGTH) => {
    return MIN_LENGTH <= data.length && data.length <= MAX_LENGTH;
  };

  const changeAddress = async () => {
    const formData = new FormData();

    // TODO: user_id도 포함해야한다.
    if (!isNull(recipient)) {
      formData.append('recipient', recipient);
    }
    if (!isNull(zipCode)) {
      formData.append('zip_code', zipCode);
    }
    if (!isNull(address)) {
      formData.append('address', address);
    }

    await axios({
      method: 'POST',
      url: API_PATH.MY.CHANGE.ADDRESS, // TODO: 백엔드 서버로 교체
      mode: 'cors',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })
      .then(result => {
        formData.forEach((key, value) => console.log(key + '+' + value)); // formData 확인용
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField
          id="recipient"
          onChange={getRecipient}
          label="수취인 변경"
          inputProps={{ maxLength: MEMBER_RULE.ADDRESS.RECIPIENT.MAX_LENGTH }}
          variant="standard"
        />
        {equalsData(nowRecipient, recipient) && (
          <S.Warning>
            {CLIENT_ERROR_MESSAGE.INVALID_ADDRESS.RECIPIENT.CHANGE}
          </S.Warning>
        )}
        {!validateLength(
          recipient,
          MEMBER_RULE.ADDRESS.RECIPIENT.MIN_LENGTH,
          MEMBER_RULE.ADDRESS.RECIPIENT.MAX_LENGTH,
        ) && (
          <S.Warning>
            {CLIENT_ERROR_MESSAGE.INVALID_ADDRESS.RECIPIENT.LENGTH}
          </S.Warning>
        )}
        <TextField
          id="zipCode"
          onChange={getZipCode}
          label="우편번호 변경"
          inputProps={{ maxLength: MEMBER_RULE.ADDRESS.ZIP_CODE.LENGTH }}
          variant="standard"
        />
        {equalsData(nowZipCode, zipCode) && (
          <S.Warning>
            {CLIENT_ERROR_MESSAGE.INVALID_ADDRESS.ZIP_CODE.CHANGE}
          </S.Warning>
        )}
        {!validateLength(
          zipCode,
          MEMBER_RULE.ADDRESS.ZIP_CODE.LENGTH,
          MEMBER_RULE.ADDRESS.ZIP_CODE.LENGTH,
        ) && (
          <S.Warning>
            {CLIENT_ERROR_MESSAGE.INVALID_ADDRESS.ZIP_CODE.LENGTH}
          </S.Warning>
        )}
        <TextField
          id="address"
          onChange={getAddress}
          label="주소 변경"
          variant="standard"
        />
        {equalsData(nowAddress, address) && (
          <S.Warning>
            {CLIENT_ERROR_MESSAGE.INVALID_ADDRESS.ADDRESS.CHANGE}
          </S.Warning>
        )}
      </S.StyledForm>
      {isNullValidate(recipient, zipCode, address) ? (
        <Button variant="outlined" onClick={changeAddress}>
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

export default Form;
