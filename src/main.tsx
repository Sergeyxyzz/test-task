import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './main.scss';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import App from './app/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
