import React from 'react';

const Box = ({ style, removeBox }) => {
    function handleClick() {
        removeBox(style);
    }

    return (
        <div style={style}>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default Box;