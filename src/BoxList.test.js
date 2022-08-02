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