import { Outlet } from "react-router";
import { Header, Footer } from "../components/Semantic.jsx";

function MainLayout() {
    return (
        <>
            <Header />

            <main
                id="main-content"
                tabIndex='-1'
            >
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;