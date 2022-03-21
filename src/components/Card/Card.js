import Link from "../Link/Link";
import Popular from "../../Images/popular.svg";

const Card = (props) => {
    return (
        <div className={props.cssStyle}>
            <div className="content">
                <div className="pro">
                    <h4>{props.plan}</h4>
                    {props.img && <img src={Popular} alt="popular" />}
                </div>
                <div className="price1">
                    <span className="amount pro-price">${props.price}</span>
                    <span className="month1 plan-duration">/{props.time}</span>
                </div>
                <ul className="features">
                    {props.feat.map((item) => (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <br />
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
                <div className="get-btn">
                    <Link link="/business.html">Get Started</Link>{" "}
                </div>
            </div>
        </div>
    );
};

export default Card;
