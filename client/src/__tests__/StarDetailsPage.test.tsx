import { render } from "@testing-library/react";
import Dropdown from "../components/Dropdown";

test("renders the main page", () => {
  render(
    <Dropdown
      placeHolder="test"
      options={[
        {
          id: 2,
          name: "test",
          description: "test",
          link: "test",
        },
      ]}
    />
  );
});
