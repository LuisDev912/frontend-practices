import TodoItem from './TodoItem.jsx';

const ToDoList = ({ tasks, onToggle }) => {

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <TodoItem key={task.id} task={task} onToggle={onToggle} />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;