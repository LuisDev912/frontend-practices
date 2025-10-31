import { useState } from "react";

const TodoForm = () => {
    const [newTask, setNewTask] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    };

    return (
        <form id="task form" onSubmit={handleSubmit}>
            <input type="text" placeholder="enter a new task" />
            <input type="submit" value="send" />
        </form>
    );
};

export default TodoForm;