import { useNavigate } from "react-router";

export default function secondButton(){
    const navigate = useNavigate();

    return(
        <section>
            <p>The second button leads to this page.</p>
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