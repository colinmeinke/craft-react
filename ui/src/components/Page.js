import React, { Component } from 'react'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, failed: false, title: null, content: null }
  }

  componentDidMount() {
    this.controller = {}

    if ("AbortController" in self) {
      this.controller = new AbortController()
    }

    fetch(this.props.url, { signal: this.controller.signal })
      .then(res => {
        if (res.status !== 200) {
          throw new Error()
        }

        return res.json()
      })
      .then(({ title, content }) => {
        document.title = title
        this.setState({ loading: false, title, content })
      })
      .catch(() => this.setState({ loading: false, failed: true }))
  }

  componentWillUnmount() {
    if (this.controller.abort === 'function') {
      this.controller.abort()
    }
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>
    } else if (this.state.failed) {
      return <p>Loading failed :(</p>
    }

    return (
      <main>
        <h1>{ this.state.title }</h1>
        <p>{ this.state.content }</p>
      </main>
    )
  }
}

export default Page
