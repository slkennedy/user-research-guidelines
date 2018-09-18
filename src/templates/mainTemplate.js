import React, { Fragment } from "react"

import Overview from "../components/overview"
import WillowSecondaryNav from "../components/secondaryNav"
import LinkList from "../components/linkList"

export default ({ data }) => {
    const docs = data.markdownRemark;
    const page = data.markdownRemark.fields.slug;
    const navData = data.allMarkdownRemark.edges;
    const resourceLinks = data.markdownRemark.frontmatter.resources;
    const relatedMethods = data.markdownRemark.frontmatter.relatedMethods;

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
                        <section>{docs.frontmatter.instructions}</section>
                        {
                            docs.frontmatter.overview ? 
                                <Overview overview={docs.frontmatter.overview} />
                            : null
                        }

                        {/* I don't like these class names - secondary-content and extra-content */}
                        {
                            resourceLinks ? 
                                <LinkList 
                                    heading="Resources"
                                    links={resourceLinks} 
                                    externalLinks="true" />
                            : null
                        }
                        {
                            relatedMethods ? 
                                <LinkList
                                    heading="Related Methods" 
                                    links={relatedMethods}
                                    prefix="/user-research-guidelines" />
                            : null
                        }     
                    </div>
                </div>
            </div>
        </main>            
    )
}

export const query = graphql`
    query MainQuery($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug }}) {
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