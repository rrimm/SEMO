import React from "react";

const Email = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="email">이메일</label>
      <input
        placeholder="이메일 주소 입력, ex)abc1234@gmail.com"
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
