import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./List";

describe("List Component", () => {
  it("should render list items", async () => {
    const { getByText, queryByText, rerender, unmount } = render(
      <List initialItems={["Breakfast", "Gym", "Lunch"]} />
    );

    expect(getByText("Breakfast")).toBeInTheDocument();
    expect(getByText("Gym")).toBeInTheDocument();
    expect(getByText("Lunch")).toBeInTheDocument();

    unmount();
    rerender(<List initialItems={["Lunch"]} />);

    expect(getByText("Lunch")).toBeInTheDocument();
    expect(queryByText("Dinner")).not.toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText } = render(
      <List initialItems={[]} />
    );

    const inputElement = getByPlaceholderText("New item");
    const addButton = getByText("Add");

    userEvent.type(inputElement, "Study");
    userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText("Study")).toBeInTheDocument();
    });
  });

  it("should be able to add remove item from the list", async () => {
    const { getAllByText, queryByText } = render(
      <List initialItems={["Run"]} />
    );

    const removeButtons = getAllByText("Remove");

    userEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText("Run")).not.toBeInTheDocument();
    });
  });
});
