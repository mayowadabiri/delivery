import Logo from "../Images/logo.svg"


const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={Logo} alt="logo-1" />
            </div>
            <nav className>
                <ul className="navlinks">
                    <li className="animate__animated animate__wobble animate__slower	4s"><a href="#home">Home</a></li>
                    <li className="animate__animated animate__wobble animate__slower	4s"><a
                        href="#services">Services</a></li>
                    <li className="animate__animated animate__wobble animate__slower	4s"><a href="#Pricing">Pricing</a>
                    </li>
                    <li className="animate__animated animate__wobble animate__slower	4s"><a href="#FAQ">FAQ</a></li>
                    <li className="animate__animated animate__wobble animate__slower	4s"><a href="#Contact">Contact
                        Us</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header