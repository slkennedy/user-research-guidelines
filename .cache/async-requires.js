// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-main-template-js": require("gatsby-module-loader?name=component---src-templates-main-template-js!/Users/dey14/Documents/code/research-guidelines/src/templates/mainTemplate.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/dey14/Documents/code/research-guidelines/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/dey14/Documents/code/research-guidelines/.cache/json/layout-index.json"),
  "ab-test.json": require("gatsby-module-loader?name=path---ab-test!/Users/dey14/Documents/code/research-guidelines/.cache/json/ab-test.json"),
  "affinity-diagram.json": require("gatsby-module-loader?name=path---affinity-diagram!/Users/dey14/Documents/code/research-guidelines/.cache/json/affinity-diagram.json"),
  "card-sort.json": require("gatsby-module-loader?name=path---card-sort!/Users/dey14/Documents/code/research-guidelines/.cache/json/card-sort.json"),
  "empathy-map.json": require("gatsby-module-loader?name=path---empathy-map!/Users/dey14/Documents/code/research-guidelines/.cache/json/empathy-map.json"),
  "focus-group.json": require("gatsby-module-loader?name=path---focus-group!/Users/dey14/Documents/code/research-guidelines/.cache/json/focus-group.json"),
  "interview.json": require("gatsby-module-loader?name=path---interview!/Users/dey14/Documents/code/research-guidelines/.cache/json/interview.json"),
  "journey-map.json": require("gatsby-module-loader?name=path---journey-map!/Users/dey14/Documents/code/research-guidelines/.cache/json/journey-map.json"),
  "persona.json": require("gatsby-module-loader?name=path---persona!/Users/dey14/Documents/code/research-guidelines/.cache/json/persona.json"),
  "participatory-design.json": require("gatsby-module-loader?name=path---participatory-design!/Users/dey14/Documents/code/research-guidelines/.cache/json/participatory-design.json"),
  "usability-testing.json": require("gatsby-module-loader?name=path---usability-testing!/Users/dey14/Documents/code/research-guidelines/.cache/json/usability-testing.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/dey14/Documents/code/research-guidelines/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/dey14/Documents/code/research-guidelines/.cache/layouts/index.js")
}