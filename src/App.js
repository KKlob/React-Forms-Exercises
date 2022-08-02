import React from 'react';
import BoxList from './BoxList';
import ToDoList from './ToDoList';


function App() {
  return (
    <div className="App">
      <BoxList key="boxlist" />
      <p>-------------Separate different Parts---------------</p>
      <ToDoList key="ToDoList" />
    </div>
  );
}

export default App;
