import React, { Fragment } from "react"

import Overview from "../components/overview"

export default ({ data }) => {
    const docs = data.markdownRemark;
    return (
        <Fragment>
            <h1>{docs.frontmatter.title}</h1>
            <section dangerouslySetInnerHTML={{ __html: docs.html }} />
            <section>{docs.frontmatter.instructions}</section>
            <Overview overview={docs.frontmatter.overview} />

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
        </Fragment>
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
        }
    }
`