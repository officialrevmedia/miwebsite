// Writes the files that depend on where the site is deployed.
//
//   npm run build         -> GitHub Pages project URL (/miwebsite/)
//   npm run build:domain  -> custom domain root (https://www.muraqabah.ca/)
//
// GitHub Pages has no server-side routing, so 404.html catches every deep
// link and hands the requested path back to the app. The base path is written
// in here at build time so nothing has to be guessed in the browser.

import { writeFileSync } from 'node:fs'

const base = process.env.VITE_BASE || '/miwebsite/'

const notFound = `<!doctype html>
<html lang="en-CA">
  <head>
    <meta charset="UTF-8" />
    <title>Muraqabah Initiative</title>
    <meta name="robots" content="noindex" />
    <script>
      (function () {
        var base = '${base}'
        var path = window.location.pathname
        if (path.indexOf(base) === 0) {
          window.location.replace(
            window.location.origin + base + '?p=' + encodeURIComponent(path) + window.location.hash
          )
        } else {
          window.location.replace(window.location.origin + base)
        }
      })()
    </script>
  </head>
  <body></body>
</html>
`

writeFileSync('dist/404.html', notFound)
console.log(`dist/404.html written for base ${base}`)

if (base === '/') {
  writeFileSync('dist/CNAME', 'www.muraqabah.ca\n')
  console.log('dist/CNAME written: www.muraqabah.ca')
}
