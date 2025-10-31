import { useState } from "react";

const TodoForm = () => {
    const [newTask, setNewTask] = useState('');

    return (
        <form id="task form">
            <input type="text" placeholder="enter a new task" />
            <input type="submit" value="send" />
        </form>
    );
};

export default TodoForm;