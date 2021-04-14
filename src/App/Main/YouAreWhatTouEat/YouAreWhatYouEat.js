import React from 'react'

import list from './list'
import YouAreWhatYouEatItem from './YouAreWhatYouEatItem'



const YouAreWhatYouEat = () => {
    return (
        <>
            <div className="row row-content">
                <div className="col-lg-12 content-title">
                    <h3>You are what you eat tempor incididunt ut labore et dolore magna alique.</h3>
                </div>
            </div>

             <div className="row row-columns">

                {
                    list.map ( ({
                        image,
                        text
                    }) => (
                        <div className="col-lg-4 theme-diet">
                            <YouAreWhatYouEatItem
                                image={image}
                                text={text}
                            />
                        </div>
                    ))
                }
                

                {/* <div className="col-lg-4 theme-diet">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="col-lg-9">
                            <h4 className="theme-diet-h"> </h4>
                            Luptatum zzril delenit augue duis dolore.
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 theme-diet">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="col-lg-9">
                            <h4 className="theme-diet-h"> </h4>
                            Stet clita kasd tempor diam nonummy!
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 theme-diet">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={icon7} alt="" />
                        </div>
                        <div className="col-lg-9">
                            <h4 className="theme-diet-h4"> </h4>
                            Kasd gubergren, no sea.
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 theme-diet">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={icon4} alt="" />
                        </div>
                        <div className="col-lg-9">
                            <h4 className="theme-diet-h4"> </h4>
                            Justo duo dolores hendrerit commodo consequat.
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 theme-diet">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={icon6} alt="" />
                        </div>
                        <div className="col-lg-9">
                            <h4 className="theme-diet-h4"> </h4>
                            Invidunt ut labore et dolore magna facilisis at vero.
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 theme-diet">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={icon5} alt="" />
                        </div>
                        <div className="col-lg-9">
                            <h4 className="theme-diet-h4-under"> </h4>
                            Molestie consequat, vel illum.
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 theme-diet">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={icon8} alt="" />
                        </div>
                        <div className="col-lg-9">
                            <h4 className="theme-diet-h4-under"> </h4>
                            Feugait nulla facilisi stet.
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}



export default YouAreWhatYouEat