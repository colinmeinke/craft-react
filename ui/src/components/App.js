import config from '../../config'
import Page from './Page'
import React from 'react'
import { Route, Link } from 'react-router-dom'

const Home = () => <Page url={ `${config.apiUrl}/home.json` } />
const About = () => <Page url={ `${config.apiUrl}/about.json` } />

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>

    <Route exact path="/" component={ Home } />
    <Route path="/about" component={ About } />
  </div>
)

export default App
