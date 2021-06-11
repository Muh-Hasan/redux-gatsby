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
