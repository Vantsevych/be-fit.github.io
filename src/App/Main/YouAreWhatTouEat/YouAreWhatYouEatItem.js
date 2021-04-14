import React from 'react'



const YouAreWhatYouEatItem = ({
    image,
    text
}) => {
    return (
        <div className="row">
            <div className="col-lg-3">
                <img src={image} alt="" />
            </div>
            <div className="col-lg-9">
                <h4 className="theme-diet-h"> </h4>
                {text}
            </div>
        </div>
    )
}


export default YouAreWhatYouEatItem