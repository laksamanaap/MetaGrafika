import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);

  // Look for an element with the text "/learn react/i"
  await waitFor(() => {
    // Log the rendered HTML to the console
    screen.debug();
  });
});
