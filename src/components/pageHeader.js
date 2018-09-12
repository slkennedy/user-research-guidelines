import React from "react"

import WillowLogoLink from "./logoLink"
import WillowPrimaryNav from "./primaryNav"

export default () => (
    <header className="willow-page-header" role="banner">
        <div className="container-fluid">
            <div className="willow-page-header__container">
                <div className="willow-page-header__branding">
                    <WillowLogoLink alt="Unum Brand Guidelines logo" />
                </div>
                <div className="willow-page-header__content">
                    <div className="willow-page-header__navigation"><WillowPrimaryNav /></div>
                </div>
            </div>
        </div>
    </header>
)