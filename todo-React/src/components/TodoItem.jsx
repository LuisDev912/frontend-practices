import {useState} from 'react';

function Pencil() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="2em"
            height="1.5em">
            <path
                fill="currentColor"
                d="M13.8 2.2a2.51 2.51 0 0 0-3.54 0l-6.9 6.91l-1.76 3.62a1.26 1.26 0 0 0 1.12 1.8a1.2 1.2 0 0 0 .55-.13l3.62-1.76l6-6l.83-.82l.06-.06a2.52 2.52 0 0 0 .02-3.56m-.89.89a1.25 1.25 0 0 1 0 1.77l-1.77-1.77a1.24 1.24 0 0 1 .86-.37a1.22 1.22 0 0 1 .91.37M2.73 13.27L4.29 10L6 11.71zm4.16-2.4L5.13 9.11L10.26 4L12 5.74z"
            ></path>
        </svg>
    )
}

const TodoItem = ({ task, onToggle, onEdit }) => {
    const [editable, setEditable] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const textStyle = {
        textDecoration: task.completed ? 'line-through' : 'none',
        textDecorationColor: task.completed ? 'gray' : 'inherit',
        opacity: task.completed ? '0.6' : 'inherit'
    };

    function changeCheckbox() {
        onToggle(task.id);
    }

    function handleEditSubmit(e) {
        e.preventDefault();
        if (newText.trim()) {
            onEdit(task.id, newText);
            setEditable(false);
        }
    }

    function changeEditable() {
        setEditable(!editable);
    }

        return (
            <li>
                <input aria-label="mark task as done" type="checkbox" id={`task-${task.id}`} checked={task.completed} onChange={changeCheckbox} />

                {editable ? (
                    <form onSubmit={handleEditSubmit} style={{ display: 'inline' }}>
                        <input
                            type="text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                            onBlur={handleEditSubmit}
                            autoFocus
                        />
                    </form>
                ) : (
                    <label
                        aria-label="task"
                        style={textStyle}
                        htmlFor={`task-${task.id}`}
                    >
                        {task.text}
                    </label>
                )}


                <button aria-label="edit task" onClick={changeEditable}>
                    {Pencil()}
                </button>
            </li>
        );
    };

export default TodoItem;