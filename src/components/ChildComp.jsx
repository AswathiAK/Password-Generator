import { useState } from "react";

const ChildComp = ({ text, dataToSend }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    dataToSend(count);
  };

  return (
    <div>
      <h3>{text}</h3>
      <button onClick={handleClick}>Send data to parent</button>
    </div>
  );
};

export default ChildComp;
