import React from 'react';
import ErrorBoundary from './';

const ErrorBoundaryWrapper: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  return <ErrorBoundary>{element}</ErrorBoundary>;
};

export default ErrorBoundaryWrapper;
