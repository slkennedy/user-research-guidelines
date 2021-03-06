const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if(node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode, basePath: `content`})
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
        createNodeField({
            node,
            name: `overview`
        })
        createNodeField({
            node,
            name: `instructions`
        })
        createNodeField({
            node,
            name: `resources` 
        })
        createNodeField({
            node,
            name: `relatedMethods`
        })
        createNodeField({
            node,
            name: `navigationId`
        })
        createNodeField({
            node,
            name: `url`
        })
    }
}

exports.createPages = ({ graphql, actions}) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark(filter: { frontmatter: { publish: { ne: false }}}) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                publish
                            }
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/mainTemplate.js`),
                    context: {
                        slug: node.fields.slug
                    }
                })
            })
            resolve()
        })
    })
}