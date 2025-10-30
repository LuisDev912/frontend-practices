const TodoItem = ({ task }) => {
    return (
        <li>
            <input type="checkbox" id={`task-${task}`} />
            <label htmlFor={`task-$task`}>{task}</label>
        </li>
    );
};

export default TodoItem; 