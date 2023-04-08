import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  const todos = [
    {
      id: 1,
      text: "Finish the course"
    },
    {
      id: 2,
      text: "Take shower"
    }
  ];
  return (
    <ToDoList items={todos} />
  )
}

export default App
