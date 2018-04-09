import App from './components/App'
import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'

const server = express()

server.use(express.static('web'))

server.get('*', (req, res) => {
  const html = `
    <!doctype html>
    <html>
      <head></head>
      <body>
        <div id="app">${renderToString(
          <Router location={req.url} context={{}}>
            <App />
          </Router>
        )}</div>
        <script src="/app.js"></script>
      </body>
    </html>
  `

  res.send(html)
})

server.listen(3000, () => console.log('listening on port 3000'))
