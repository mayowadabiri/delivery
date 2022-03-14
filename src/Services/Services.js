import ServiceItem from "../ServiceItem/ServiceItem";
import Title from "../Title/Title";
import iPhone from "../Images/iphone-image.svg";
import SmallLogo1 from "../Images/small-logo-1.svg";
import SmallLogo2 from "../Images/small-logo-2.svg";
import SmallLogo3 from "../Images/small-logo-3.svg";
import SmallLogo4 from "../Images/small-logo-4.svg";

const Service = () => {
  return (
    <section id="services" class="section-2">
      <div class="services">
        <Title title="Services" />
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc
          non tellus nullam ultrices <br />
          netus mauris, phasellus.
        </p>
      </div>
      <div class="iphone-grid">
        <div class="iphone-1">
          <div class="iphone">
            <img src={iPhone} alt="iphone" />
          </div>
        </div>
        <div class="wrapper">
          <div class="wrap-flex">
            <ServiceItem image={SmallLogo1} title="Street Delivery" />
            <ServiceItem image={SmallLogo2} title={"City Delivery"} />
          </div>
          <div class="wrap-flex-1">
            <ServiceItem image={SmallLogo3} title="Tracking Aplication" />
            <ServiceItem image={SmallLogo4} title="Packaging" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
