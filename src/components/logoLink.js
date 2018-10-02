import React from "react"

import { Link } from "gatsby"
import logo from "../../images/ux-logo.svg"

export default (props) => (
    <Link 
        to="/"
        className="willow-logo-link"
        aria-label="go to home page"
        ><img className="willow-logo-link__image" src={logo} alt={props.alt} />
    </Link>
)