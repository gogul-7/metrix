import React, { useState } from "react";
import "./Dropdown.css";
import { ChevronDown } from "react-iconly";

const Dropdown = ({ values }) => {
  const [selected, setSelected] = useState(values[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="dropdown-container">
      <div className="dropdown-sub2">
        <p className="font3">{selected}</p>
        <ChevronDown primaryColor="rgba(190, 192, 202, 1)" size={20} />
      </div>
      {isOpen && (
        <div className="dropdown-sub1">
          {values.map((item) => (
            <p onClick={() => setSelected(item)} className="font3">
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
