import { use, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='box'>
            <h2>The buttons will be displayed here</h2>
            <div className='buttons'>
                <button>button example</button>
            </div>
        </div>
    )
}

export default Counter;