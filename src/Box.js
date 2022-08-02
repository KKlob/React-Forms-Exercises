import React from 'react';

const Box = ({ style }) => {
    return (
        <div key={style.id} style={style}>
        </div>
    )
}

export default Box;