import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import React, { useState } from "react";

type Items = {
  id: string | number,
  text: string
}[];



const App: React.FC = () => {
  const iniTodos: Items = [
    { id: 1, text: "Finish the course" },
    { id: 2, text: "Take shower" }
  ];

  const [todos, setTodos] = useState<Items>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevToDos => [...prevToDos,
    {
      id: Math.random().toString(),
      text: text
    }])
  }

  return (<>
    <NewToDo onAdd={todoAddHandler} />
    <ToDoList items={todos} />
  </>)
}

export default App
