import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
   return colorName.replace(/\B([A-Z])\B/g, " $1");
}

export function changeVioletRedToMidnightBlue(colorName) {
   if (colorName === "MediumVioletRed") {
      return "MidnightBlue";
   }
   return;
}

function App() {
   const [btnColor, setBtnColor] = useState("MediumVioletRed"),
      [btnDisabled, setBtnDisabled] = useState(false);
   const newButtonColor =
      btnColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
   return (
      <div className="App">
         <button
            style={{
               backgroundColor: btnDisabled ? "gray" : btnColor,
               color: "white",
            }}
            disabled={btnDisabled}
            onClick={() => {
               setBtnColor(newButtonColor);
            }}
         >
            Change to {replaceCamelWithSpaces(newButtonColor)}
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
