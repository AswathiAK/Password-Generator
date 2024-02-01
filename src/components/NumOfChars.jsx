import React, { useState } from "react";
import "../App.css";

const NumOfChars = ({ setNumOfChars }) => {
  const passwordLengths = [4, 8, 12, 16];
  const [selectedLength, setSelectedLength] = useState(-1);

  return (
    <div className="container">
      <h3>Enter number of characters needed</h3>
      <div className="btn-container">
        {passwordLengths.map((length, index) => (
          <button
            key={index}
            type="button"
            className={selectedLength === index ? "active" : ""}
            onClick={() => {
              setSelectedLength(index);
              setNumOfChars(length);
            }}
          >
            {length}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumOfChars;
