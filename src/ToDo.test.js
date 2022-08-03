import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDo from './ToDo';
import { v4 as uuid } from 'uuid';

const ToDoTest = { text: "this is a todo", id: uuid() };

test("it renders without crashing", function () {
    render(<ToDo ToDo={ToDoTest} />);
});

test("it matches the snapshot", function () {
    const { asFragment } = render(<ToDo ToDo={ToDoTest} />);
    expect(asFragment()).toMatchSnapshot();
});