import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';

const ToDoList = () => {
    const [ToDos, setToDos] = useState([]);

    const addToDo = (text) => {
        let ToDo = { text: text, id: uuid() };
        setToDos(ToDos => [...ToDos, ToDo]);
    }

    const removeToDo = (ToDo) => {
        setToDos(ToDos.filter(item => item !== ToDo));
    }

    return (
        <div>
            <h3>ToDo App - List, Add, and Remove ToDos</h3>
            <NewToDoForm addToDo={addToDo} />
            <p>---------------------ToDos Render Under Here---------------------</p>
            {ToDos ? ToDos.map(item => <ToDo ToDo={item} removeToDo={removeToDo} key={item.id} />) : null}
        </div>
    )
}

export default ToDoList;