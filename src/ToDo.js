import React from 'react';

const ToDo = ({ text }) => {

    function handleClick() {
        console.log("delete");
    }

    return (
        <div>
            - {text} <button onClick={handleClick}>X</button>
        </div>
    )
}

export default ToDo;

ToDo.defaultProps = {
    text: "this is the default Text"
}