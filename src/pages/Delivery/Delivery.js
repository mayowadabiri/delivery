import Season from '../../Images/seaaaa.png';
import Plane from '../../Images/planeee.png';
import Workers from '../../Images/workerssss.png';
const Delivery = () => {
    return (
        <div class="section-5">
            <div class="sea-image">
                <img src={Season} alt="sea-image" />
            </div>
            <div class="airplane-image">
                <img src={Plane} alt="plane" />
            </div>
            <div class="workers">
                <img src={Workers} alt="worker" />
            </div>
        </div>
    )
}

export default Delivery;