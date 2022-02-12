import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
   const [btnColor, setBtnColor] = useState("red");
   const newButtonColor = btnColor === "red" ? "blue" : "red";
   return (
      <div className="App">
         <button
            style={{ backgroundColor: btnColor }}
            onClick={() => {
               setBtnColor(newButtonColor);
            }}
         >
            Change to {newButtonColor}
         </button>
      </div>
   );
}

export default App;
