import { Activity, useState } from "react";

// child components
import GenerateButton from './GenerateButton.jsx';
import OperationDIsplay from "./OperationDisplay.jsx";
import AnswerForm from "./AnswerForm.jsx";

function Game(){
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [correct, isCorrect] = useState(false);

    const randomGenerate = () =>{
        const a = Math.floor(Math.random() * 50) + 1;
        const b = Math.floor(Math.random() * 50) + 1;

        setFirstNumber(a)
        setSecondNumber(b)
        isCorrect(false);
    }

    const handleValidation = (answer) =>{
        isCorrect(firstNumber + secondNumber === answer)
    }

    return(
        <section className="box">
            <OperationDIsplay numOne={firstNumber} numTwo={secondNumber}/>
            <GenerateButton onGenerate={randomGenerate} />

            <AnswerForm onValidate={handleValidation} />

            <Activity mode={correct ? "visible" : "hidden"}>
                <p
                    style={{
                        color: '#1cdd66'
                    }}
                >
                    This is correct!
                </p>
            </Activity>

        </section>
    )
}

export default Game;