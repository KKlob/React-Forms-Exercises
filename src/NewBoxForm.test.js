import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test("it renders without crashing", function () {
    render(<NewBoxForm />);
});

test("it matches the snapshot", function () {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

test("it allows the user type a color and input width/height", function () {
    const { getByLabelText } = render(<NewBoxForm />);
    const bgColorInput = getByLabelText("Background Color");
    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");

    expect(bgColorInput.value).toBe("");
    expect(Number(widthInput.value)).toBe(10);
    expect(Number(heightInput.value)).toBe(10);

    fireEvent.change(bgColorInput, { target: { value: "blue" } });
    fireEvent.change(widthInput, { target: { value: 100 } });
    fireEvent.change(heightInput, { target: { value: 100 } });

    expect(bgColorInput.value).toBe("blue");
    expect(Number(widthInput.value)).toBe(100);
    expect(Number(heightInput.value)).toBe(100);
});