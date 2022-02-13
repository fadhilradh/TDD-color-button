import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
   const [btnColor, setBtnColor] = useState("red"),
      [btnDisabled, setBtnDisabled] = useState(false);
   const newButtonColor = btnColor === "red" ? "blue" : "red";
   return (
      <div className="App">
         <button
            style={{ backgroundColor: btnColor, color: "white" }}
            disabled={btnDisabled}
            onClick={() => {
               setBtnColor(newButtonColor);
            }}
         >
            Change to {newButtonColor}
         </button>
         <input
            type="checkbox"
            id="disable-button-checkbox"
            defaultChecked={btnDisabled}
            aria-checked={btnDisabled}
            onClick={(e) => setBtnDisabled(e.target.checked)}
         />
         <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
   );
}

export default App;
