import { useState } from "react";

// child components
import GenerateButton from './GenerateButton.jsx';
import OperationDIsplay from "./OperationDisplay.jsx";
import AnswerForm from "./AnswerForm.jsx";

function Game(){
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    const randomGenerate = () =>{
        const a = Math.floor(Math.random() * 50) + 1;
        const b = Math.floor(Math.random() * 50) + 1;

        setFirstNumber(a)
        setSecondNumber(b)
    }

    const validate = (answer) =>{
        if((firstNumber + secondNumber) === answer){
            alert("You're correct")
        }
    }

    return(
        <section className="box">
            <OperationDIsplay numOne={firstNumber} numTwo={secondNumber}/>
            <GenerateButton onGenerate={randomGenerate} />

            <AnswerForm onValidate={validate}/>
        </section>
    )
}

export default Game;