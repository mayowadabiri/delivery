import Logo from "../../Images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to="/"><img src={Logo} alt="logo-1" /></Link>
            </div>
            <nav className>
                <ul className="navlinks">
                    <li className="animate__animated animate__wobble animate__slower	4s">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="animate__animated animate__wobble animate__slower	4s">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="animate__animated animate__wobble animate__slower	4s">
                        <Link to="/Pricing">Pricing</Link>
                    </li>
                    <li className="animate__animated animate__wobble animate__slower	4s">
                        <Link to="/FAQ">FAQ</Link>
                    </li>
                    <li className="animate__animated animate__wobble animate__slower	4s">
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
