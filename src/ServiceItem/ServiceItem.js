import SmallLogo1 from "../Images/small-logo-1.svg";

const ServiceItem = (props) => {
    return (
        <div class="wrap-1">
            <div class="circle-1">
                <img src={props.image} alt="small-logo" class="small-logo" />
            </div>
            <div class="i-circle">
                <img src="./Images/circle-mobile.svg" alt="mobile-circle" />
            </div>
            <div class="wrap-text">
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