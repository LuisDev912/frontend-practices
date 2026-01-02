import { useNavigate } from "react-router";

export default function NotFoundPage(){
    const navigate = useNavigate();

    return(
        <section>
            <h2>Opps!</h2>
            <p>The page you were looking for does not exist. Click the next button to return to the main page</p>

            <button>
                Home
            </button>
        </section>
    )
}