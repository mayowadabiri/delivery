import Popular from "../../Images/popular.svg";

import { useState } from "react";
import Link from "../../components/Link/Link"
import Card from "../../components/Card/Card"

import { pricing } from "../../constants/index"
const plans = {
    basic: {
        monthly: 49,
        yearly: 499
    },
    pro: {
        monthly: 99,
        yearly: 999
    },
    business: {
        monthly: 199,
        yearly: 1299
    }
}


// return {

//     id: 1,
//     plan: "Something ese ",
//     class: "table",
//     price: "49",
//     features: [
//         {
//             id: "1",
//             title: "Local delivery",
//             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Malesuada"
//         },
//         {
//             id: "2",
//             title: "Local delivery",
//             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Malesuada"
//         },
//         {
//             id: "3",
//             title: "Local delivery",
//             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Malesuada"
//         },
//     ]
// }


console.log(plans['business'])

const Price = () => {
    const [time, setTime] = useState('monthly');
    const [plan, setPlan] = useState(pricing);

    const handlePrice = (priceType) => {
        setTime(priceType)
        setPlan(plan.map(item => {
            return {
                ...item,
                price: priceType === "monthly" ? plans[item.plan].monthly : plans[item.plan].yearly
            }
        }))
    }
    return (
        <section id="Pricing" className="section-4">
            <div className="price-text">
                <h2>Price</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non tellus<br /> nullam ultrices netus
                    mauris, phasellus.</p>
            </div>
            <div className="main-price">
                <div className="plan-switch-container">
                    <span className={`monthly ${time === "monthly" && "active"}`} onClick={() => handlePrice("monthly")}>Monthly</span>
                    <span className={`yearly ${time === "yearly" && "active"}`} onClick={() => handlePrice("yearly")}>Yearly</span>
                </div>
            </div>
            <div className="pricing-table">
                {plan.map((item => (
                    <Card
                        key={item.id}
                        plan={item.plan}
                        price={item.price}
                        feat={item.features}
                        img={item.img}
                        cssStyle={item.class}
                        time={time}
                    />
                )))}

            </div>
        </section >
    )
}

export default Price