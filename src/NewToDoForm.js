import React, { useState } from 'react';

const NewToDoForm = ({ addToDo }) => {

    const INITIAL_STATE = "";

    const [formData, setFormData] = useState(INITIAL_STATE);

    function handleSubmit(e) {
        e.preventDefault();
        addToDo(formData);
        setFormData(INITIAL_STATE);
    }

    function handleChange(e) {
        const { value } = e.target;
        setFormData(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">ToDo:</label>
            <input
                id="todo"
                type="text"
                name="text"
                value={formData}
                onChange={handleChange}
            />
            <button type="submit">Add ToDo</button>
        </form>
    )
}

export default NewToDoForm;