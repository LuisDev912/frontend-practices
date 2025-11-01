const TodoItem = ({ task, onToggle }) => {
    const textStyle = {
        textDecoration: task.completed ? 'line-through' : 'none',
        textDecorationColor: task.completed ? 'gray' : 'inherit',
    };

    function changeCheckbox() {
        onToggle(task.id);
    }

    return (
        <li>
            <input type="checkbox" id={`task-${task.id}`} checked={task.completed} onChange={changeCheckbox} />
            <label style={textStyle} htmlFor={`task-${task.id}`}>{task.text}</label>
        </li>
    );
};

export default TodoItem;