import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has blue color initially and change to red when clicked", () => {
   render(<App />);
   // find el with role button and text Change to blue
   const colorButton = screen.getByRole("button", { name: "Change to blue" }); // 2nd argument is option
   expect(colorButton).toHaveStyle({ backgroundColor: "red" });

   // click btn and change to red
   fireEvent.click(colorButton);
   expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
   expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions for button and checkbox", () => {
   // check the button starts enabled
   render(<App />);
   const colorButton = screen.getByRole("button", { name: "Change to blue" });
   expect(colorButton).toBeEnabled();
   // check the checkbox starts unchecked

   const checkbox = screen.getByRole("checkbox");
   expect(checkbox).not.toBeChecked();
});

test("button disabled when checkbox on first click and enabled on second click", () => {
   render(<App />);
   const colorButton = screen.getByRole("button", { name: "Change to blue" });
   const checkbox = screen.getByRole("checkbox");
   fireEvent.click(checkbox);
   expect(colorButton).toBeDisabled();
   fireEvent.click(checkbox);
   expect(colorButton).toBeEnabled();
});
