import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    if(count === 25) alert('yes, this really works');

    if(count === 50){
        alert('I will help you')
        setCount(prev => prev + 50)
    }

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