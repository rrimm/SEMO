import React from 'react';
import { DIRECTIVE } from '../../constants/message';

const Email = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="email">이메일</label>
      <input
        placeholder={DIRECTIVE.JOIN.EMAIL}
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Email;
