import React, { Component } from 'react'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    if (props.title === state.title && props.content === state.content) {
      return null
    }

    return {
      loading: typeof props.title === 'undefined',
      failed: false,
      title: props.title,
      content: props.content
    }
  }

  static fetchContent(url, signal) {
    return fetch(url, { signal })
      .then(res => {
        if (res.status !== 200) {
          throw new Error()
        }

        return res.json()
      })
  }

  fetchContentIfRequired() {
    this.controller = {}

    if (this.state.loading) {
      if ("AbortController" in self) {
        this.controller = new AbortController()
      }

      Page.fetchContent(this.props.url, this.controller.signal)
        .then(({ title, content }) => {
          document.title = title
          this.setState({ loading: false, title, content })
        })
        .catch(() => this.setState({ loading: false, failed: true }))
    }
  }

  componentDidMount() {
    this.fetchContentIfRequired()
  }

  componentDidUpdate() {
    this.fetchContentIfRequired()
  }

  componentWillUnmount() {
    if (typeof this.controller.abort === 'function') {
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
