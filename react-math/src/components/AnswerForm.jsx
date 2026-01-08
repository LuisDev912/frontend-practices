import { useRef } from "react";

function AnswerForm({ onValidate }){
    const answerRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = Number(answerRef.current.value);
        onValidate(value)
    }

    return(
        <form 
            id="answer-form"
            onSubmit={handleSubmit}    
        >
            <input 
                type="number"
                placeholder="type the result"
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