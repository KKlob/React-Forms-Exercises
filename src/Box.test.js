import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

const style = { backgroundColor: "blue", width: 100, height: 100, id: "testID" };

test("it renders without crashing", function () {
    render(<Box style={style} />);
});

test("it matches the snapshot", function () {
    const { asFragment } = render(<Box style={style} />);
    expect(asFragment()).toMatchSnapshot();
})