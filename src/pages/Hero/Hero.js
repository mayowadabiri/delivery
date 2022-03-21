import MyOwnName from "../../Images/hero-strike.svg"
import Header from "../../components/Header/Header"
import Link from '../../components/Link/Link';
const Hero = () => {
    return (
        <section id="Home" className="section-1">
            <div className="white-part">
                <div className="hide-header">
                    <div className="header-3">
                        <div className="logo-container-mobile">
                            <img src="./Images/mobile-header.svg" alt="mobile-logo" />
                        </div>
                        <div className="hamburger">
                            <img src="./Images/hamburger.svg" alt="hamburger-logo" />
                        </div>
                    </div>
                </div>
                <div className="introduction ">
                    <div className="intro-text animate__animated animate__fadeInDown animate__slower	4s">
                        <h1>The <span>fastest <br /> than light</span> delivery <br /> other system to you <br /> next
                            customers</h1>
                        <p>It is easy to register your company and then we will do <br /> all delivery stuff for you very
                            fast.</p>
                    </div>
                    <div className="hero-btn">
                        <button className="register animate__animated animate__jackInTheBox animate__slower	4s">
                            <Link link="/SignUp.html">Register Your Company Now</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="orange-part">
                <div className="hero-section">
                    <div className="hero animate__animated animate__zoomInDown animate__slower	3s">
                        <img src={MyOwnName} alt="hero" />
                    </div>
                    <div className="mobile-hero hero animate__animated animate__zoomInDown animate__slower	3s">
                        <img src="./Images/hero-mobile.svg" alt="mobile-header" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero