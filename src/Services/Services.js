import ServiceItem from "../ServiceItem/ServiceItem";
import Title from "../Title/Title";
import iPhone from "../Images/iphone-image.svg";
import SmallLogo1 from "../Images/small-logo-1.svg";
import SmallLogo2 from "../Images/small-logo-2.svg";
import SmallLogo3 from "../Images/small-logo-3.svg";
import SmallLogo4 from "../Images/small-logo-4.svg";

const Services = () => {
  return (
    <section id="services" className="section-2">
      <div className="services">
        <Title title="Services" />
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc
          non tellus nullam ultrices <br />
          netus mauris, phasellus.
        </p>
      </div>
      <div className="iphone-grid">
        <div className="iphone-1">
          <div className="iphone">
            <img src={iPhone} alt="iphone" />
          </div>
        </div>
        <div className="wrapper">
          <div className="wrap-flex">
            <ServiceItem image={SmallLogo1} title="Street Delivery" />
            <ServiceItem image={SmallLogo2} title={"City Delivery"} />
          </div>
          <div className="wrap-flex-1">
            <ServiceItem image={SmallLogo3} title="Tracking Aplication" />
            <ServiceItem image={SmallLogo4} title="Packaging" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
