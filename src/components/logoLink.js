import React from "react"

import logo from "../../images/ux-logo.svg"

export default (props) => (
    <a className="willow-logo-link" href="/" aria-label="go to home page">
        <img className="willow-logo-link__image" src={logo} alt={props.alt} />
    </a>
)