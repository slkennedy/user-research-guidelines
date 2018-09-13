import React from "react"
import Link from "gatsby-link"

export default ({ ...props }) => {
    return(
        <nav className="willow-secondary-nav" role="navigation" aria-label="secondary">
            <h1 className="willow-secondary-nav__heading">Methods</h1>
            <ul className="willow-secondary-nav__list">
            {
                props.navItems.map((item, index) => {
                    if(item.url) {
                        console.log(props.page)
                        console.log(item.url)
                        console.log(props.page === item.url)
                        console.log((props.page === item.url ? "willow-secondary-nav__link willow-secondary-nav__link--active" : "willow-secondary-nav__link"))
                        
                        return (
                            <li className="willow-secondary-nav__item" key={index}>
                                <Link 
                                    to={item.url} 
                                    className={(props.page === item.url ? "willow-secondary-nav__link willow-secondary-nav__link--active" : "willow-secondary-nav__link")}
                                    >{item.title}
                                </Link>
                            </li>
                        )
                    }
                })
            }
            </ul>
        </nav>
    )
}
