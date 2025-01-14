import { Outlet } from "react-router-dom";

function HomeLayout() {
    return (
        <>
            <header>Header</header>
            <nav>Navbar</nav>
            <Outlet />
        </>
    );
};
export default HomeLayout;