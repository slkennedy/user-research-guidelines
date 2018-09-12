import React from "react"

export default ({ ...props }) => {
    return(
        <nav className="willow-secondary-nav" role="navigation" aria-label="secondary">
            <h1 className="willow-secondary-nav__heading">Methods</h1>
            <ul className="willow-secondary-nav__list">
            {
                props.navItems.map((item, index) => {
                    return (
                        <li className="willow-secondary-nav__item" key={index}>
                            <a className={"willow-secondary-nav__link" + (props.page === item.url ? " willow-secondary-nav__link--active" : "")} href={item.url} id={item.navigationId}>{item.title}</a>
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
}
