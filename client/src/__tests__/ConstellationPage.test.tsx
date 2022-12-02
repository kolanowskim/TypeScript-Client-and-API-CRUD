import { render } from "@testing-library/react";
import ConstellationsPage from "../pages/constellations/ConstellationsPage";
import { MemoryRouter } from "react-router-dom";

test("renders the main page", () => {
  render(<ConstellationsPage />, { wrapper: MemoryRouter });
});
