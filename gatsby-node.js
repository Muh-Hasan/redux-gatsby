exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/providers/)) {
    page.matchPath = "/providers/*"
    createPage(page)
  }
  if (page.path.match(/^\/articles/)) {
    page.matchPath = "/articles/*"
    createPage(page)
  }
}


// const path = require("path")
// const data = require('./src/data/provider.data.js')

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
  
//   data.default.sections.forEach(item => {
//     createPage({
//       path: `/blogs/${item.languages}`,
//       component: path.resolve("./src/providers/providers-template.component.jsx"),
//     })
//   })
// }