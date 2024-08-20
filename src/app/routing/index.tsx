import { createBrowserRouter, Navigate } from 'react-router-dom';
import { rootPath } from '../routes';
import MainPage from '../../widgets/main-page';
import ErrorBoundaryWrapper from '../../ErrorBoundary/errorBoundaryWrapper';

const router = createBrowserRouter([
  {
    path: rootPath,
    element: <ErrorBoundaryWrapper element={<MainPage />} />,
  },
  {
    path: '*',
    element: <Navigate to={rootPath} replace />,
  },
]);

export default router;
