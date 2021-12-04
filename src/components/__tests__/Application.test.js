import React from "react";

import {
  render,
  waitForElement,
  waitForElementToBeRemoved,
  fireEvent,
  queryByText,
  queryByAltText,
  getByText,
  getByAltText,
  getByPlaceholderText,
  getAllByTestId,
  prettyDOM
} from "@testing-library/react";

import Application from "components/Application";

describe("Application", () => {

  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);

    return waitForElement(() => getByText("Monday"))
      .then(() => {
        fireEvent.click(getByText("Tuesday"));
        expect(getByText("Leopold Silvers")).toBeInTheDocument();
      })
  });

  it("loads data, books an interview and reduces the spots remaining for the first day by 1", async () => {
    // 1. Render the Application component, the container will used for scoping queries
    const { container } = render(<Application />);

    // 2. Wait for the mock axios get requests to resolve
    await waitForElement(() => getByText(container, "Archie Cohen"));

    // 3. Target the first appointment article on the page, located at index 0 of the response from the getAllByTestId query
    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];

    // 4. Select add to show the create new appointment form
    fireEvent.click(getByAltText(appointment, "Add"));

    // 5.  Change the student value, click interviewer, click save
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(getByText(appointment, "Save"));
    expect(getByText(appointment, /saving/i)).toBeInTheDocument();

    // 6. Wait for the mock axios put call to resolve then check for the added students name on the page
    await waitForElementToBeRemoved(() => getByText(appointment, /saving/i));
    expect(getByText(container, "Lydia Miller-Jones")).toBeInTheDocument();

    // 7. Target the day list, and QUERY for the list item with text "Monday"
    const days = getAllByTestId(container, "day");
    const day = days.find(day => queryByText(day, "Monday"))

    // 8. Test that the day item with text Monday also has text "no spots remaining"
    expect(getByText(day, "no spots remaining")).toBeInTheDocument();
  });

  it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
    // 1. Render the Application.
    const { container } = render(<Application />);

    // 2. Wait until the text "Archie Cohen" is displayed.
    await waitForElement(() => getByText(container, "Archie Cohen"));

    // 3. Target the appointment article on the page with Archie Cohen as the student name
    const appointment = getAllByTestId(container, "appointment")
      .find(appointment => queryByText(appointment, "Archie Cohen"));

    // 4. Click the "Delete" button on the appointment and test for the confirm article to be in the document
    fireEvent.click(queryByAltText(appointment, "Delete"));
    expect(getByText(appointment, "Are you sure you would like to delete?")).toBeInTheDocument();

    // 5. Click the "Confirm" button on that same appointment.
    fireEvent.click(getByText(appointment, "Confirm"));

    // 6. Check that the element with the text "Deleting" is displayed.
    expect(getByText(appointment, /deleting/i)).toBeInTheDocument();

    // 7. Wait until the element with the "Add" button is displayed.
    await waitForElement(() => getByAltText(appointment, "Add"));
    expect(queryByText(container, "Archie Cohen")).not.toBeInTheDocument();

    // 8. Target the day list, and QUERY for the list item with text "Monday"
    const day = getAllByTestId(container, "day")
      .find(day => queryByText(day, "Monday"));

    // 9. Test that the day item with text Monday also has text "2 spots remaining"
    expect(getByText(day, "2 spots remaining")).toBeInTheDocument();
  });


});
