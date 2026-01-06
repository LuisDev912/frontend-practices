import { useState } from "react";

// child component
import GenerateButton from './GenerateButton.jsx';

function Game(){
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    const randomGenerate = () =>{
        const a = Math.floor(Math.random() * 50) + 1;
        const b = Math.floor(Math.random() * 50) + 1;

        setFirstNumber(a)
        setSecondNumber(b)
    }

    return(
        <section className="box">
            <h1>{firstNumber} + {secondNumber}</h1>
            <GenerateButton onGenerate={randomGenerate} />
        </section>
    )
}

export default Game;