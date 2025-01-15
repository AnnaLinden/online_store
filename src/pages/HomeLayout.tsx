import { Header } from "@/components";
import { Outlet } from "react-router-dom";


function HomeLayout() {
    return (
        <>
            <Header />
            <nav>Navbar</nav>
            <Outlet />
        </>
    );
};
export default HomeLayout;