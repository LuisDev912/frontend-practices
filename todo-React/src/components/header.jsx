const Header = ({ completed = 0, total = 0 }) => {
    return (
        <>
            <h1>To-Do list</h1>
            <section className="tasks-info">
                <p>
                    {completed} / {total}
                </p>
            </section>
        </>
    );
}

export default Header;
