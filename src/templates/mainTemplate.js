import React from "react"
import { graphql } from "gatsby"

import navData from "../../content/secondaryNavData.json"
import Layout from "../components/Layout"
import Overview from "../components/overview"
import WillowSecondaryNav from "../components/secondaryNav"
import LinkList from "../components/linkList"

export default ({ data }) => {
    const frontmatter = data.markdownRemark.frontmatter
    const resourceLinks = frontmatter.resources
    const relatedMethods = frontmatter.relatedMethods

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
                            <section>{frontmatter.instructions}</section>
                            {
                                frontmatter.overview ? 
                                    <Overview overview={frontmatter.overview} />
                                : null
                            }
                            {
                                relatedMethods || resourceLinks ? 
                                    <div className="related-content">
                                        {
                                            relatedMethods ? 
                                                <LinkList
                                                    heading="Related Methods" 
                                                    links={relatedMethods}
                                                    prefix="/user-research-guidelines" />
                                            : null
                                        }
                                        {
                                            resourceLinks ? 
                                                <LinkList 
                                                    heading="Resources"
                                                    links={resourceLinks} 
                                                    externalLinks="true" />
                                            : null
                                        }
                                    </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
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