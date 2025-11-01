import Header from './header.jsx';
import ToDoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTaskText) => {
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <>
      <main>
        <Header completed={completedCount} total={tasks.length} />
        <TodoForm onAddTask={addTask} />
        <ToDoList tasks={tasks} onToggle={toggleTask} />
      </main>
    </>
  )
}

export default App