import React from "react"

import styles from "../styles/_styles.scss"

import WillowPageHeader from "../components/pageHeader"
import WillowSkipNav from "../components/skipNav"
import WillowPageFooter from "../components/pageFooter"
import WillowSecondaryNav from "../components/secondaryNav"

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const page = this.props.history.location.pathname
        const navData = this.props.data.allMarkdownRemark.edges
        const navDataArray = Object.keys(navData)
        let navItems = []

        navDataArray.map((key) => {            
            navItems.push(navData[key].node.frontmatter)
            return(navItems)
        })

        return (
            <div className="willow-page-container">
                <WillowSkipNav />
                <WillowPageHeader />
                <main className="willow-page-content flex-grow" id="mainContent">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <WillowSecondaryNav 
                                    navItems={ navItems }
                                    page={ page }
                                />
                            </div>
                            <div className="col-md-9">
                                { this.props.children() }
                            </div>
                        </div>
                    </div>
                </main>
                <WillowPageFooter />
            </div>
        )
    }
}

export default App;


export const query = graphql`
    query NavQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        url
                    }
                }
            }
        }
    }
`