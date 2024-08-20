import React, { Component } from 'react';
import { Modal } from 'antd';
import 'antd/dist/reset.css';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by Error Boundary:', error);
    console.error('Error info:', errorInfo);

    Modal.error({
      title: 'An Error Occurred',
      content: (
        <>
          <p>Something went wrong.</p>
          <p>{error.message}</p>
        </>
      ),
      onOk() {},
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>An error has occurred. Please try again later.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
