import TodoItem from './TodoItem.jsx';

const ToDoList = ({ tasks, onToggle }) => {

    return (
        <div>
            {tasks.map((task) => (
                <TodoItem key={task.id} task={task} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default ToDoList;