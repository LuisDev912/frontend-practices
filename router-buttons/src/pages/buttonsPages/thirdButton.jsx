import { useNavigate } from "react-router";

export default function thirdButton(){
    const navigate = useNavigate();

    return(
        <section>
            <p>
                The first button leads to this page.
                <br />
                This is a different page, so the url may look like this:
                <div className="url">
                    <code>
                        /start/three
                    </code>
                </div>
            </p>
            <div className="buttonsContainer">
                <button
                    onClick={() => navigate('/start')}
                >
                    Previous page
                </button>

                <button
                    onClick={() => navigate('/')}
                >
                    Home
                </button>
            </div>
        </section>
    );
};