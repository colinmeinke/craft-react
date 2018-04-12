import App from './components/App'
import config from '../config'
import express from 'express'
import Page from './components/Page'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'

const server = express()

server.use(express.static('web'))

server.get('*', async (req, res) => {
  const { title, content } = await Page.fetchContent(
    `${config.apiOrigin}/${config.apiPath(req.path)}`
  )

  const html = `
    <!doctype html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${renderToString(
          <Router location={req.url} context={{ title, content }}>
            <App />
          </Router>
        )}</div>
        <script src="/app.js"></script>
      </body>
    </html>
  `

  res.send(html)
})

server.listen(3000, () => console.log('Listening on port 3000'))
