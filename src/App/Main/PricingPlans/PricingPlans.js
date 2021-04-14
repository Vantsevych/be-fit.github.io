import React from 'react'
import pricePropositions from './pricePropositions'
import PriceProposition from './PriceProposition'


const PricingPlans = () => {
    return (
        <>
            <div className="col-lg-12 plans">
                Pricing plans
            </div>


            {
                pricePropositions.map ( ({
                    dollar,
                    packet,
                    textStrong,
                    text,
                    btnPrice,
                }) => (
                    <PriceProposition
                        dollar={dollar}
                        packet={packet}
                        textStrong={textStrong}
                        text={text}
                        btnPrice={btnPrice}
                    />
                )
                )
            }
            

            {/* <div className="col-lg-4 price-col">
                <div className="price-list-2">
                    <div className="dollar">${dollar}</div>
                    <h3 className="packet">{packet}</h3>
                    <p className="price-proposition">
                        <strong>{textStrong}</strong>
                        {text}
                    </p>
                    <a className="price-button-2" href="/">
                        {btnPrice}
                    </a>
                </div>
            </div>


            <div className="col-lg-4 price-col">
                <div className="price-list-3">
                    <div className="dollar">${dollar}</div>
                    <h3 className="packet">{packet}</h3>
                    <p className="price-proposition">
                        <strong>{textStrong}</strong>
                        {text}
                    </p>
                    <a className="price-button" href="/">
                        {btnPrice}
                    </a>
                </div>
            </div> */}

            <div className="col-lg-12 price-footer-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, amet quibusdam. Modi, accusantium nulla ipsam eos soluta
                laboriosam laborum sequi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, optio?
                        </div>

            <hr className="price-footer-line" />

        </>
    )
}

export default PricingPlans