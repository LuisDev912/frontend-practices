import { useState } from "react";

const TodoItem = ({ task }) => {
    const [isChecked, setChecked] = useState(false);

    const textStyle = {
        textDecoration: isChecked ? 'line-through' : 'none',
        textDecorationColor: isChecked ? 'gray' : 'inherit',
    };

    function changeCheckbox() {
        setChecked(!isChecked);
    }

    return (
        <li>
            <input type="checkbox" id={`task-${task}`} checked={isChecked} onChange={changeCheckbox}/>
            <label style={textStyle} htmlFor={`task-$task`}>{task}</label>
        </li>
    );
};

export default TodoItem; 