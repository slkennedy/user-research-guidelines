import React from "react"
import { Link } from "gatsby"

export default () => (
    <nav className="willow-primary-nav" role="navigation" aria-label="primary">
        <h1 className="willow-primary-nav__heading sr-only">Site Primary Menu</h1>
        <ul className="willow-primary-nav__list">
            <li className="willow-primary-nav__item">
                <Link
                    className="willow-primary-nav__link" 
                    to="/">User Research Guidelines</Link>
            </li>
        </ul>
    </nav>
)
