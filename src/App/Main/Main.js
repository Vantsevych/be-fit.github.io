import React from 'react'

import YouAreWhatYouEat from './YouAreWhatTouEat/YouAreWhatYouEat'
import Blog from './Blog/Blog'


const Main = () => {
    return (
        <main className="main-block">
            <div className="content">
                <div className="container YouAreWhatYouEat">
                    <YouAreWhatYouEat/>
                </div>
            </div>


            <div className="blog">
                <div className="container blog-container">
                    <Blog/>
                </div>
            </div>

{/* My nission */}
            <div className="my-mission">
                <div className="container mission-container">
                    <div className="row mission-row">
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
                            <img src="dietitian3-about-pic1.png" alt="y" />
                        </div>
                    </div>
                </div>
            </div>

{/* <!-- Price --> */}

            <div className="price">
                <div className="container container-price">
                    <div className="row row-price">

                        <div className="col-lg-12 plans">
                            Pricing plans
                            </div>

                        <div className="col-lg-4 price-col">
                            <div className="price-list-1">
                                <div className="dollar">$9</div>
                                <h3 className="packet">Start plan</h3>
                                <p className="price-proposition">
                                    <strong>Sed ut perspiciatis </strong>
                                        unde omnis iste natus error sit voluptatem accusantium.
                                    </p>
                                <a className="price-button" href="/">
                                    Choose
                                </a>
                            </div>
                        </div>


                        <div className="col-lg-4 price-col">
                            <div className="price-list-2">
                                <div className="dollar">$24</div>
                                <h3 className="packet">Best choise <br /> plan</h3>
                                <p className="price-proposition">
                                    <strong>Stet clita kasd gubergren, no sea </strong>
                                    takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor.
                                </p>
                                <a className="price-button-2" href="/">
                                    Choose
                                </a>
                            </div>
                        </div>


                        <div className="col-lg-4 price-col">
                            <div className="price-list-3">
                                <div className="dollar">$49</div>
                                <h3 className="packet">Family plan</h3>
                                <p className="price-proposition">
                                    <strong>Ut wisi enim ad minim </strong>
                                    quis nostrud exerci tation ullamcorper suscipit.
                                </p>
                                <a className="price-button" href="/">
                                    Choose
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-12 price-footer-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Velit, amet quibusdam. Modi, accusantium nulla ipsam eos soluta
                            laboriosam laborum sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, optio?
                        </div>

                        <hr className="price-footer-line" />

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main