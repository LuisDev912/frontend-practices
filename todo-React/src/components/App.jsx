import Header from './header.jsx';
import ToDoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };


  return (
    <>
      <main>
        <Header />
        <TodoForm onAddTask={addTask} />
        <ToDoList tasks={tasks} />
      </main>
    </>
  )
}

export default App