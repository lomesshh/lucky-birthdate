import { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [luckyNum, setLuckyNum] = useState("");
  let git = "https://github.com/lomesshh";

  const clickhandler = () => {
    if (inputDate !== "" && luckyNum !== "") {
      var normalDigit = inputDate.replaceAll("-", "");
      var sum = 0;
      while (normalDigit) {
        sum += normalDigit % 10;
        normalDigit = Math.floor(normalDigit / 10);
      }
      var finalCheck = sum % luckyNum;
      console.log(finalCheck);
      if (finalCheck === 0) {
        setMessage("Congrats Your Birth date Is Lucky !");
      } else {
        setMessage("We are Sorry ! Your Birth date Is Not Lucky");
      }
    } else {
      setMessage("Please fill both fields properly");
    }
  };

  return (
    <div>
      <div>
        <h1>Check Is Your BirthDay Lucky ?</h1>
        <h2>Enter your Date of Birth</h2>
        <input
          type="date"
          onChange={(e) => {
            setInputDate(e.target.value);
          }}
        />
        <h2>Enter your Lucky Number</h2>
        <input
          type="text"
          onChange={(event) => {
            setLuckyNum(event.target.value);
          }}
        />
        <br />
        <h3>{message}</h3>
        <button onClick={clickhandler}>Click here to check</button>
      </div>
      <div
        style={{
          backgroundColor: "#cc7722",
          padding: "2rem"
        }}
      >
        <div>
          <h4>Privacy - We never ever store or share your data with anyone </h4>
        </div>
        <div>
          <a href={git}>
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/lomesh-badhe-356108b3/">
            <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/b84496f5a82e4e6">
            <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/lomesshh/">
            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
