import React, { ErrorInfo } from 'react'

export default class ErrorBoundary extends React.Component {
  public state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          There was some programm an error. Sorry for that and try reload page.
          Error was sent to our services
        </h1>
      )
    }

    return this.props.children
  }
}
