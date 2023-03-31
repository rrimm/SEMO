import React from "react";

const Name = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="Name">이름</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        placeholder="Name"
        required
      />
    </div>
  );
};

export default Name;
