import React from 'react';
import { DIRECTIVE } from '../../constants/message';

const PwCheck = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="pwCheck">패스워드 확인</label>
      <input
        type="password"
        id="pwCheck"
        name="pwCheck"
        onChange={handleChange}
        placeholder={DIRECTIVE.JOIN.RE_PASSWORD}
        minlength="8"
        maxlength="16"
        required
      />
    </div>
  );
};

export default PwCheck;
