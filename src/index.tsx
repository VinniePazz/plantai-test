import React from 'react'
import ReactDOM from 'react-dom'
import './base.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import App from './App'

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

// Hot module replacement for development and ts tweak
if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  ;(module as any).hot.accept('./App', renderApp)
}

renderApp()
