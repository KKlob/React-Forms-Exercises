import React from 'react';

const NewToDoForm = () => {

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submited");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>ToDo:</label>
            <input type="text" />
            <button type="submit">Add ToDo</button>
        </form>
    )
}

export default NewToDoForm;