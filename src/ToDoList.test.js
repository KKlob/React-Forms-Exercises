import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDoList from './ToDoList';

test("it renders without crashing", function () {
    render(<ToDoList />)
});

test("it matches the snapshot", function () {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
});