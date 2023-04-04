import React from 'react';
import { DIRECTIVE } from '../../constants/message';

const Birth = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="Birth">생년월일</label>
      <input
        type={'text'}
        id="birth"
        name="birth"
        onChange={handleChange}
        placeholder={DIRECTIVE.JOIN.BIRTH}
        required
      />
    </div>
  );
};

export default Birth;
