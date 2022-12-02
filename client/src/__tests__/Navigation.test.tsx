import { render } from "@testing-library/react";
import Navigation from "../components/Navigation";
import { MemoryRouter } from "react-router-dom";

test("renders the main page", () => {
  render(<Navigation />, { wrapper: MemoryRouter });
});
