import { useNavigate } from "react-router";

export default function HomePage(){
    const navigate = useNavigate();

    return(
        <section>
            <h3>See how React-Router works</h3>
            <p>
                In this page, you will have 3 buttons for each page. Each button leads you to a different page.
                <br />
                To start, click the next button to start:
            </p>

            <button
                onClick={() => navigate('./start')}
            >
                Start
            </button>
        </section>
    );
};