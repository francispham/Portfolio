# Francis Pham’s Portfolio

A Gatsby and React portfolio with selected work, experience, expertise, and a
separate printable résumé.

## Local development

```sh
npm ci
npm run develop
```

Create a production build with `npm run build`, then preview it with
`npx gatsby serve`. The project uses Gatsby 4; framework and dependency upgrades
should be validated separately from content and design changes.

## Updating content

- `src/data/resume-data.js`: experience, skills, résumé projects, and education.
  The About page also reads the experience list.
- `src/data/projects.js`: selected portfolio projects and additional work.
- `src/data/skills.js`: expertise groups.
- `src/data/constant.js`: navigation and résumé headline.

The main site uses `src/css/portfolio.css`. The résumé keeps its original visual
style in `src/css/resume.css`, with additional print-specific rules.

## Printing the résumé

Open `/resume/` and use the browser’s **Print** command. Choose **US Letter** or
**A4**, portrait orientation, 100% scale, and turn off browser headers and footers.
Enable background graphics to preserve the section colors. The print stylesheet
sets zero page margins, extends the background to every page edge, and preserves
the two-column layout with internal padding for the text.

Recheck both paper sizes after substantial content additions; the layout does not
clip or truncate résumé text to force it onto one page.

## Contact form

The contact form uses Netlify Forms with the form name `contacted` in both the
HTML and submitted payload. It includes a honeypot, required fields, and visible
submission errors. Live delivery requires Netlify Forms to be enabled for the
deployed site; local browser checks should mock submissions rather than send
real messages.
