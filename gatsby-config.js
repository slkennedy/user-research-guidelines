module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/content`
            }
        },
        `gatsby-transformer-remark`
    ],
    pathPrefix: "/user-research-guidelines"
}
