import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Slider from './Slider/Slider'


const Header = () => {
    return (
        <header className="header">
            <div className="container container-menu">
                <div className="row row-menu">
                    <div className="col-lg-3 logo">
                        <Logo/>
                    </div>
                    <div className="col-lg-9 menu">
                        <Menu/>
                    </div>
                </div>
            </div>

            <div className="container">
                <row className="row-btn">
                    <div className="col-lg-12 slider-title">
                        Your diet can be <br /> tasty and fun
                        </div>
                    <div className="col-lg-12 btn-slider">
                        <button>Discover recipes</button>
                    </div>
                </row>
            </div>

                <Slider/>
        </header>
    )
}

export default Header