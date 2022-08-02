import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test("it renders without crashing", function () {
    render(<NewBoxForm />);
});

test("it matches the snapshot", function () {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
})