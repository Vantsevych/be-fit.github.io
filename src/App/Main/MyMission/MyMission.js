import React from 'react'

import fruits from './fruits.png'

const MyMission = () => {
    return (
        <>
            <div className="col-lg-6 mission-left">
                <h3>My mission is to give you a guideline for your health.</h3>
                <p>Sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                <div className="mission-btn">
                    <a href="/">Subscribe</a>
                </div>
            </div>
            
            <div className="col-lg-6 mission-right">
                <img src={fruits} alt="" />
            </div>
        </>
    )
}

export default MyMission