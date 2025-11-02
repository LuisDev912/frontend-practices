import TodoItem from './TodoItem.jsx';

const ToDoList = ({ tasks, onToggle, onEdit }) => {
    return (
        <div>
            <ul className="tasks">
                {tasks.map((task) => (
                    <TodoItem key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;