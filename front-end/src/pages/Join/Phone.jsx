import React from "react";

const Phone = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="Phone">연락처</label>
      <input type="text" id="phone" name="phone" onChange={handleChange} placeholder="01012345678" required />
    </div>
  );
};

export default Phone;
