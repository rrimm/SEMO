import React from "react";

const Birth = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="Birth">생년월일</label>
      <input
        type={"text"}
        id="birth"
        name="birth"
        onChange={handleChange}
        placeholder="생년월일을 적어주세요. ex)1999-05-24"
        required
      />
    </div>
  );
};

export default Birth;
