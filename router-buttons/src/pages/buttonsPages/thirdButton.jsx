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
                    <pre>
                        <code>
                            /start/three
                        </code>
                    </pre>
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