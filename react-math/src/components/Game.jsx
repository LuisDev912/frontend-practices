import { useState } from "react";


function Game(){
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    const generateNumbers = () =>{
        setFirstNumber(Math.floor(Math.random() * 100))
        setSecondNumber(Math.floor(Math.random() * 100))
    }

    return(
        <div className="box">
            <h1>{firstNumber} + {secondNumber}</h1>
            <button onClick={generateNumbers}>test</button>
        </div>
    )
}

export default Game;