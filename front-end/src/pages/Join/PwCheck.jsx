import React from "react";

const PwCheck = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="pwCheck">패스워드 확인</label>
      <input
        type="password"
        id="pwCheck"
        name="pwCheck"
        onChange={handleChange}
        placeholder="비밀번호를 한 번 더 입력하세요"
        minlength="8"
        maxlength="12"
        required
      />
    </div>
  );
};

export default PwCheck;
