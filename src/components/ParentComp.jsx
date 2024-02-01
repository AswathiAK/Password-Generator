import { useState } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  const [childData, setChildData] = useState("");
  const dataToSend = (data) => {
    setChildData(data);
  };
  return (
    <div>
      <h1>{childData}</h1>
      <ChildComp text="Hi Child" dataToSend={dataToSend} />
    </div>
  );
};

export default ParentComp;
