import React from 'react'



const BlogList = ({
    image,
    iconHurt,
    iconClock,
    iconUser,
    eat,
    diet,
    recept,
    title,
    text,
    name,
    date,
    readMore,
}) => {
    return (
        <>
            <img src={image} alt="" />
           
           <div className="likes">
               <img className="hurt-icon" src={iconHurt} alt="" />
               <span className="counter">95</span>
           </div>

            <div className="blog-1-user">
                <ul className="post-categories">
                    <li className="categories-tag">
                        <a href="/">{eat}</a>
                    </li>
                    <li className="categories-tag">
                        <a href="/">{diet}</a>
                    </li>
                    <li className="categories-tag">
                        <a href="/">{recept}</a>
                    </li>
                </ul>

                <h4 className="entry-title">{title}</h4>

                <div className="post-excerpt">{text}</div>

                <div className="line"></div>

                <div className="post-footer">
                    <span className="autor-card">
                        <img className="autor" src={iconUser} alt="" />
                        <span className="name">
                            <a href="/">{name}</a>
                        </span>
                    </span>
                    <span className="date-on">
                        <img className="icon-clock" src={iconClock} alt="" />
                        <span className="date">{date}</span>
                    </span>
                    <div className="read-more">
                        <a href="/">{readMore}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogList
