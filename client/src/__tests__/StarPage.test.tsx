import { render } from "@testing-library/react";
import StarsPage from "../pages/stars/StarsPage";
import { MemoryRouter } from "react-router-dom";

test("renders the main page", () => {
  render(<StarsPage />, { wrapper: MemoryRouter });
});
