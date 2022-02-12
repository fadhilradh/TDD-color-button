import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has blue color initially and change to red when clicked", () => {
   render(<App />);
   // find el with role button and text Change to blue
   const colorButton = screen.getByRole("button", { name: "Change to blue" }); // 2nd argument is option
   expect(colorButton).toHaveStyle({ backgroundColor: "red" });

   // click btn
   fireEvent.click(colorButton);
   expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
   expect(colorButton.textContent).toBe("Change to red");
});

// test("button turns blue when clicked", () => {
//    render(<App />);
//    const colorButton = screen.getByRole("button", { name: "Change to blue" });

// });
