import NumOfChars from "./components/NumOfChars";
import Form from "./components/Form";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import copy from "copy-to-clipboard";
import { useState } from "react";

function App() {
  let numOfChars;

  const [password, setPassword] = useState("");

  const setNumOfChars = (num) => {
    numOfChars = num;
    console.log(numOfChars);
  };

  const smallLetters = "abcdefghijklmnopqrstuvwxyz";
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
  const numbers = "1234567890";
  const symbols = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

  const getString = (lower, upper, num, symbol) => {
    let string = "";
    if (lower) {
      string += smallLetters;
    }
    if (upper) {
      string += capitalLetters;
    }
    if (num) {
      string += numbers;
    }
    if (symbol) {
      string += symbols;
    }
    return string;
  };

  const generatePassword = (lower, upper, num, symbol) => {
    let pass = "";
    const string = getString(lower, upper, num, symbol);
    if (!numOfChars) {
      alert("Enter the number of chars needed");
    } else {
      for (let i = 0; i < numOfChars; i++) {
        pass += string.charAt(Math.round(Math.random() * string.length));
      }
    }
    setPassword(pass);
  };

  const copyToClipboard = () => {
    copy(password);
    alert(`Copied text ${password}`);
  };

  return (
    <div className="App">
      <h1 className="title">PASSWORD GENERATOR</h1>
      <NumOfChars setNumOfChars={setNumOfChars} />
      <Form generatePassword={generatePassword} />
      <div className="display-pass">
        <h2>{password}</h2>
        <span>
          <FontAwesomeIcon icon={faCopy} onClick={copyToClipboard} />
        </span>
      </div>
    </div>
  );
}

export default App;
