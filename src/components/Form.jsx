import React, { useState } from "react";
import "../App.css";

const Form = ({ generatePassword }) => {
  const [lower, setLower] = useState(true);
  const [upper, setUpper] = useState(true);
  const [num, setNum] = useState(true);
  const [symbol, setSymbol] = useState(true);

  return (
    <form>
      <div>
        <label htmlFor="lower">Include lowercase</label>
        <input
          type="checkbox"
          id="lower"
          defaultChecked={lower}
          onChange={() => setLower(!lower)}
        />
      </div>
      <div>
        <label htmlFor="upper">Include uppercase</label>
        <input
          type="checkbox"
          id="upper"
          defaultChecked={upper}
          onChange={() => setUpper(!upper)}
        />
      </div>
      <div>
        <label htmlFor="number">Include number</label>
        <input
          type="checkbox"
          id="number"
          defaultChecked={num}
          onChange={() => setNum(!num)}
        />
      </div>
      <div>
        <label htmlFor="symbol">Include symbol</label>
        <input
          type="checkbox"
          id="symbol"
          defaultChecked={symbol}
          onChange={() => setSymbol(!symbol)}
        />
      </div>
      <button
        type="button"
        onClick={() => generatePassword(lower, upper, num, symbol)}
      >
        Generate Password
      </button>
    </form>
  );
};

export default Form;
