import TodoItem from './TodoItem.jsx';

const ToDoList = ({ tasks }) => {
    
    return (
        <div>
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} />
            ))}
        </div>
    )
}

export default ToDoList;