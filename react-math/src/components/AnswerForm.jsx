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
        >
            <input 
                id="answer-input"
                type="number"
                placeholder="type the result"
                min="0"
                required
                ref={answerRef}
            />

            <button
                id="answer-submit"
                type="submit"
            >
                <SendButton />
            </button>
        </form>
    )
};

export default AnswerForm;