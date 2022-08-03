import React from 'react';

const ToDo = ({ ToDo, removeToDo }) => {

    function handleClick(e) {
        removeToDo(ToDo);
    }

    return (
        <li> {ToDo.text} <button onClick={handleClick}>X</button></li>
    )
}

export default ToDo;