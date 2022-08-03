import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test("it renders without crashing", function () {
    render(<BoxList />);
});

test("it matches the snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

test("it allows a new box to render when form NewBoxForm is submitted", function () {
    const { getByLabelText, queryByText } = render(<BoxList />);

    const bgIn = getByLabelText("Background Color");
    const wdIn = getByLabelText("Width");
    const heIn = getByLabelText("Height");
    const addBox = queryByText("Add Box");
    let box = queryByText("X");

    expect(box).toBe(null);

    fireEvent.change(bgIn, { target: { value: "blue" } });
    fireEvent.change(wdIn, { target: { value: 100 } });
    fireEvent.change(heIn, { target: { value: 100 } });
    fireEvent.click(addBox);

    box = queryByText("X").parentElement;
    expect(box).toBeInTheDocument();
});