import { useRef } from "react";

function AnswerForm({ onValidate, reset }){
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
                type="number"
                placeholder="type the result"
                min="0"
                required
                ref={answerRef}
            />

            <input 
                type="submit" 
                value="send"
            />
        </form>
    )
};

export default AnswerForm;