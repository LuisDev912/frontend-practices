import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    return (
        <div className='box'>
            <h2>{ count }</h2>
            <div className='buttons'>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;