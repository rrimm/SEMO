import React from 'react';
import { DIRECTIVE } from '../../constants/message';

const Name = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="Name">이름</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        placeholder={DIRECTIVE.JOIN.NAME}
        required
      />
    </div>
  );
};

export default Name;
