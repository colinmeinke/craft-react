import React from 'react'
import ReactDOM from 'react-dom'

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

ReactDOM.render(
  <Page url="http://api.craft-react.test/home.json" />,
  document.getElementById('app')
)
