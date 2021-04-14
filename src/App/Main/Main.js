import React from 'react'

import YouAreWhatYouEat from './YouAreWhatTouEat/YouAreWhatYouEat'
import BlogList from './Blog/BlogList'
import MyMission from './MyMission/MyMission'
import PricingPlans from './PricingPlans/PricingPlans'



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
                    <BlogList/>
                </div>
            </div>

{/* My nission */}
            <div className="my-mission">
                <div className="container mission-container">
                    <div className="row mission-row">
                        <MyMission/>
                    </div>
                </div>
            </div>

{/* <!-- Price --> */}

            <div className="price">
                <div className="container container-price">
                    <div className="row row-price">
                        <PricingPlans/>                  
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main