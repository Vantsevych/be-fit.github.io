import React from 'react'

const PriceProposition = ({
    dollar,
    packet,
    textStrong,
    text,
    btnPrice,
}) => {
    return (
        <div className="col-lg-4 price-col">
            <div className="price-list-1">
                <div className="dollar">${dollar}</div>
                <h3 className="packet">{packet}</h3>
                <p className="price-proposition">
                    <strong>{textStrong} </strong>
                    {text}
                </p>
                <a className="price-button" href="/">
                    {btnPrice}
                </a>
            </div>
        </div>

    )
}

export default PriceProposition