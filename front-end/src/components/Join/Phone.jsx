import React from 'react';
import { DIRECTIVE } from '../../constants/message';

const Phone = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="Phone">연락처</label>
      <input
        type="text"
        id="phone"
        name="phone"
        onChange={handleChange}
        placeholder={DIRECTIVE.JOIN.PHONE}
        required
      />
    </div>
  );
};

export default Phone;
