import Header from './header.jsx';
import ToDoList from './TodoList.jsx';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(["code"]);
  return (
    <>
      <main>
        <Header />
        <ToDoList tasks={tasks} />
      </main>
    </>
  )
}

export default App