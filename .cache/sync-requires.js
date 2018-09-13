// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/dey14/Documents/code/research-guidelines/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-main-template-js": preferDefault(require("/Users/dey14/Documents/code/research-guidelines/src/templates/mainTemplate.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/dey14/Documents/code/research-guidelines/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/layout-index.json"),
  "ab-test.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/ab-test.json"),
  "affinity-diagram.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/affinity-diagram.json"),
  "card-sort.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/card-sort.json"),
  "empathy-map.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/empathy-map.json"),
  "focus-group.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/focus-group.json"),
  "interview.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/interview.json"),
  "journey-map.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/journey-map.json"),
  "persona.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/persona.json"),
  "participatory-design.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/participatory-design.json"),
  "usability-testing.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/usability-testing.json"),
  "index.json": require("/Users/dey14/Documents/code/research-guidelines/.cache/json/index.json")
}