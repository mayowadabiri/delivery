import Calendar from "../../Images/calender.svg"
import Packaging from "../../Images/packaging.svg"
import Locations from "../../Images/locate.svg"
import Airplane from "../../Images/airplane.svg"
import Female from "../../Images/asian-young-female-delivery-worker-standing-white-wall-using-mobile-smartphone-talking-with-customer-checking-shipping-address.png"
const Working = () => {
    return (
        <section className="section-3">
            <div className="intro-text-1">
                <h4>How it's working</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non tellus <br /> nullam ultrices netus
                    mauris, phasellus.</p>
            </div>
            <div className="stroke">
                <div className="stroke-pipe"></div>
            </div>

            <div className="four-circle">
                <div className="first-circle">
                    <img src={Calendar} alt="calender" />
                    <h5>Other Verification</h5>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Gravida vitae fermentum </p>
                </div>
                <div className="first-circle">
                    <img src={Packaging} alt="packaging" />
                    <h5>Packaging</h5>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Gravida vitae fermentum </p>
                </div>
                <div className="first-circle">
                    <img src={Locations} alt="locate" />
                    <h5>Verify Parcel</h5>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Gravida vitae fermentum </p>
                </div>
                <div className="first-circle">
                    <img src={Airplane} alt="airplane" />
                    <h5>Delivery</h5>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Gravida vitae fermentum </p>
                </div>
            </div>
            <div className="position-messenger">
                <div className="messenger">
                    <img src={Female}
                        alt="" />
                </div>
            </div>
        </section>
    )
}

export default Working