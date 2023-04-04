import React from 'react';
import { DIRECTIVE } from '../../constants/message';

const Pw = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="pw">패스워드</label>
      <input
        type="password"
        id="pw"
        name="pw"
        onChange={handleChange}
        placeholder={DIRECTIVE.JOIN.PASSWORD}
        minlength="8"
        maxlength="16"
        required
      />
    </div>
  );
};

export default Pw;
