import { render } from "@testing-library/react";
import MainPage from "../pages/mainPage/MainPage";
import { MemoryRouter } from "react-router-dom";

test("renders the main page", () => {
  render(<MainPage />, { wrapper: MemoryRouter });
});
