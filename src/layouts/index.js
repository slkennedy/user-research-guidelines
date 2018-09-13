import React from "react"

import styles from "../styles/_styles.scss"

import WillowPageHeader from "../components/pageHeader"
import WillowSkipNav from "../components/skipNav"
import WillowPageFooter from "../components/pageFooter"

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="willow-page-container">
                <WillowSkipNav />
                <WillowPageHeader />
                {this.props.children()}
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