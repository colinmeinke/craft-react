import config from '../../config'
import Page from './Page'
import React from 'react'
import { Route, Link } from 'react-router-dom'

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>

    <Route path="*" render={({ location, staticContext }) => (
      <Page
        url={ `${config.apiOrigin}/${config.apiPath(location.pathname)}` }
        title={staticContext ? staticContext.title : undefined}
        content={staticContext ? staticContext.content : undefined}
      />
    )} />
  </div>
)

export default App
