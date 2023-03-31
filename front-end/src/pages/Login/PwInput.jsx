import React from "react";

function PwInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label>Password</label>
      <input
        type="password"
        id="inputPw"
        value={value}
        onChange={onChange}
        placeholder="비밀번호"
        required
      />
    </div>
  );
}

export default PwInput;
