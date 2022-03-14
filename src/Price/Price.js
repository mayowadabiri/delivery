import Popular from "../Images/popular.svg";

import { useState } from "react";


const monthly = {
    basic: 49,
    pro: 99,
    business: 199,
}
const yearly = {
    basic: 499,
    pro: 999,
    business: 1999,
}
const Price = () => {

    const [price, setPrice] = useState('monthly');
    const [plan, setPlan] = useState(monthly);


    const handlePrice = (priceType) => {
        //    "yearly"
        setPrice(priceType)
        if (plan === "monthly") {
            setPlan(monthly)
        } else {
            setPlan(yearly)
        }

    }
    console.log(plan)
    return (
        <section id="Pricing" className="section-4">
            <div className="price-text">
                <h2>Price</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non tellus<br /> nullam ultrices netus
                    mauris, phasellus.</p>
            </div>
            <div className="main-price">
                <div className="plan-switch-container">
                    <span className={`monthly ${price === "monthly" && "active"}`} onClick={() => handlePrice("monthly")}>Monthly</span>
                    <span className={`yearly ${price === "yearly" && "active"}`} onClick={() => handlePrice("yearly")}>Yearly</span>
                </div>
            </div>
            <div className="pricing-table">
                <div className="table">
                    <div className="content">
                        <h3>Basic</h3>

                        <div className="price1">
                            <span className="amount basic-price">${plan.basic}</span>
                            <span className="month1 plan-duration">/ {price}</span>
                        </div>

                        <ul className="features">
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                        </ul>

                        <div className="get-btn">
                            <a href="#">Get Started</a>
                        </div>
                    </div>

                </div>



                <div className="table-1">

                    <div className="content">
                        <div className="pro">
                            <h4>Pro</h4>
                            <img src={Popular} alt="popular" />
                        </div>
                        <div className="price1">
                            <span className="amount pro-price">${plan.pro}</span>
                            <span className="month1 plan-duration">/ {price}</span>
                        </div>

                        <ul className="features">
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                        </ul>

                        <div className="get-btn">
                            <a href="#">Get Started</a>
                        </div>
                    </div>


                </div>



                <div className="table-2">
                    <div className="content">
                        <h3>Business</h3>

                        <div className="price1">
                            <span className="amount business-price">${plan.business}</span>
                            <span className="month1 plan-duration">/ {price}</span>
                        </div>

                        <ul className="features">
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                            <li>
                                <span>Local Delivery</span><br />
                                <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit. Malesuada </p>
                            </li>
                        </ul>
                        <div className="get-btn">
                            <a href="#">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Price