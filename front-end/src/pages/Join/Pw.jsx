import React from "react";

const Pw = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="pw">패스워드</label>
      <input
        type="password"
        id="pw"
        name="pw"
        onChange={handleChange}
        placeholder="숫자와 알파벳만 사용, 8~12자리"
        minlength="8"
        maxlength="12"
        required
      />
    </div>
  );
};

export default Pw;
