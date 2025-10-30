const ToDoList = ({ tasks }) => {
    
    return (
        <div>
            <ul>
                <li>
                    <input type="checkbox" name="checkTask" id="taskCheckbox" />
                    {tasks.map((task, index) => (
                        <label key={index}>{task}</label>
                    ))}
                </li>
            </ul>
        </div>
    )
}

export default ToDoList;