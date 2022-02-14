import { render, screen, fireEvent } from "@testing-library/react";
import App, {
   changeVioletRedToMidnightBlue,
   replaceCamelWithSpaces,
} from "./App";

test("button has blue color initially and change to red when clicked", () => {
   render(<App />);
   // find el with role button and text Change to Midnight Blue
   const colorButton = screen.getByRole("button", {
      name: "Change to Midnight Blue",
   }); // 2nd argument is option
   expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

   // click btn and change to red
   fireEvent.click(colorButton); 
   expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
   expect(colorButton.textContent).toBe("Change to Medium Violet Red");
});   
  
test("initial conditions for button and checkbox", () => {
   // check the button starts enabled 
   render(<App />);
   const colorButton = screen.getByRole("button", {
      name: "Change to Midnight Blue",
   });  
   expect(colorButton).toBeEnabled();
   // check the checkbox starts unchecked

   const checkbox = screen.getByRole("checkbox");
   expect(checkbox).not.toBeChecked();
});

test("button disabled when checkbox on first click and enabled on second click", () => {
   render(<App />);
   const colorButton = screen.getByRole("button", {
      name: "Change to Midnight Blue",
   });
   const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

   fireEvent.click(checkbox);
   expect(colorButton).toBeDisabled();
   expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

   fireEvent.click(checkbox); 
   expect(colorButton).toBeEnabled();
});

test("user flow test", () => {
   render(<App />);
   const colorButton = screen.getByRole("button", {
      name: "Change to Midnight Blue",
   });
   const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

   fireEvent.click(checkbox);
   expect(colorButton).toBeDisabled();
   expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
   fireEvent.click(checkbox);
   expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

   fireEvent.click(colorButton);
   fireEvent.click(checkbox);
   expect(colorButton).toBeDisabled();
   expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

   fireEvent.click(checkbox);
   expect(colorButton).toBeEnabled();
   expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letters", () => {
   test("Works for no inner capital letters", () => {
      expect(replaceCamelWithSpaces("MediumVioletRed")).toBe(
         "Medium Violet Red"
      );
   });

   test("Works for one inner capital letter", () => {
      expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
   });

   test("Works for multiple inner capital letter", () => {
      expect(replaceCamelWithSpaces("MediumVioletRed")).toBe(
         "Medium Violet Red"
      );
   });
});

// test("change mediumvioletred to midnightblue", () => {
//    expect(changeVioletRedToMidnightBlue("MediumVioletRed")).toBe(
//       "MidnightBlue"
//    );
// });
