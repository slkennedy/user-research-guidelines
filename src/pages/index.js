import React from "react"
import WillowSecondaryNav from "../components/secondaryNav"

export default ({ data }) => {
    const docs = data.markdownRemark;
    const page = data.markdownRemark.fields.slug;
    const navData = data.allMarkdownRemark.edges;

    const navDataArray = Object.keys(navData)
    let navItems = []
    
    navDataArray.map((key) => {            
        navItems.push(navData[key].node.frontmatter)
        return(navItems)
    })

    return (
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
                        <h1>{docs.frontmatter.title}</h1>
                        <section dangerouslySetInnerHTML={{ __html: docs.html }} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export const query = graphql`
    query MainIndexQuery {
        markdownRemark(fields: {slug: { eq: "/user-research-guidelines/" }}) {
            html
            frontmatter {
                title
                overview {
                    heading
                    amount
                    description
                }
                resources {
                    text
                    url
                }
                relatedMethods {
                    text
                    url
                }
            }
            fields {
                slug
            }
        }
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