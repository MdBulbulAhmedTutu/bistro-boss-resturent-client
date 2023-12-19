import { Outlet } from "react-router";
import Footer from "../../shered/Footer/Footer";
import NavBar from "../../shered/navbar/NavBar";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;