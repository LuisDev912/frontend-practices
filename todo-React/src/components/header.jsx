const Header = ({ completed = 0, total = 0 }) => {
    return (
        <>
            <h1>To-Do list</h1>
            <p>
                {completed} / {total} completed
            </p>
        </>
    );
}

export default Header;
