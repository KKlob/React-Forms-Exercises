import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDoList from './ToDoList';
import ToDo from './ToDo';

test("it renders without crashing", function () {
    render(<ToDoList />)
});

test("it matches the snapshot", function () {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
});

test("it allows a new ToDo to be added", function () {
    const { getByLabelText, queryByText } = render(<ToDoList />);

    const toDoIn = getByLabelText("ToDo:");
    const addToDoButton = queryByText("Add ToDo");

    expect(queryByText("This is a test ToDo")).toBe(null);

    fireEvent.change(toDoIn, { target: { value: "This is a test ToDo" } });
    fireEvent.click(addToDoButton);

    expect(queryByText("This is a test ToDo")).toBeInTheDocument();
});