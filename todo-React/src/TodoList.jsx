

const ToDoList = ({ tasks }) => {
    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;