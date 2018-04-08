const path = require('path')
const express = require('express')
const app = express()

const html = `
  <!doctype html>
  <html>
    <head></head>
    <body>
      <div id="app"></div>
      <script src="/app.js"></script>
    </body>
  </html>
`

app.get('/', (req, res) => res.send(html))

app.get('/app.js', (req, res) => (
  res.sendFile(path.join(__dirname, 'dist/app.js'))
))

app.listen(3000, () => console.log('listening on port 3000'))
