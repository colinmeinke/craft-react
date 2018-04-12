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
  if (req.path.includes('favicon')) {
    return res.status(404).send('not found')
  }

  const initialContext = await Page.fetchContent(
    `${config.apiOrigin}/${config.apiPath(req.path)}`
  )

  const html = `
    <!doctype html>
    <html>
      <head>
        <title>${initialContext.title}</title>
      </head>
      <body>
        <div id="app">${renderToString(
          <Router location={req.url} context={initialContext}>
            <App />
          </Router>
        )}</div>
        <script>
          window.__INITIAL_CONTEXT__ = ${JSON.stringify(initialContext)}
        </script>
        <script src="/app.js"></script>
      </body>
    </html>
  `

  res.send(html)
})

server.listen(3000, () => console.log('Listening on port 3000'))
