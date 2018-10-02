import React from "react"

import styles from "../styles/_styles.scss"

import WillowPageHeader from "./pageHeader"
import WillowSkipNav from "./skipNav"
import WillowPageFooter from "./pageFooter"

export default ({children}) => (
    <div className="willow-page-container">
        <WillowSkipNav />
        <WillowPageHeader />
        {children}
        <WillowPageFooter />
    </div>
)
