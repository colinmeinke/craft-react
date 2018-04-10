const apiPath = path => {
  switch (path) {
    case '/':
      return 'home.json'
    case '/about':
      return 'about.json'
    default:
      return '404.json'
  }
}

export default {
  apiOrigin: 'http://api.craft-react.test',
  apiPath
}
