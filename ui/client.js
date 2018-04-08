import config from './config'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, title: null, content: null }
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(({ title, content }) => {
        this.setState({ loading: false, title, content })
      })
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>
    }

    return <main>
      <h1>{ this.state.title }</h1>
      <p>{ this.state.content }</p>
    </main>
  }
}

const Home = () => <Page url={ `${config.apiUrl}/home.json` } />
const About = () => <Page url={ `${config.apiUrl}/about.json` } />

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
