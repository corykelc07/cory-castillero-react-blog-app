import { Link } from "react-router";
import { useTheme } from "../ThemeContext";

function Header() {
    const {toggleTheme} = useTheme();
    return (
    <div className="bg-sky-500 text-white py-4 shadow">
        <h1 className="text-2xl font-bold text-center mb-2">My Blog</h1>
        <nav>
            <ul className="flex justify-center space-x-6 text-lg font-medium">
                <li className="hover:text-yellow-300 cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-yellow-300 cursor-pointer">About</li>
                <li className="hover:text-yellow-300 cursor-pointer">
                    <Link to="/contact">Contact</Link>
                </li>
                <button onClick={toggleTheme}> Toggle Theme</button>
            </ul>
        </nav>

    </div>
    );
}
export default Header;