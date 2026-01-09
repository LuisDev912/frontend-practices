import { useRef } from "react";
import { SendButton } from "../assets/SendButton.jsx";

function AnswerForm({ onValidate }){
    const answerRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = Number(answerRef.current.value);
        onValidate(value)
        answerRef.current.value = ''
    }

    return(
        <form 
            id="answer-form"
            onSubmit={handleSubmit}
            aria-label="Answer submission form"
        >
            <label htmlFor="answer-input" className="sr-only">Your answer: </label>
            <input 
                name="answer-input"
                id="answer-input"
                type="number"
                placeholder="type the result"
                min="0"
                required
                ref={answerRef}
                aria-describedby="answer-help"
            />

            <button
                id="answer-submit"
                type="submit"
                aria-label="Submit your answer"
            >
                <SendButton />
            </button>
        </form>
    )
};

export default AnswerForm;