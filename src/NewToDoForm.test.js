import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewToDoForm from './NewToDoForm';

test("it renders without crashing", function () {
    render(<NewToDoForm />)
});

test("it matches the snapshot", function () {
    const { asFragment } = render(<NewToDoForm />);
    expect(asFragment()).toMatchSnapshot();
});

test("it allows the user to input text", function () {
    const { getByLabelText } = render(<NewToDoForm />);

    const toDoInput = getByLabelText("ToDo:");

    expect(toDoInput.value).toBe("");

    fireEvent.change(toDoInput, { target: { value: "This is a test ToDo" } });

    expect(toDoInput.value).toBe("This is a test ToDo");
});