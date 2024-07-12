import React, { useState } from "react";
import "./Input.css";

const Input = ({ label, type, value }) => {
  const [isFocused, setIsFocusd] = useState("");
  return (
    <div
      className="styled-input-container"
      style={
        isFocused === label
          ? { border: "1px solid rgba(85, 112, 241, 1)" }
          : { border: "1px solid rgba(207, 211, 212, 1)" }
      }
    >
      <label className="styled-input-label">{label}</label>
      <input
        type={type}
        value={value}
        onFocus={() => setIsFocusd(label)}
        onBlur={() => setIsFocusd("")}
        onFo
        className="styled-input-field"
      />
    </div>
  );
};

export default Input;
