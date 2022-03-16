import SmallLogo1 from "../Images/small-logo-1.svg";

const ServiceItem = (props) => {
    return (
        <div className="wrap-1">
            <div className="circle-1">
                <img src={props.image} alt="small-logo" className="small-logo" />
            </div>
            <div className="i-circle">
                <img src="./Images/circle-mobile.svg" alt="mobile-circle" />
            </div>
            <div className="wrap-text">
                <h4>{props.title}</h4>
                <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                    <br /> Ultrices faucibus quis viverra <br /> facilisis pulvinar
                    diam.
                </p>
            </div>
        </div>
    )
}

export default ServiceItem