import React from "react"
import { graphql } from "gatsby"

import navData from "../../content/secondaryNavData.json"
import Layout from "../components/Layout"
import WillowSecondaryNav from "../components/secondaryNav"

export default ({ data }) => {
    const frontmatter = data.markdownRemark.frontmatter

    return (
        <Layout>
            <main className="willow-page-content flex-grow" id="mainContent">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <WillowSecondaryNav 
                                heading={ navData.menuName}
                                navItems={ navData.menuItems }
                                page={ data.markdownRemark.fields.slug }
                            />
                        </div>
                        <div className="col-md-9">
                            <h1>{frontmatter.title}</h1>
                            <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
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