import config from '../../config'
import Page from './Page'
import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    window.__INITIAL_CONTEXT__ = undefined
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Switch>
          <Route exact path="/" render={({ staticContext }) => (
            <Page
              url={ `${config.apiOrigin}/${config.apiPath('/')}` }
              { ...(staticContext || window.__INITIAL_CONTEXT__ || {}) }
            />
          )} />

          <Route path="/about" render={({ staticContext }) => (
            <Page
              url={ `${config.apiOrigin}/${config.apiPath('/about')}` }
              { ...(staticContext || window.__INITIAL_CONTEXT__ || {}) }
            />
          )} />

          <Route render={({ staticContext }) => (
            <Page
              url={ `${config.apiOrigin}/${config.apiPath('/404')}` }
              { ...(staticContext || window.__INITIAL_CONTEXT__ || {}) }
            />
          )} />
        </Switch>
      </div>
    )
  }
}

export default App
