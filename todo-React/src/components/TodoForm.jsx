import { useState } from "react";

const TodoForm = ({onAddTask}) => {
    const [newTask, setNewTask] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (newTask.trim() === '') return;
        
        onAddTask(newTask); // sends the task to app component
        setNewTask('');
    };

    return (
        <form id="task-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="enter a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <input type="submit" value="send" />
        </form>
    );
};

export default TodoForm;