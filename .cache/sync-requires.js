// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/src/pages/index.js")),
  "component---src-pages-skills-js": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/src/pages/skills.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/src/pages/work.js"))
}

exports.json = {
  "layout-index.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/404.json"),
  "about.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/about.json"),
  "contact.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/contact.json"),
  "index.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/index.json"),
  "skills.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/skills.json"),
  "404-html.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/404-html.json"),
  "work.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/work.json")
}