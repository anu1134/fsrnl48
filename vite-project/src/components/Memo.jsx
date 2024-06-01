import "./Memo.css";
import { useState, useMemo } from "react";
import { findPrime } from "../utils/helper";

function Memo() {
  const [num, setNum] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findPrime(num), [num]);

  function updateTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <>
      <h1>Learning useMemo Hook</h1>

      <div
        className="memoBox"
        style={
          isDarkTheme
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "white" }
        }
      >

        <button onClick={updateTheme}>ToggleTheme</button>

        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <div>nthPrime: {prime}</div>
      </div>
    </>
  );
}

export default Memo;
