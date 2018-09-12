import React from "react"

import WillowLogoLink from "./logoLink"

export default () => (
    <footer className="willow-page-footer" role="contentinfo">
        <div className="container-fluid">
            <div className="willow-page-footer__container">
                <div className="willow-page-footer__branding">
                    <WillowLogoLink alt="Unum Brand Guidelines logo" />
                </div>
                <small className="willow-page-footer__copyright">© 2018 Unum Group. All rights reserved. Unum is a registered trademark and marketing brand of Unum Group and its insuring subsidiaries.</small>
            </div>
        </div>
    </footer>
)