import { Link } from "react-router";
import { useAuth, useUsername } from "../authWrapper/AuthContext";
import { useNavigate } from "react-router";

function Header() {
    const username = useUsername();
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/Login');
    };
    return (
    <div className="bg-sky-500 text-white py-4 shadow">
        <h1 className="text-2xl font-bold text-center mb-2">My Blog</h1>
        <nav>
            <ul className="flex justify-center space-x-6 text-lg font-medium">
                <li className="hover:text-yellow-300 cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-yellow-300 cursor-pointer"><Link to="/posts">Blog Posts</Link></li>
                <li className="hover:text-yellow-300 cursor-pointer">
                    <Link to="/contact">Contact</Link>
                    </li>
                <li className="hover:text-yellow-300 cursor-pointer">
                        {username ? <p onClick={handleLogout}> Hi {username}, Logout</p> : <Link to="/login">Login</Link> }
                </li>
            </ul>
        </nav>

    </div>
    );
}
export default Header;