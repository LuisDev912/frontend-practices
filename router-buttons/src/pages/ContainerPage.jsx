import { useNavigate } from "react-router";

export default function ContainerPage(){
    const navigate = useNavigate();

    return(
        <section>
            <p>
                Now that you are here, you can click any of the following buttons:
            </p>
            <div className="buttonsContainer">
                <button
                    onClick={() => navigate('/start/one')}
                >
                    First button
                </button>

                <button
                    onClick={() => navigate('/start/two')}
                >
                    Second button
                </button>

                <button
                    onClick={() => navigate('/start/three')}
                >
                    Third button
                </button>
            </div>
        </section>
    );
};