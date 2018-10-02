# User Research Guidelines Site

An overview of the top research methods of the Unum UX team.

[https://unumux.github.io/user-research-guidelines/](https://unumux.github.io/user-research-guidelines/)

## Contributing

This site is built using [Gatsby](https://www.gatsbyjs.org/).  

To update the content:

- Clone, fork or work directly on this repo through Github
- All content for this site can be found in the markdown and json files in the Content folder
- Create a new branch for your work
- Make your edits
- Commit your work and push your changes to the repo (on your branch)

To update the code:

- Clone or fork this repo
- Code for this site can be found in the src folder or in the gatsby-config.js and gatsby-node.js files at the repo root
- Create a new branch for your work
- In terminal go to the directory and change to your new branch
- Run `gatsby develop`
- Open the code in your favorite editor and make your edits
- Commit your work and push your changes to the repo (on your branch)

To merge and deploy changes (this should be done for any content and code changes):

- Pull the latest changes
- Checkout the branch with the edits
- Review the changes locally
- If ready to merge run `git checkout master` and then `git merge [change-branch-name]`
- Run `gatsby develop` on the master branch and check to make sure everything builds and loads
- If all is well, push the work to the master branch
- Now run `npm run deploy` - this will run the build step from Gatsby and then push the work to the gh-pages branch of the repo
