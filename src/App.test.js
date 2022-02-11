import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
   render(<App />);
   //create virtual DOM
   const linkElement = screen.getByText("Learn React");
   //access virtual DOM by screen global object
   // regex, i = case insensitive. Can use string : 'Learn React'
   expect(linkElement).toBeInTheDocument();
   //  expect(element.textContent).toBe("hello");
   //  expect(elementsArray).toHaveLength(7);
   // assertion : succeed or fail
   // expect : Jest global
   //  toBeInTheDocument() : matcher => type of assertion
   //  from Jest DOM
});
