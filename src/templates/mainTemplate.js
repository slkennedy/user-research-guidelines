import React, { Fragment } from "react"

import Overview from "../components/overview"
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
                        <section>{docs.frontmatter.instructions}</section>
                        {
                            docs.frontmatter.overview ? 
                                <Overview overview={docs.frontmatter.overview} />
                            : null
                        }

                        {/* I don't like these class names - secondary-content and extra-content */}
                        {
                            docs.frontmatter.resources ? 
                                <section className="secondary-content">
                                    <h2 className="secondary-content__heading">Resources:</h2>
                                    {
                                        docs.frontmatter.resources.map((item, index) => {
                                            return (
                                                <a className="secondary-content__link" href={item.url} key={index} target="_blank">{item.text}</a>
                                            )
                                        })
                                    }
                                </section>
                            : null
                        }
                        {
                            docs.frontmatter.relatedMethods ? 
                                <section className="extra-content">
                                    <h2 className="extra-content__heading">Related Methods:</h2>
                                    {
                                        docs.frontmatter.relatedMethods.map((item, index) => {
                                            return (
                                                <a className="extra-content__link" href={item.url} key={index} target="_blank">{item.text}</a>
                                            )
                                        })
                                    }
                                </section>
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