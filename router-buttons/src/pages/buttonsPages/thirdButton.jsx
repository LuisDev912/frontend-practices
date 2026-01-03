import { useNavigate } from "react-router";

export default function thirdButton(){
    const navigate = useNavigate();

    return(
        <section>
            <p>The third button leads to this page.</p>
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