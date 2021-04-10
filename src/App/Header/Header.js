import React from 'react'



const Header = () => {
    return (
        <header class="header">
            <div class="container container-menu">
                <div class="row row-menu">
                    <div class="col-lg-3 logo">
                        <img class="logo-icon" src="dietitian.png" alt="j" />
                    </div>
                    <div class="col-lg-9 menu">
                        <ul class="menu-ul">
                            <li class="menu-li-1">
                                <a class="menu-a" href="/"> Home </a>
                            </li>
                            <li class="menu-li-2">
                                <a class="menu-a" href="/"> Blog </a>
                            </li>
                            <li class="menu-li-3">
                                <a class="menu-a" href="/"> Service and Pricing </a>
                            </li>
                            <li class="menu-li-4">
                                <a class="menu-a" href="/"> About </a>
                            </li>
                            <li class="menu-li-5">
                                <a class="menu-a" href="/"> Contact </a>
                            </li>
                            <li class="menu-li-6">
                                <a class="menu-a" href="/"> Buy now </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="container">
                <row class="row-btn">
                    <div class="col-lg-12 slider-title">
                        Your diet can be <br /> tasty and fun
                        </div>
                    <div class="col-lg-12 btn-slider">
                        <button>Discover recipes</button>
                    </div>
                </row>
            </div>

            <div class="slider">
                <img src="portrait-woman-with-long-brown-hair-looking-camera-with-green-apple-hand-isolated-white.jpg"
                    alt="" />
            </div>
        </header>
    )
}

export default Header