import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router";

function CommonLayout() {
    return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
    );
    
}

export default CommonLayout