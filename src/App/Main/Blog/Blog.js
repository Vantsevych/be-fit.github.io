import React from 'react'

import pict1 from './dietitian3-blog-pic1.png'
import pict2 from './dietitian3-blog-pic2.png'
import pict3 from './dietitian3-blog-pic3.png'
import pict4 from './dietitian3-blog-pic4.png'
import iconHurt from './icon-hurt.png'


const Blog = () => {
    return (
        <div className="row row-blog">

            <div className="col-lg-12">
                <h3 className="blog-h3">Plenty of recipes, advices and good stuff ;)</h3>
            </div>

            <div className="col-lg-6 blog-1">
                <img src={pict1} alt="" />
            <div className="likes">
                <img className="hurt-icon" src={iconHurt} alt="" />
                <span className="counter">95</span>
            </div>

            <div className="blod-1-user">
                <ul className="post-categories">
                    <li className="categories-tag">
                        <a href="/">Breakfasts</a>
                    </li>
                    <li className="categories-tag">
                        <a href="/">Diet tips</a>
                    </li>
                    <li className="categories-tag">
                        <a href="/">Recipies</a>
                    </li>
                </ul>

                <h4 className="entry-title">Luptatum zzril delenit augue</h4>

                <div className="post-excerpt">
                    Dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua.
                </div>

                <div className="line"></div>

                <div className="post-footer">
                    <span className="autor-card">
                        <img className="autor" src="icon-autor.png" alt="" />
                        <span className="name">
                            <a href="/">admin</a>
                        </span>
                    </span>
                    <span className="date-on">
                        <img className="icon-clock" src="clock.png" alt="" />
                        <span className="date">February 9, 2021</span>
                    </span>
                    <div className="read-more">
                        <a href="/"> Read more...</a>
                    </div>
                </div>
            </div>

        </div>


        <div className="col-lg-6 blog-2">
            <img src={pict2} alt="" />

            <div className="likes">
                <img className="hurt-icon" src={iconHurt} alt="" />
                <span className="counter">95</span>
            </div>

            <div className="blod-2-user">
                <ul className="post-categories">
                    <li className="categories-tag">
                        <a href="/">Advices</a>
                    </li>
                    <li className="categories-tag">
                        <a href="/">Breakfasts</a>
                    </li>
                    <li className="categories-tag">
                        <a href="/">Recipies</a>
                    </li>
                </ul>

                <h4 className="entry-title">Tation ullamcorper suscipit</h4>
                <div className="post-excerpt">
                    Eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                </div>

                <div className="line"></div>

                <div className="post-footer">
                    <span className="autor-card">
                        <img className="autor" src="icon-autor.png" alt="" />
                        <span className="name">
                            <a href="/">admin</a>
                        </span>
                    </span>
                    <span className="date-on">
                        <img className="icon-clock" src="clock.png" alt="" />
                        <span className="date">February 9, 2021</span>
                    </span>
                    <div className="read-more">
                        <a href="/"> Read more...</a>
                    </div>
                </div>
            </div>

        </div>

        <div className="col-lg-6 blog-3">

            <img src={pict3} alt="o" />
            
            <div className="likes">
                <img className="hurt-icon" src={iconHurt} alt="" />
                <span className="counter">95</span>
            </div>

            <div className="blod-3-user">
                <ul className="post-categories">
                    <li className="categories-tag">
                        <a href="/">Advices</a>
                    </li>
                    <li className="categories-tag">
                        <a href="/">Diet tips</a>
                    </li>
                    <li className="categories-tag">
                        <a href="/">Excercises</a>
                    </li>
                </ul>

                <h4 className="entry-title">Luptatum zzril delenit augue</h4>

                <div className="post-excerpt">
                    Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </div>

                <div className="line"></div>

                <div className="post-footer">
                    <span className="autor-card">
                        <img className="autor" src="icon-autor.png" alt="" />
                        <span className="name">
                            <a href="/">admin</a>
                        </span>
                    </span>
                    <span className="date-on">
                        <img className="icon-clock" src="clock.png" alt="" />
                        <span className="date">February 9, 2021</span>
                    </span>
                    <div className="read-more">
                        <a href="/"> Read more...</a>
                    </div>
                </div>
            </div>

        </div>

        <div className="col-lg-6 blog-4">

            <img src={pict4} alt="" />

            <div className="likes">
                <img className="hurt-icon" src={iconHurt} alt="" />
                <span className="counter">95</span>
            </div>

            <div className="blod-4-user">
                <ul className="post-categories">
                    <li className="categories-tag">
                        <a href="/">Diet tips</a>
                    </li>
                    <li className="categories-tag">
                        <a href="/">Lunch</a>
                    </li>
                    <li className="categories-tag">
                        <a href="/">Recipies</a>
                    </li>
                </ul>

                <h4 className="entry-title">Lobortis nisl ut aliquip</h4>

                <div className="post-excerpt">
                    Labore et dolore magna aliquyam erat, sed diam voluptua.
                </div>

                <div className="line"></div>

                <div className="post-footer">
                    <span className="autor-card">
                        <img className="autor" src="icon-autor.png" alt="" />
                        <span className="name">
                            <a href="/"> admin</a>
                        </span>
                    </span>
                    <span className="date-on">
                        <img className="icon-clock" src="clock.png" alt="" />
                        <span className="date">February 9, 2021</span>
                    </span>
                    <div className="read-more">
                        <a href="/"> Read more...</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
    )
}


export default Blog