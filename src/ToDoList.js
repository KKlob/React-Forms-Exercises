import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';

const ToDoList = () => {
    const [ToDos, setToDos] = useState(['This is a test', 'test2']);

    return (
        <div>
            <h3>ToDo App - List, Add, and Remove ToDos</h3>
            <NewToDoForm />
            <p>------------------ToDos Render Under Here---------------------</p>
            {ToDos.map(text => <ToDo text={text} />)}
        </div>
    )
}

export default ToDoList;