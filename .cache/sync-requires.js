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
  "component---src-pages-page-2-js": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/src/pages/page-2.js")),
  "component---src-pages-resume-js": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/src/pages/resume.js")),
  "component---src-pages-skills-js": preferDefault(require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/src/pages/skills.js"))
}

exports.json = {
  "layout-index.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/404.json"),
  "about.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/about.json"),
  "contact.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/contact.json"),
  "index.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/index.json"),
  "page-2.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/page-2.json"),
  "resume.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/resume.json"),
  "skills.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/skills.json"),
  "404-html.json": require("/Users/pp-macbookpro/Documents/WebAppProjects/Portfolio/.cache/json/404-html.json")
}