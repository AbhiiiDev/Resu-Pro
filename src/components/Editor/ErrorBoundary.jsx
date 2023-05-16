import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or handle it in any other way
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return <div>Something went wrong.</div>;
    }

    // Render the normal component tree when no error has occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
