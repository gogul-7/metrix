import React from "react";
import Input from "../components/Input";

export const Settings = () => {
  return (
    <div className="orders-container">
      <p className="font8">Your Account</p>
      <div className="settings-container">
        <Input label={"User Name"} type={"text"} value="Nanny's Shop" />
        <Input label={"User Name"} type={"password"} value="123456" />
      </div>
    </div>
  );
};
