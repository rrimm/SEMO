import React from "react";

function EmailInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label>Email</label>
      <input
        type="text"
        id="inputEmail"
        value={value}
        onChange={onChange}
        placeholder="이메일"
        required
      />
    </div>
  );
}

export default EmailInput;
